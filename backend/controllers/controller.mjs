import express from 'express';

const app = express()
const PORT = 3000;

app.use(express.json());
const user = express.Router();

user.get('/', (req, res) => {
    res.send('GET request to the userpage')
})

user.post('/createUser',(req,res) =>{
    console.log(req.body)
    res.send('User created')
})

app.use('/user', user);

app.listen(PORT, () => {
    console.log(`Server run in port: ${PORT}`);
  });