const express = require('express')
const app = express()
const cors=require('cors')
const port = process.env.PORT || 5000;
//middlewire
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.send('simple crud is running'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))