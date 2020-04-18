import React from 'react'
import styled from 'styled-components'

export default () => (
  <Container id="apresentacao" data-img1="/fotos/6Wjaea.webp" data-img2="/fotos/QBrrGPa.webp">
    <div className="header">
      <h1>Beleza em casa</h1>
    </div>
    <div className="slogan">Bem-vindo(a) a Beleza em casa</div>
    <div className="contacts">
      <div>Contatos:</div>
      <div>
        <a target="_blank" href="https://api.whatsapp.com/send?phone=5551989108976&text=Oi%2C%20gostaria%20de%20agendar%20servi%C3%A7o%20de%3A">
          <img src="/whatsicon.webp" />
          51 98910-8976
        </a>
        <span>&</span>
        <a target="_blank" href="https://api.whatsapp.com/send?phone=5551982073632&text=Oi%2C%20gostaria%20de%20agendar%20servi%C3%A7o%20de%3A">
          <img src="/whatsicon.webp" />
          51 98207-3632
        </a>
      </div>
    </div>
  </Container>
)

const Container = styled.section`
  min-height: 85vh;
  background-image: url(/fotos/w65xrjq.webp);
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
    padding: 16px;
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    font-family: 'League Spartan', Arial, sans-serif;
  }
  .slogan {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 60px;
    color: white;
    letter-spacing: 4px;
    font-family: 'League Spartan', Arial, sans-serif;
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
      align-items: center;
      justify-content: center;
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
      img {
        width: 32px;
        height: 32px;
        margin-right: 8px;
      }
      &:hover {
        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 16px;
      }
    }
  }
`
