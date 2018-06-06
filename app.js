const express = require('express')
const app = express()
function getStr()
{
  str = "<h1>you know? </h1>\
  <p>chinese nation is good. line1<br>Automatic build.</p>"
  return str;

}
app.get('/', function (req, res) {
//  res.send('Hello World!!!!')
  res.send(getStr() );
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})