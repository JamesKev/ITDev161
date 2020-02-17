import express from 'express';

const app = express();



// API endpoints
app.get('/', (req,res) =>
    res.send('http get request sent to root api endpoint')
);



// Connection listener
app.listen(3000, () => console.log('Express erver running on port 3000'));

