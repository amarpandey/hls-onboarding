const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.send('Welcome to HLS onboarding module');
});

app.post('/hls/saveclient', (req, res)=>{
    res.send('Client onboarding request received');
})

moduleHomeCallback = ()=>{
    return 'Welcome';
}

app.listen(port, ()=>{
    console.log(`Client onboarding module is listening to ${port}`);
});