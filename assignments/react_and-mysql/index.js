const express=require('express');
const cors=require('cors');
const mysql=require('mysql');
const app=express();
const a='Select * from product';
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'react_sql'
});
connection.connect(err=>{
    if(err){
        console.log(err);
    }
});
app.use(cors());
app.get('/',(req,res)=>{
res.send('go to /product to see product');
});

app.get('/product',(req,res)=>{
    connection.query(a,(err,results)=>{
        if(err){
            return res.send(err)
        }
        else{
            return res.json({
               data:results
            })
        }
    });
});


app.listen(4000,(port)=>{console.log(`products server listening on ${port} `)
});