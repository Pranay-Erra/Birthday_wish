import express,{json} from 'express';
import cors from 'cors';
import {db,connectToDB} from "./db.js";
const app=express()

app.use(express.json())

app.use(cors())

connectToDB(()=>
{
    app.listen(8000,()=>
    {
        console.log('server started at 8000');
    });
})

app.get('/',(req,res)=>{
    res.send("Server Running Successfully ✅");
    });

app.get('/test/:passcode',async(req,res)=>
{
    const cred_i=await db.collection('Wishcode').findOne(
    {
        passcode:req.params.passcode
    }
    );
    
    res.json(cred_i)
})  
app.get('/:passcode',async(req,res)=>
{
    const cred_i=await db.collection('Wishcode').findOne(
    {
        passcode:req.params.passcode
    }
    );
    
    res.json(cred_i)
}) 


app.post('/:coun',async(req,res)=>
{
    const cred_s=await db.collection('Wishcode').insertOne(
    {
        count:req.params.coun
    }
    );
    res.json(cred_s)
})



