import React, { useEffect } from 'react'
import styled from 'styled-components'

export default () => {
  return (
    <Container id="creditos" className="DefaultSection">
      <div className="content">
        <div>Desenvolvido por @AndreAntunesVieira</div>
        <div>Usando React + NextJs</div>
      </div>
    </Container>
  )
}

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
`
