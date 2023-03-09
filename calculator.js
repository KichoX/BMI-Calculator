const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);

    let result  = weight / (height * height);

    let category;
    if (result < 18.5) {
        category = "Skinny";
    } else if (result >= 18.5 && result <= 25) {
        category = "Normal";
    } else {
        category = "Overweight";
    }

    res.render("result.ejs", { result: result.toFixed(2), category: category, weight: weight, height: height });
});



app.listen(3000, function(){
    console.log("The server is running on port 3000!");
});
