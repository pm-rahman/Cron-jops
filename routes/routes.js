const express = require("express");
const routers = express.Router();
let hitCount = 0;
routers.get("/test", (req, res) => {
    hitCount ++;
  res.send(`Router hit ${hitCount} times!`);
});
module.exports = routers;
