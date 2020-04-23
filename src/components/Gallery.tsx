import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import GallerySlider from '../helpers/GallerySlider'
import instagramGallery from './instagramGallery'

const images = instagramGallery.sort(() => (Math.random() > 0.5 ? -1 : 1))

const Gallery = () => {
  let gallery: any
  useEffect(() => {
    gallery = new GallerySlider('#galeria .images')
  }, [])
  return (
    <Container id="galeria" className="DefaultSection">
      <h2>Galeria</h2>
      <div
        className="images"
        onTouchStart={e => gallery.onTouchStart(e)}
        onTouchEnd={e => gallery.onTouchEnd(e)}
        onMouseEnter={() => gallery.onMouseEnter()}
        onMouseLeave={() => gallery.onMouseLeave()}
        onMouseMove={e => gallery.onMouseMove(e)}>
        {images.map(post => (
          <a target="_blank" href={post.link} data-text={post.description}>
            <img
              alt={post.description}
              decoding="auto"
              src={post.image.src}
              width={post.image.width}
              height={post.image.height}
            />
          </a>
        ))}
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
    width: 100%;
    max-width: 1200px;
    overflow-x: scroll;
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
      &:hover,
      &.active {
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
    img {
      object-fit: cover;
      max-height: 80vh;
      width: auto;
      position: relative;
      @media (max-width: 768px) {
        height: 300px;
      }
    }
  }
`

export default Gallery
