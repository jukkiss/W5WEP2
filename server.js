require('dotenv').config()
const express = require('express')
const app = express()
const port=process.env.PORT || 3001;
const connectDB = require('./config/db');
const userRouter = require('./routers/userRouter');

connectDB();

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api', userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})