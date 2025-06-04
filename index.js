const express = require('express');
const app = express();

app.set("view engine", "ejs");

const port = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.render('index', {agency : 'HLS'});
});

app.get('/hls/client/:id', (req, res)=>{
    res.send('Invalid request. Token not found.');
})
app.post('/hls/client', (req, res)=>{
    res.send('Invalid request. Token not found.');
})
app.put('/hls/client', (req, res)=>{
    res.send('Invalid request. Token not found.');
})
app.delete('/hls/client', (req, res)=>{
    res.send('Invalid request. Token not found.');
})

moduleHomeCallback = ()=>{
    return 'Welcome';
}

app.listen(port, ()=>{
    console.log(`Client onboarding module is listening to ${port}`);
});