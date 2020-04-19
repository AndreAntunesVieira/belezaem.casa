import React from 'react'
import styled from 'styled-components'

const About = () => (
  <Container id="sobre" className="DefaultSection">
    <h2>Sobre nós</h2>

    <div className="items">
      <Item
        image="/fotos/saude.jpg"
        title="Saúde e segurança"
        text="Nada de salão lotado, fila de espera, levamos a saúde muito a sério"
      />
      <Item
        image="/fotos/beleza-completa.jpg"
        title="Beleza Completa"
        text="Todos os principais serviços de um salão de beleza, com qualidade e tranquilidade"
      />
      <Item
        image="/fotos/em-casa.jpg"
        title="#EmCasa"
        text="Ambiente descontraído de amizade, com música, bebida,  como se estivesse #EmCasa"
      />
    </div>
  </Container>
)

const Item = ({ image, title, text }) => (
  <div className="item">
    <img src={image} />
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
)

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .items {
    display: flex;
    max-width: 1200px;
    justify-content: center;
    flex-wrap: wrap;
    .item {
      width: 360px;
      margin: 0 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h3 {
        font-size: 22px;
        color: rgba(0, 0, 0, 0.6);
        font-family: var(--title-font-family);
        font-weight: var(--title-font-weight);
      }
      img {
        border-radius: 50%;
        height: 230px;
        width: 230px;
      }
      p {
        text-align: center;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.6);
      }
      @media (max-width: 768px) {
        margin: 16px 0;
      }
    }
    @media (max-width: 768px) {
      & {
        flex-direction: column;
      }
    }
  }
`

export default About
