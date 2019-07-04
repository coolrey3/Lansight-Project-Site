// **************  imports***********
var express = require("express");
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
// *******************  Variables **************
var languages = ['python', 'c++', 'sql'];
var ingredients = [{
    "id": "43243",
    "text": "pie"
  },
  {
    "id": "354345",
    "text": "ranch"
  }
];
// ******************  GET  ***********************************
app.get("/ingredients", function(req, res) {
  var ingredient = req.body;
  res.status("200").send(ingredients);
});
// *****************  POST ************************************

app.post('/ingredients', function(req, res) {
  var ingredient = req.body;

  ingredients.push(ingredient);
  res.status(200).send(ingredients);
});


// *****************  PUT ************************************

app.put('/ingredients/:ingredientId', function(req, res) {
  var ingredientId = req.param.ingredientId;
  var text = req.body.text;

  if (!text || text === "") {
    res.status(500).send({
      error: "You must enter a text"
    });
  } else {
    var objectFound = false;
    for (var x = 0; x < ingredients.length; x++) {
      var ing = ingredients[x];

      if (ing.id === req.params.ingredientId) {
        ingredients[x].text = text;
        objectFound = true;
        break;
      }

  }

  if (!objectFound) {
    res.status(500).send({error:"Id not found!"});
  } else {

    res.send(ingredients);

    }
  }



});

// ************  Listen on Port  ***********************

app.listen(3000, function() {

});
