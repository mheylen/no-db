const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const donutController = require("./donutController/donutController");

app.use(bodyParser.json());

app.get('/api/donuts', donutController.harvestDonuts);
app.put('/api/donuts', donutController.updateDonuts);
app.post('/api/donuts', donutController.userAddDonuts);
app.delete('/api/donuts/:id', donutController.donutDelete);


const PORT = 4000
app.listen(PORT, () => console.log(`Dude is cruisin on port ${PORT}`));