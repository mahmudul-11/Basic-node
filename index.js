const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})
const users = [
    { id: 1, name: "Akash", roll: "153", ht: "Chapai" },
    { id: 2, name: "Anik", roll: "153", ht: "Chapai" },
    { id: 3, name: "Fahim", roll: "153", ht: "Chapai" },
    { id: 4, name: "Urmi", roll: "153", ht: "Chapai" },
    { id: 5, name: "Khosru", roll: "153", ht: "Chapai" },
    { id: 6, name: "showmik", roll: "153", ht: "Chapai" },
]
app.get('/users', (req, res) => {
    // res.send(users) eta 
})
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const selecteduser = users[id];
    res.send(selecteduser);
})

app.listen(port, () => {
    console.log('lisiting to port', port)
})
