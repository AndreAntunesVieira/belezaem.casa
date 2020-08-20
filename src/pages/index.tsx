import React, { useEffect } from 'react'
import Presentation from '../components/Presentation'
import About from '../components/About'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import Credits from '../components/Credits'
import Menu from '../components/Menu'
import A from '../components/common/A'
import Prismic from 'prismic-javascript'

const apiEndpoint = 'https://belezaemcasa.cdn.prismic.io/api/v2'
export default () => {
  useEffect(() => {
    Prismic.getApi(apiEndpoint, {})
      .then(api => {
        return api.query(Prismic.Predicates.at('document.tags', ['home']))
      })
      .then((response: any) => {
        const data = new PrismicParser(response).parse()
        console.log('Documents: ', data)
      })
  }, [])
  return (
    <>
      <Presentation />
      <About />
      <Gallery />
      <Testimonials />
      <Credits />
      <Menu>
        <A href="#sobre">Sobre</A>
        <A href="#galeria">Galeria</A>
        <A href="/agenda">Agenda</A>
      </Menu>
    </>
  )
}

class PrismicParser {
  constructor(private response) {}
  parse() {
    const sections = this.response.results[0].data.body
    console.log(sections)
    const result: any = sections.map(section => {
      const sectionResult: any = {
        items: section.items,
      }
      const primary = section.primary
      Object.entries(primary).forEach(([name, value]) => {
        sectionResult[name] = value
      })

      return sectionResult
    })

    return result
  }
}
