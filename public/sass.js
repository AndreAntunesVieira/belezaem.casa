var sass = require('sass')
var fs = require('fs')

sass.render({ file: './style.scss' }, function (err, result) {
  fs.writeFile('./style.css', result.css.toString(), function (err) {
    if (err) console.log(err)
  })
})
