require('universal-fetch')
const express = require('express')
const app = express()

app
  .get('/', async (req, res) => {
        const links = `https://www.instagram.com/p/B9nDR0qnenq/?igshid=1ijw3dbsshtb8
    https://www.instagram.com/p/B9hZFLWHX4e/?igshid=kk0ahz8dmye3
    https://www.instagram.com/p/B5-i_H0HSoa/?igshid=1xc6ipbi8g8i2
    https://www.instagram.com/p/B3NCtLSnKoc/?igshid=1hokvyvhlfwbs
    https://www.instagram.com/p/ByQnLSpBCDD/?igshid=5hi1laa6g2ir
    https://www.instagram.com/p/B97Z59EBLax/?igshid=1va8eay92w9n9
    https://www.instagram.com/p/B7WP1jQB4fG/?igshid=115qpfbp37l0y
    https://www.instagram.com/p/B9b0LNgHArM/?igshid=1gz8tu4cl77fk
    https://www.instagram.com/p/B7uJlqYhHoZ/?igshid=z5aupqfqkfcn
    https://www.instagram.com/p/B6iTtsSHmHn/?igshid=1lradr9u1mw6l
    https://www.instagram.com/p/B1wq0yOB9H4/?igshid=1bzjfvk2xlp9t
    https://www.instagram.com/p/B3A1gFjBQTU/?igshid=1sinagaoeccps`
    const promises = links.split('\n').map(async link => {
      const r = await fetch(link)
      const content = await r.text()
      const description = content
        .replace(/\n/g, 'å')
        .replace(/.*<meta property="og:description" content="(.+)">.*/, '$1')
        .replace(/".*/, '')
        .replace(/.*on Instagram: /, '')
      const config = content
        .replace(/\n/g, 'å')
        .replace(/.*<script type="text\/javascript">window\._sharedData = /, '')
        .replace(/;(.*)?<\/script>.*/, '')
      const resources = JSON.parse(config).entry_data.PostPage[0].graphql.shortcode_media.display_resources
      const image = {
        src: resources[0].src,
        width: resources[0].config_width,
        height: resources[0].config_height,
      }
      return { link, description, image }
    })

    const results = await Promise.all(promises)
    console.log(results)
    res.send(JSON.stringify(results))
  })
  .listen(3002)
