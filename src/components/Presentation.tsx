import React from 'react'
import styled from 'styled-components'

const Presentation = () => (
  <Container id="apresentacao" data-img1="/fotos/6Wjaea.jpg" data-img2="/fotos/QBrrGPa.jpg">
    <div className="header">
      <h1>
        <img alt="Beleza em casa" src="/logo-white-50.png" className="logo" />
      </h1>
    </div>
    <div className="slogan">Bem-vindo(a) a Beleza em casa</div>
    <div className="contacts">
      <h3>Contatos:</h3>
      <div>
        <a
          target="_blank"
          href="https://api.whatsapp.com/send?phone=5551989108976&text=Oi%2C%20gostaria%20de%20agendar%20servi%C3%A7o%20de%3A">
          <small>Gaby</small>
          <div>
            <img src="/whatsapp.png" />
            51 98910-8976
          </div>
        </a>
        <span>&</span>
        <a
          target="_blank"
          href="https://api.whatsapp.com/send?phone=5551982073632&text=Oi%2C%20gostaria%20de%20agendar%20servi%C3%A7o%20de%3A">
          <small>Thay</small>
          <div>
            <img src="/whatsapp.png" />
            51 98207-3632
          </div>
        </a>
      </div>
    </div>
  </Container>
)

const Container = styled.section`
  min-height: 85vh;
  background-image: url(/fotos/w65xrjq.jpg);
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  > * {
    flex-grow: 1;
  }
  .header {
    text-align: center;
    padding: 0 16px 16px 16px;
    flex-grow: 0;
  }
  h1 {
    margin: 0;
    padding: 8px;
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    font-family: var(--title-font-family);
    font-weight: var(--title-font-weight);
  }
  .slogan {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 60px;
    color: white;
    letter-spacing: 4px;
    font-family: var(--title-font-family);
    font-weight: var(--title-font-weight);
    text-align: center;
    @media (max-width: 768px) {
      font-size: 40px;
    }
  }
  .contacts {
    flex-grow: 0;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 28px;
    > * {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }
    h3 {
      margin: 0;
      padding: 8px 16px;
      background-color: rgba(0, 0, 0, 0.2);
      color: white;
      border-radius: 8px;
    }
    a {
      padding: 8px 16px;
      background-color: rgba(0, 0, 0, 0.2);
      color: white;
      font-weight: bold;
      margin: 8px;
      transition: all ease 150ms;
      border-radius: 8px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      small {
        width: 100%;
        text-align: center;
        font-size: 13px;
      }
      img {
        width: 24px;
        height: 24px;
        margin-right: 8px;
      }
      &:hover {
        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 16px;
      }
    }
  }
  @media (max-width: 768px) {
    .contacts {
      > * {
        flex-direction: column;
      }
    }
  }
`

export default Presentation
