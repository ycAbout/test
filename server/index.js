const express = require('express');
const path = require('path');

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, "..", "frontend", "build")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "frontend", "build", "index.html"));
  });

app.get('/hello', (req, res) => {
   
    res.send('Hello World!')
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})