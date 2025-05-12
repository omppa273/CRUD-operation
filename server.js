express=require('express');

eobj=express();

port=5500;

function starter()
{
    console.log("Marvellous server is started...");
}

eobj.listen(port,starter);

function Web(req,res)
{
   res.send("Marvellous server is on....");
}

eobj.get('/',Web);

function GetBatches(req,res)
{
   res.send({"Name":"PPA","Duration":"3 Months","Fees":"19500"});
}

eobj.get('/getBatches',GetBatches);

// mongodb://localhost:27017

const {MongoClient}=require('mongodb');

const URL="mongodb://localhost:27017";

const Client=new MongoClient(URL);

async function GetConnection()
{
    let result=await Client.connect();

    let db=result.db("MarvellousBatches");

    return db.collection("Batches");
}

async function ReadData(req,res)
{
    let data=await GetConnection();

    data=await data.find().toArray();
    res.json(data);
}
eobj.get('/readdata',ReadData);

async function UpdateData(req,res)
{
   let data=await GetConnection();

   data=await data.updateOne({"Name":"PPA"},{$set :{"Fees":"19888"}});
  
}

eobj.get('/Update',UpdateData);

async function AddBatch(req,res)
{
    let data=await GetConnection();

    const{Name,Duration,Fees}=req.body;

    await data.insertOne({Name,Duration,Fees});

    res.send("Batch added successfully");
}

eobj.post('/addBatch',express.json(),AddBatch);
