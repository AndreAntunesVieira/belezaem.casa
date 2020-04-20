import React from 'react'

export default class GallerySlider {
  private element: any
  private x: number
  private interval: any
  private offset: number
  private activeIndex: number
  private children: any[]
  private widths: any[]
  private activeWidths: any[]
  private running: boolean
  private hover: boolean
  private touched: boolean
  private touchStart: number

  constructor(query) {
    this.element = document.querySelector(query)
    this.element.style.overflowX = 'hidden'
    this.children = [...this.element.children]
    this.x = 0
    this.activeIndex = -1
    this.children[0].classList.add('active')
    this.offset = 3
    this.widths = []
    this.activeWidths = []
    this.running = false
    this.hover = false
    this.touched = false
    this.touchStart = 0
    this.setWidths()
    document.addEventListener('scroll', this.onScroll.bind(this))
  }
  onScroll() {
    if (!this.running && !this.hover && !this.touched) {
      if (window.scrollY + window.innerHeight - 200 >= this.element.offsetTop) {
        this.start()
      }
    } else {
      if (window.scrollY + window.innerHeight - 200 < this.element.offsetTop) {
        this.stop()
      }
    }
  }
  onMouseEnter() {
    this.hover = true
    this.stop()
  }
  onMouseLeave() {
    this.hover = false
    this.start()
  }
  onMouseMove(e) {
    e.preventDefault()
  }
  onTouchStart(e) {
    this.stop()
    const touchElement = e.changedTouches[0]
    this.touchStart = touchElement.pageX
    this.hover = false
    this.touched = true
  }
  onTouchEnd(e) {
    const touchElement = e.changedTouches[0]
    const diff = touchElement.pageX - this.touchStart
    this.hover = false
    if (Math.abs(diff) < 30) return this.start()
    if (diff > 0) return this.slideLeft()
    return this.slideRight()
  }
  slideLeft() {
    if (this.activeIndex - 1 < 0) return null
    let newX = this.widths[this.activeIndex - 2] || 0
    const index = this.activeIndex - 1
    const widthDiff = this.getWidthDiff(index, index > 0)
    this.setXAnimated(newX - widthDiff)
    this.setActive(index)
  }
  slideRight() {
    if (this.activeIndex + 2 > this.widths.length) return null
    let newX = this.widths[this.activeIndex]
    const index = this.activeIndex + 1
    const widthDiff = this.getWidthDiff(index, index < this.children.length - 1)
    this.setXAnimated(newX - widthDiff)
    this.setActive(index)
  }
  getWidthDiff(index, rule) {
    const width = this.children[index].scrollWidth
    return rule ? Math.ceil((window.innerWidth - width - 16) / 2) : 0
  }
  setWidths() {
    let activeWidth = 0
    let width = 0
    this.children.forEach((child, i) => {
      if (i === 0) {
        activeWidth = child.scrollWidth / 2
      } else if (i >= this.children.length - 2) {
        activeWidth += child.scrollWidth / 2
      } else {
        activeWidth += child.scrollWidth
      }
      width += child.scrollWidth + 6
      this.activeWidths.push(activeWidth)
      this.widths.push(width)
    })
  }
  start() {
    if (this.running) return null
    this.interval = setInterval(this.slideAside.bind(this), 40)
    this.running = true
  }
  stop() {
    clearInterval(this.interval)
    if (!this.running) return null
    this.running = false
  }
  setX(x) {
    this.x = x
    this.element.scrollTo(this.x, 0)
  }
  setXAnimated(x) {
    const current = this.x
    let count = 10
    const step = (x - current) / count
    this.setAnimatedStep(step, count)
  }
  setAnimatedStep(step, count) {
    this.x += step
    this.element.scrollTo(this.x, 0)
    if (--count > 0) return setTimeout(() => this.setAnimatedStep(step, count), 40)
    this.touched = false
  }
  slideAside() {
    this.setX(this.x + this.offset)
    if (this.offset > 0 && this.element.scrollWidth - this.element.clientWidth <= this.element.scrollLeft) this.revert()
    if (this.offset < 0 && this.element.scrollLeft <= 0) this.revert()
    this.updateActive()
  }
  updateActive() {
    let activeIndex = this.activeIndex
    if (this.offset > 0) {
      activeIndex = this.activeWidths.findIndex(width => this.x < width)
    } else {
      activeIndex = this.activeWidths.findIndex(width => this.x + 200 < width)
    }
    if (activeIndex !== this.activeIndex) {
      this.setActive(activeIndex)
    }
  }
  setActive(activeIndex) {
    this.activeIndex = activeIndex
    this.children.forEach((child, i) => {
      if (i === activeIndex) this.children[i].classList.add('active')
      else this.children[i].classList.remove('active')
    })
  }
  revert() {
    this.offset = -1 * this.offset
  }
}
