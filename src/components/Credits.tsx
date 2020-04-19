import React from 'react'
import styled from 'styled-components'

const Credits = () => (
  <Container id="creditos" className="DefaultSection">
    <div className="content">
      <div>
        Desenvolvido por{' '}
        <a href="https://www.linkedin.com/in/andreantunesvieira/" target="_blank">
          @AndreAntunesVieira
        </a>
      </div>
      <div>Usando React + NextJs</div>
    </div>
  </Container>
)

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  .content {
    max-width: 1200px;
    width: 100%;
    padding: 16px;
    display: flex;
    justify-content: space-between;
  }
  a {
    color: var(--secondary-color);
    &:hover {
      color: var(--secondary-color-bright);
    }
  }
`
export default Credits
