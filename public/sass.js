var sass = require('sass')
var fs = require('fs')

sass.render({ file: './style2.scss' }, function (err, result) {
  fs.writeFile('./style2.css', result.css.toString(), function (err) {
    if (err) console.log(err)
  })
})
