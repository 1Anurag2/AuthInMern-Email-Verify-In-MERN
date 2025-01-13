// const mysql = require('mysql')
// const express = require("express");
// const app = express();

// const db = mysql.createConnection({
// 	host : "localhost",
// 	user : "root",
// 	password : "",
// 	database : 'anurag'
// })

// app.get('/user',(req,res)=>{
// 	const sql = "SELECT * FROM information";
// 	db.query(sql , (err , data)=>{
// 		if(err) return  res.json(err);
// 		return res.json(data);
// 	})
// })

const mongoose = require("mongoose");

require("dotenv").config();


// ------------- Database Connection ----------
const connectDB= async (URL)=>{
    try {
        const URL = 'mongodb+srv://email:6aHlwaDwVhW4VoMl@email.ljrii.mongodb.net/';
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}
module.exports = connectDB;
