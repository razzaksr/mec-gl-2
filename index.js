const express=require('express')
// cross origin resource sharing
const cors=require('cors')
const { find, save, read } = require('./db')

const app=express()
app.use(express.json())
app.use(cors())

// List
app.get('/',async (req,res)=>{
    const all=find()
    res.json(all)
})

// Create
app.post('/',async (req,res)=>{
    const tec={
        pro_name:req.body.pro_name,
        pro_model:req.body.pro_model,
        pro_price:req.body.pro_price,
        pro_size:req.body.pro_size,
    }
    const data=save(tec)
    res.json(data)
})

//Read
app.get('/:id',async(req,res)=>{
    const data = read(req.params.id)
    res.json(data)
})

app.listen(8000);