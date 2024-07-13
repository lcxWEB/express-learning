const express = require('express');
const path = require('path');

const app = express();

// set static folder to send file
app.use(express.static(path.join(__dirname, 'public')));

// send file 
// app.get('/', (req, res) => {
//     // res.send('Hello World');
//     res.sendFile(path.join(__dirname,'public', 'index.html'));
// });

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname,'public', 'about.html'));
// });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});