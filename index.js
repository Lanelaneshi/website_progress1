let express = require("express");
let app = express();


let signs = {
    "data": [

        {
            name:"pisces",
            type:"Fish",
            dates:"February 19 - March 20"
        },


        {
            name:"scorpio",
            type:"Scorpion",
            dates:"October 24 - November 21"
        }
        
    ]
}


// app.get('/', (req, res)=>{
//     res.send("this is a root page");
// })


app.use('/', express.static('public'));

app.get('/about', (req, res)=>{
    res.send("this is an about page");
})

app.get('/signs', (req,res) =>{
    res.json(signs);
})


app.get('/signs/:sign', (req,res)=>{
    console.log(req.params.sign);
    let user_sign = req.params.sign;
    let user_obj;
    for (let i=0; i<signs.data.length; i++){
        if (user_sign == signs.data[i].name){
            user_obj = signs.data[i];
        }
    }
    console.log(user_obj);
    if(user_obj){
        res.json(user_obj);
    }else{
        res.json({status:"info not present"});
    }

    res.send("thank you");
})

app.listen(3000, ()=>{
    console.log("listening at localhost:3000");
})