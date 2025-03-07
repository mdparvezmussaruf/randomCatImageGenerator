import express from 'express';
import axios from 'axios';

const app= express();
const port = 3000;
const api1= 'https://api.thecatapi.com/v1/images/search';


app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get("/", async(req, res) => {
   try{
    const response = await axios.get(api1);
    res.render('index.ejs', {
        img: response.data[0].url,
    });
   } catch (error) {
       res.render('index.ejs', {url: 'Error getting image'});
   }
});

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})