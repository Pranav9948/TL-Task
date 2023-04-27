const express = require('express')
const app = express()
const userRoute = require("./Routes/userRoutes");
const port = 5000


const dbConfig = require("../Backend/config/dbConfig");

app.use(express.json());


app.use("/api/users", userRoute);

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

