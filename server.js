'use strict';

const express = require('express');

// константы
const port = 8080;
const host = '0.0.0.0';

const app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/views"));
// приложение
app.use('/', (req, res) => {
  res.render("index", {
        title: "Клуб по интересам html/css/js!!!",
        description: 'lol',
        text: `Очень внезапно`
      });
});
app.listen(port, host, () => {
  console.log(`Running on http://${host}:${port}`);
});
