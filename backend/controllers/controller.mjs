import express from 'express';
import { reviewStoryService } from '../services/reviewService.mjs';


const app = express()
const PORT = 3000;
const user = express.Router();
const review = express.Router();


app.use(express.json());
app.use('/user', user);
app.use('/review', review);

user.get('/', (req, res) => {
    res.send('GET request to the userpage')
})

user.post('/createUser',(req,res) =>{
    console.log(req.body)
    res.send('User created')
})


/*The structure of the response body in json format is as follows:
    {
        "rating": "5",
        "info": "The story is amazing"
    }
*/
const reviewStory= (req, res) => { // http://localhost:3000/review/story/1/2   where 1 is the user_id and 2 is the serie_id
    try{
        const user_id = req.params.user_id
        const serie_id = req.params.serie_id
        const rating = req.body.rating
        const info = req.body.info
        reviewStoryService(user_id, serie_id, rating, info)
            .then((response) => {res.send(response)})
            .catch((error) => {console.log(error)})
    }catch(e){
        console.log(e)
    }
}

review.post('/story/:user_id/:serie_id' , reviewStory);


app.listen(PORT, () => {
    console.log(`Server run in port: ${PORT}`);
  });