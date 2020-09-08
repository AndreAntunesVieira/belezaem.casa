import fetch from 'node-fetch'
import posts from '../../public/instagram/posts.json'

console.log(posts)

run()

async function run() {
  const promises = posts.map(runOne)
  console.log(await Promise.all(promises))
}

async function runOne(link) {
  const r = await fetch(link)
  const result = await r.text()
  const content = JSON.parse(
    result
      .replace(/\n/g, '')
      .replace(/.*window._sharedData = /, '')
      .replace(/;<\/script>.*/, '')
  )
  const description = content.entry_data.PostPage[0].graphql.shortcode_media.edge_media_to_caption.edges[0].node.text
    .replace(/\n/g, ' ')
    .substr(0, 100)
  const image = content.entry_data.PostPage[0].graphql.shortcode_media.display_resources[0]
  image.width = image.config_width
  image.height = image.config_height
  delete image.config_width
  delete image.config_height
  return { link, description, image }
}

export default posts
