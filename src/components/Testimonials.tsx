import React, { useEffect } from 'react'
import styled from 'styled-components'

const getAllTestimonials = async () => {
  const res = await fetch(`/api/testimonials`, { headers: {'Content-Type': 'application/json'}})
  const content = await res.json()
  console.log(content)
}

const Testimonials = () => {
  useEffect(() => {
    getAllTestimonials()
  }, [])
  return (
    <Container id="depoimentos" className="DefaultSection">
      <script src="//cdn.jsdelivr.net/npm/faunadb@latest/dist/faunadb-min.js" />
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
  min-height: 600px;
  position: relative;
  background-color: black;
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    background-image: url(/fotos/boca.jpg);
    background-position: center center;
    background-size: cover;
    opacity: 0.6;
  }
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
export default Testimonials
