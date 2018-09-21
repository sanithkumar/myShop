const express = require('express');
const Joi = require('joi');
const bodyParser = require("body-parser");
const app = express();
const connection = require('./connection.js');
const models = require('./models/index.js');

//Configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
    res.send('hello world...API success');
})


app.post('/register', function (req, res) {
    var req = req.body;
    //res.send(req.firstName)

    models
        .Register.findAll({
            where: {
                email: req.email
            }
        }).then(function (data) {
            if (data.length > 0) {
                res.send({
                    status: 'Already registered with email id: ' + req.email
                })
            } else {
                insert();
            }
        })

    function insert() {
        models
            .Register.create({
                firstName: req.firstName,
                lastName: req.lastName,
                email: req.email,
                password: req.password
            })
            .then(function (data) {
                res.send({ status: "Successfully register email ID : " + req.email });
            })
            .catch(function (err) {
                res.status(401).send(err);
            })
    }



})

app.post('/login', function (req, res) {
    var req = req.body;
    models
        .Register
        .findAll({
            where: {  
                email: req.email,
                password: req.password }
        })
        .then(function (data) {
            if (data.length > 0) {
                res.send({
                    status: true,
                    user: data
                })
            } else {
                 res.send({
                    status: false,
                    user: data
                })
            }
        })
        .catch(function (err) {
            res.status(401).send(err);
        })
})

app.get('/products', function (req, res) {
    models
        .Product
        .findAll()
        .then(function (data) {
            res.send(data)
        })
        .catch(function (error) {
            console.log(error);
        })
})




app.get('/filters', function (req, res) {

    models
        .Filters
        .findAll()
        .then(function (data) {
            res.send(data)
        })
        .catch(function (error) {
            console.log(error);
        })

    /*res.send([
        {
            "title": "Nokia",
            "brand_id": 1
        },
        {
            "title": "Samsung",
            "brand_id": 2
        },
        {
            "title": "Apple",
            "brand_id": 3
        },
        {
            "title": "Redmi",
            "brand_id": 4
        }
    ]);*/
})

const port = process.env.PORT || 3000;
app.listen(port, function ()
{ console.log(`listening to port ${port}..`) }
);




/*//
app.get('url/:id', (req, res) => {
    req.params;
    req.query;
})

const course = [{}];

course.find(c => c.id === id) // find in array
res.status(400).send('not found'); // statu change


const schema = Joi.string().min(3).required()
const result = Joi.validate(req.body, schema);
if(result.error){
    res.status(400).send(result.error)
    return;
}




*/
