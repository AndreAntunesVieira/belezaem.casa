import React, { useEffect } from 'react'
import styled from 'styled-components'

export default () => {
  return (
    <Container id="depoimentos" className="DefaultSection">
      <h2>Depoimentos</h2>

      <div>
        <div className="disclaimer">
          <span>Em Breve</span>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  background-image: url(/boca.webp);
  min-height: 600px;
  background-position: center center;
  background-size: cover;
  div {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .disclaimer {
    padding: 48px;
    background-color: rgba(255, 255, 255, 0.6);
    font-weight: bold;
    font-size: 32px;
    border-radius: 8px;
    background: -webkit-linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    color: white;
    opacity: 0.8;
  }
`
