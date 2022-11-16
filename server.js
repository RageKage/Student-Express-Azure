let express = require("express");
let api_routes = require("./routes/api.js");
let path = require('path')

let app = express();

let vueClientPath = path.join(__dirname, 'student-sign-in-client', 'docs')

app.use(express.static(vueClientPath))

// handle the JSON requests and convert it into js
app.use(express.json());

app.use("/api", api_routes);

app.use(function(req, res, next){
  // respond with a 404 to any other requests
  // for example if someone goes to 3000/asdasdhasd it will respond with "Not found"
  res.status(404).send('Not found')
})

app.use(function(err, req, res, next){
  console.error(err.stack)
  res.status(500).send('Server error')
})

// run my server
let server = app.listen(process.env.PORT || 3000, function () {
  console.log("Express server running on port", server.address().port);
});
