var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

var ingredients = [
{
  "id":"2343sdf",
  "text":"eggs"
}  ,
{
  "id":"342342",
  "text":"milk"
},
{
  "id":"342343",
  "text":"bacon"
}
];

app.get ('/', function(request,response) {
    response.send(ingredients);
});

app.post('/ingredient/add', function(req,res){
var ingredient = req.body;
if (!ingredient || ingredient.text == ""){
  res.status(500).send({error:"Your ingredient must have a name"});
} else {
  ingredients.push(ingredient);
  res.status(200).send(ingredient);
}
});

app.put('/ingredient/:ingredientId',function(req,res) {

  var ingredientId = request.params.ingredientId;
  var text = request.body.text;


});

app.get ('/skate', function(req,res) {
    res.send('Skate or die!');
});

app.listen(3000,function(){
  console.log("First API running on port 3000!!");
});
