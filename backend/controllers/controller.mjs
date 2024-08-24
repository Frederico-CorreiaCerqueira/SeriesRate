import express from 'express';

const app = express()
const PORT = 3000;

const user = express.Router();

user.get('/', (req, res) => {
    res.send('GET request to the userpage')
})

app.use('/user', user);

app.listen(PORT, () => {
    console.log(`Server run in port: ${PORT}`);
  });