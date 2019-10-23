const express = require('express');
const app = express();
const path = require('path')


// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })


//static folder
app.use(express.static(path.join(__dirname,'public')))
const PORT = process.env.port || 5000;

app.listen(PORT , ()=> {
    console.log(`Server is starting in PORT ${PORT}`)
})