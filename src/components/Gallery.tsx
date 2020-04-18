import React, { useEffect } from 'react'
import styled from 'styled-components'

export default () => {
  useEffect(() => {
    // @ts-ignore
    const a = GLightbox({ selector: 'glightbox-demo' })
    console.log(a)
  }, [])
  return (
    <Container id="galeria" data-img1="/fotos/6Wjaea.webp" data-img2="/fotos/QBrrGPa.webp" className="DefaultSection">
      <h2>Galeria</h2>

      <div className="images">
        <a
          href="https://www.instagram.com/p/B-pQw58HGFh/?utm_source=ig_web_button_share_sheet"
          className="glightbox-demo"
          data-text="Da série “A vida é muito curta para ter cabelo chato” parte 2. Já passou o tempo que ter cabelo colorido era
            um problema. Hoje com os produtos certos e claro, sempre com um profissional qualificado, você pode ter a
            liberdade de mudar de cor sem se tornar refém dela. O André saiu do verde neon em menos de um mês para um
            cabelo platinado e saudável!!! Viva a liberdade, viva você 😍 Arraste para ver o antes ⏩ Cor e corte.">
          <img
            alt="Photo shared by 🍀Thaynara Oliveira 🍀 on April 06, 2020 tagging @andreantunesvieira. A imagem pode conter: 1 pessoa, selfie e close-up"
            className="FFVAD"
            decoding="auto"
            style={{ objectFit: 'cover' }}
            sizes="509px"
            srcSet="https://instagram.fpoa13-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/92024224_239152434122191_4659765156407886466_n.jpg?_nc_ht=instagram.fpoa13-1.fna.fbcdn.net&amp;_nc_cat=107&amp;_nc_ohc=f-LmLAI2hZ8AX_5tqSz&amp;oh=f28a28bb882a0520164a15278ebf857f&amp;oe=5EC42220 640w,https://instagram.fpoa13-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/92024224_239152434122191_4659765156407886466_n.jpg?_nc_ht=instagram.fpoa13-1.fna.fbcdn.net&amp;_nc_cat=107&amp;_nc_ohc=f-LmLAI2hZ8AX_5tqSz&amp;oh=7086e976b88b1091a597c9b525e22df1&amp;oe=5EC5CBA0 750w,https://instagram.fpoa13-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/92024224_239152434122191_4659765156407886466_n.jpg?_nc_ht=instagram.fpoa13-1.fna.fbcdn.net&amp;_nc_cat=107&amp;_nc_ohc=f-LmLAI2hZ8AX_5tqSz&amp;oh=95e72d3503255c3445db677f533878a3&amp;oe=5EC30B7B 1080w"
            src="https://instagram.fpoa13-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/92024224_239152434122191_4659765156407886466_n.jpg?_nc_ht=instagram.fpoa13-1.fna.fbcdn.net&amp;_nc_cat=107&amp;_nc_ohc=f-LmLAI2hZ8AX_5tqSz&amp;oh=95e72d3503255c3445db677f533878a3&amp;oe=5EC30B7B"
          />
        </a>

        <a
          href="https://www.instagram.com/p/B-XkID7HJoB/?utm_source=ig_web_button_share_sheet"
          className="glightbox-demo">
          <img
            alt="Photo shared by 🍀Thaynara Oliveira 🍀 on March 30, 2020 tagging @marienehubner_. A imagem pode conter: 2 pessoas, close-up"
            className="FFVAD"
            decoding="auto"
            sizes="490px"
            style={{ objectFit: 'cover' }}
            srcSet="https://instagram.fpoa13-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/91404557_245234293538757_3253570499622300804_n.jpg?_nc_ht=instagram.fpoa13-1.fna.fbcdn.net&amp;_nc_cat=109&amp;_nc_ohc=DV9lQyaWkOQAX9-EoWD&amp;oh=dbd0db396d5acf808bfec9dbd3a32394&amp;oe=5EC3CE8B 640w,https://instagram.fpoa13-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/91404557_245234293538757_3253570499622300804_n.jpg?_nc_ht=instagram.fpoa13-1.fna.fbcdn.net&amp;_nc_cat=109&amp;_nc_ohc=DV9lQyaWkOQAX9-EoWD&amp;oh=1a2414e5079ae1ccada158506f4c8869&amp;oe=5EC3340B 750w,https://instagram.fpoa13-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/91404557_245234293538757_3253570499622300804_n.jpg?_nc_ht=instagram.fpoa13-1.fna.fbcdn.net&amp;_nc_cat=109&amp;_nc_ohc=DV9lQyaWkOQAX9-EoWD&amp;oh=e27a177a7815dfab9c367cfa6bf446d2&amp;oe=5EC5B370 1080w"
            src="https://instagram.fpoa13-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/91404557_245234293538757_3253570499622300804_n.jpg?_nc_ht=instagram.fpoa13-1.fna.fbcdn.net&amp;_nc_cat=109&amp;_nc_ohc=DV9lQyaWkOQAX9-EoWD&amp;oh=e27a177a7815dfab9c367cfa6bf446d2&amp;oe=5EC5B370"
          />
        </a>

        <a href="https://www.instagram.com/p/B8eiwOknWYN/?utm_source=ig_web_copy_link" className="glightbox-demo">
          <img
            alt="Photo by Gabriela Almeida S in Santo Ofício Cabelo &amp; Arte with @lilaczar. A imagem pode conter: 1 pessoa, close-up"
            className="FFVAD"
            decoding="auto"
            sizes="600px"
            srcSet="https://instagram.fpoa13-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/83450492_2170572239711815_6819682478855908395_n.jpg?_nc_ht=instagram.fpoa13-1.fna.fbcdn.net&amp;_nc_cat=107&amp;_nc_ohc=rkoG8SkG5MoAX-VUY87&amp;oh=b08d8f492251c074e28297ccc7ced95c&amp;oe=5EC44A07 640w,https://instagram.fpoa13-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/83450492_2170572239711815_6819682478855908395_n.jpg?_nc_ht=instagram.fpoa13-1.fna.fbcdn.net&amp;_nc_cat=107&amp;_nc_ohc=rkoG8SkG5MoAX-VUY87&amp;oh=1a0a017067792c0424f8b205e39ff6d5&amp;oe=5EC59343 750w,https://instagram.fpoa13-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/83450492_2170572239711815_6819682478855908395_n.jpg?_nc_ht=instagram.fpoa13-1.fna.fbcdn.net&amp;_nc_cat=107&amp;_nc_ohc=rkoG8SkG5MoAX-VUY87&amp;oh=f9e16b4a0150127750888ba7f4ea6361&amp;oe=5EC43743 1080w"
            src="https://instagram.fpoa13-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/83450492_2170572239711815_6819682478855908395_n.jpg?_nc_ht=instagram.fpoa13-1.fna.fbcdn.net&amp;_nc_cat=107&amp;_nc_ohc=rkoG8SkG5MoAX-VUY87&amp;oh=f9e16b4a0150127750888ba7f4ea6361&amp;oe=5EC43743"
          />
        </a>

        <a href="https://www.instagram.com/p/B1Moeu1Bxb-/?utm_source=ig_web_copy_link" className="glightbox-demo">
          <img
            alt="Photo shared by Gabriela Almeida S on August 15, 2019 tagging @carolkauss. A imagem pode conter: uma ou mais pessoas e close-up"
            className="FFVAD"
            decoding="auto"
            sizes="600px"
            srcSet="https://instagram.fpoa13-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/67402613_1328967690585707_6872019713448155275_n.jpg?_nc_ht=instagram.fpoa13-1.fna.fbcdn.net&amp;_nc_cat=111&amp;_nc_ohc=Rm3cy4mZsokAX9RVHgo&amp;oh=63d279fe557d3a299fd2e354600fd537&amp;oe=5EC2C7C9 640w,https://instagram.fpoa13-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/67402613_1328967690585707_6872019713448155275_n.jpg?_nc_ht=instagram.fpoa13-1.fna.fbcdn.net&amp;_nc_cat=111&amp;_nc_ohc=Rm3cy4mZsokAX9RVHgo&amp;oh=3b6b0456211798cb7ce31ad58f25f052&amp;oe=5EC37E8D 750w,https://instagram.fpoa13-1.fna.fbcdn.net/v/t51.2885-15/e35/67402613_1328967690585707_6872019713448155275_n.jpg?_nc_ht=instagram.fpoa13-1.fna.fbcdn.net&amp;_nc_cat=111&amp;_nc_ohc=Rm3cy4mZsokAX9RVHgo&amp;oh=356d53e7b17a05e9441bb7187937c7ee&amp;oe=5EC4DD73 1080w"
            src="https://instagram.fpoa13-1.fna.fbcdn.net/v/t51.2885-15/e35/67402613_1328967690585707_6872019713448155275_n.jpg?_nc_ht=instagram.fpoa13-1.fna.fbcdn.net&amp;_nc_cat=111&amp;_nc_ohc=Rm3cy4mZsokAX9RVHgo&amp;oh=356d53e7b17a05e9441bb7187937c7ee&amp;oe=5EC4DD73"
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
  .images {
    display: flex;
    max-width: 1200px;
    overflow-x: scroll;
    a {
      display: inline-flex;
      position: relative;
      &:after {
        content: attr(data-text);
        position: absolute;
        bottom: 0;
        margin: 0;
        min-height: 50px;
        background-color: rgba(0, 0, 0, 0.6);
        color: white;
        padding: 8px 16px;
        opacity: 0.2;
        transition: all ease 300ms;
        width: 100%;
      }
      &:hover {
        &:after {
          opacity: 1;
        }
      }
    }
  }
  img {
    object-fit: cover;
  }
`
