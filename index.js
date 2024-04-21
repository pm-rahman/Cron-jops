const express = require("express");
const cron = require("node-cron");
const cors = require("cors");
const routers = require("./routes/routes");
const app = express();
const port = 3000;

// middle ware
app.use(cors());

app.use("/", routers);
cron.schedule('*/10 * * * * * ', () => {
    // Code to hit your route after 2 minutes
    // You can use axios, fetch, or any HTTP client library to make the request
    const axios = require('axios');
    axios.get('http://localhost:3000/test')
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
