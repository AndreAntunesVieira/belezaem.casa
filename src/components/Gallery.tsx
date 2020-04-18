import React, { useEffect } from 'react'
import styled from 'styled-components'

export default () => {
  let gallery: any
  useEffect(() => {
    gallery = new GallerySlider('#galeria .images')
  }, [])
  return (
    <Container id="galeria" className="DefaultSection">
      <h2>Galeria</h2>

      <div className="images" onMouseEnter={() => gallery.stop()} onMouseLeave={() => gallery.start()}>
        <a
          target="_blank"
          href="https://www.instagram.com/p/B-pQw58HGFh/?utm_source=ig_web_button_share_sheet"
          data-text="Da série “A vida é muito curta para ter cabelo chato” parte 2. Já passou o tempo que ter cabelo colorido era
            um problema. Hoje com os produtos certos e claro, sempre com um profissional qualificado, você pode ter a
            liberdade de mudar de cor sem se tornar refém dela. O André saiu do verde neon em menos de um mês para um
            cabelo platinado e saudável!!! Viva a liberdade, viva você 😍 Arraste para ver o antes ⏩ Cor e corte.">
          <img
            alt="Photo shared by 🍀Thaynara Oliveira 🍀 on April 06, 2020 tagging @andreantunesvieira. A imagem pode conter: 1 pessoa, selfie e close-up"
            className="FFVAD"
            decoding="auto"
            sizes="509px"
            src="/galeria/1.jpg"
          />
        </a>

        <a
          href="https://www.instagram.com/p/B0TrgseHyNs/?utm_source=ig_web_copy_link"
          data-text="Francesinha diferenciada 💅🏼✨"
          target="_blank">
          <img
            alt="Photo by Gabriela Almeida S in Santo Ofício Cabelo &amp; Arte with @santooficiocabeloearte. A imagem pode conter: uma ou mais pessoas"
            className="FFVAD"
            decoding="auto"
            sizes="600px"
            src="https://instagram.fpoa13-1.fna.fbcdn.net/v/t51.2885-15/e35/66674183_950304378654205_8562375319157423989_n.jpg?_nc_ht=instagram.fpoa13-1.fna.fbcdn.net&amp;_nc_cat=101&amp;_nc_ohc=bK_46Wg4J90AX9QfomZ&amp;oh=515e7772fe7be3c847ebe156f3559c8b&amp;oe=5EC623A2"
          />
        </a>

        <a
          href="https://www.instagram.com/p/B-XkID7HJoB/?utm_source=ig_web_button_share_sheet"
          target="_blank"
          data-text="✂️ Mariene ✂️ Porque a vida é muito curta para ter cabelo chato.">
          <img
            alt="Photo shared by 🍀Thaynara Oliveira 🍀 on March 30, 2020 tagging @marienehubner_. A imagem pode conter: 2 pessoas, close-up"
            className="FFVAD"
            decoding="auto"
            sizes="490px"
            src="/galeria/2.jpg"
          />
        </a>

        <a
          href="https://www.instagram.com/p/B8eiwOknWYN/?utm_source=ig_web_copy_link"
          target="_blank"
          data-text="✨ Lash Lifting ✨">
          <img
            alt="Photo by Gabriela Almeida S in Santo Ofício Cabelo &amp; Arte with @lilaczar. A imagem pode conter: 1 pessoa, close-up"
            className="FFVAD"
            decoding="auto"
            sizes="600px"
            src="/galeria/3.jpg"
          />
        </a>

        <a
          href="https://www.instagram.com/p/B1Moeu1Bxb-/?utm_source=ig_web_copy_link"
          target="_blank"
          data-text="Uma make maravilhosa pra uma mulher MARAVILHOSA @carolkauss 😍✨♥️">
          <img
            alt="Photo shared by Gabriela Almeida S on August 15, 2019 tagging @carolkauss. A imagem pode conter: uma ou mais pessoas e close-up"
            className="FFVAD"
            decoding="auto"
            sizes="600px"
            src="/galeria/4.jpg"
          />
        </a>
      </div>
    </Container>
  )
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color-01);
  .images {
    display: flex;
    max-width: 1200px;
    overflow-x: scroll;
    scroll-behavior: smooth;
    a {
      display: inline-flex;
      position: relative;
      &:before {
        content: 'Clique para ver no Instagram';
        position: absolute;
        top: 24px;
        right: 24px;
        background-color: rgba(0, 0, 0, 0.6);
        color: white;
        padding: 4px 8px;
        border-radius: 8px;
        font-size: 12px;
        opacity: 0.5;
        transition: all ease 300ms;
      }
      &:after {
        content: attr(data-text);
        position: absolute;
        bottom: 0;
        margin: 0;
        background-color: rgba(0, 0, 0, 0.6);
        color: white;
        padding: 8px 16px;
        opacity: 0.2;
        transition: all ease 300ms;
        width: 100%;
      }
      &:hover, &.active {
        &:before {
          opacity: 1;
          background: -webkit-linear-gradient(90deg, var(--primary-color), var(--secondary-color));
          background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
        }
        &:after {
          opacity: 1;
        }
      }
      border: 3px solid transparent;
      &.active {
        border: 3px solid var(--main-color);
      }
    }
  }
  img {
    object-fit: cover;
  }
`

class GallerySlider {
  private element: any
  private x: number
  private interval: any
  private offset: number
  private activeIndex: number
  private children: any[]
  private widths: any[]

  constructor(query) {
    this.element = document.querySelector(query)
    this.element.style.overflowX = 'hidden'
    this.children = [...this.element.children]
    this.x = 0
    this.activeIndex = -1
    this.offset = 10
    this.widths = []
    this.start()
    this.setWidths()
  }

  setWidths() {
    let width = 0
    this.children.forEach((child, i) => {
      if (i === 0) {
        width = child.scrollWidth / 2
      } else {
        width += child.scrollWidth
      }
      this.widths.push(width)
    })
  }

  start() {
    this.interval = setInterval(this.scroll.bind(this), 100)
  }

  stop() {
    clearInterval(this.interval)
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
      console.log('activeIndex', activeIndex, this.x)
    }
    if (activeIndex !== this.activeIndex) {
      console.log('activeIndex', this.widths)
      this.activeIndex = activeIndex
      this.children.forEach((child, i) => {
        console.log(i, activeIndex, i === activeIndex)
        if (i === activeIndex) this.children[i].classList.add('active')
        else this.children[i].classList.remove('active')
      })
      console.log(this.children)
    }
  }
  revert() {
    this.offset = -1 * this.offset
  }
}
