export default class GallerySlider {
  private element: any
  private x: number
  private interval: any
  private offset: number
  private activeIndex: number
  private children: any[]
  private widths: any[]
  private running: boolean
  private hover: boolean

  constructor(query) {
    this.element = document.querySelector(query)
    this.element.style.overflowX = 'hidden'
    this.children = [...this.element.children]
    this.x = 0
    this.activeIndex = -1
    this.offset = 3
    this.widths = []
    this.running = false
    this.hover = false
    this.setWidths()
    document.addEventListener('scroll', this.onScroll.bind(this))
  }

  onScroll() {
    if (!this.running && !this.hover) {
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

  setWidths() {
    let width = 0
    this.children.forEach((child, i) => {
      if (i === 0) {
        width = child.scrollWidth / 2
      } else if (i >= this.children.length - 2) {
        width += child.scrollWidth / 2
      } else {
        width += child.scrollWidth
      }
      this.widths.push(width)
    })
  }

  start() {
    if (this.running) return null
    this.interval = setInterval(this.scroll.bind(this), 40)
    this.running = true
  }

  stop() {
    if (!this.running) return null
    clearInterval(this.interval)
    this.running = false
  }

  scroll() {
    this.x += this.offset
    this.element.scrollTo(this.x, 0)
    if (this.offset > 0 && this.element.scrollWidth - this.element.clientWidth <= this.element.scrollLeft) this.revert()
    if (this.offset < 0 && this.element.scrollLeft <= 0) this.revert()
    this.updateActive()
  }
  updateActive() {
    let activeIndex = this.activeIndex
    if (this.offset > 0) {
      activeIndex = this.widths.findIndex(width => this.x < width)
    } else {
      activeIndex = this.widths.findIndex(width => this.x + 200 < width)
    }
    if (activeIndex !== this.activeIndex) {
      this.activeIndex = activeIndex
      this.children.forEach((child, i) => {
        if (i === activeIndex) this.children[i].classList.add('active')
        else this.children[i].classList.remove('active')
      })
    }
  }
  revert() {
    this.offset = -1 * this.offset
  }
}
