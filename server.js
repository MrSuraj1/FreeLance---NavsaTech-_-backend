const express = require('express');
const moongoose = require("mongoose");
const app = express();
const shop = require("./routes/shop")
const home = require('./routes/home'); // Import router
const cors = require('cors');
const orderd = require('./routes/orderRoutes')

const Port = 5000;



app.use(cors());
app.use(express.json());
// Use routes
app.use('/', home);
app.use('/api/shop' , shop);

app.use('/api/orders' , orderd);



moongoose.connect("mongodb+srv://surajyadavsy039:Suraj123@cluster0.yassbgc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
console.log("mongodb connect ");

app.listen(Port, () => {
    console.log(`🚀 Server running on http://localhost:${Port}`);
});

}).catch(()=>{
    console.log("not connect");
})
