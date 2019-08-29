const fetch = require('node-fetch');
const express = require('express');
const formData = require('express-form-data');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: "*"
}));

app.use(formData.parse());

app.post('/upload', (req, res) => {
    console.log(Object.values(req.files));
    let images = Object.values(req.files);

    images.forEach((image) => {
        console.log('image', image);

        fetch(`https://api.imgur.com/3/upload`, {
            method: 'POST',
            body: {
                "image": image,
                "type": 'url',
            },
            headers: {
                "Origin": "https://localhost:3000",
                'Authorization': 'Client-ID b7e3196427d7d9e',
            }
        })
            .then(res => res.json())
            .then(images => {
                console.log(images);
                res.send({
                    "status": 200,
                })
            });
    });

});

app.listen(process.env.PORT || 8080, () => console.log('👍'));
