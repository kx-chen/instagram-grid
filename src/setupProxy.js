const fetch = require('node-fetch');

module.exports = function (app) {
    app.post('/', (req, res) => {
        res.redirect('/');
    });

    app.get('/profiles', (req, res) => {
        fetch('https://platform.hootsuite.com/v1/socialProfiles', {
            method: 'GET',
            headers: {
                'Accept': 'application/json;charset=utf-8',
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': `Bearer ${req.query.token}`,
            },
        }).then(res => res.json())
            .then(json => {
                res.send(json)
                // console.log(json);
            })
            .catch((err) => {
                res.send(err)
                console.log(err);
            });
    });

    app.get('/scheduled', (req, res) => {
        fetch('https://platform.hootsuite.com/v1/messages?startTime=2019-09-01T17:55:01Z&endTime=2019-09-20T17:55:01Z&limit=50&state=SCHEDULED', {
            method: 'GET',
            headers: {
                'Accept': 'application/json;charset=utf-8',
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': `Bearer ${req.query.token}`,
            },
        }).then(res => res.json())
            .then(json => {
                res.send(json)
                // console.log(json);
            })
            .catch((err) => {
                res.send(err)
                console.log(err);
            });
    });

    app.get('/authenticate/:id', (req, res) => {
        const request = require("request");

        const options = {
            method: 'POST',
            url: 'https://platform.hootsuite.com/oauth2/token',
            headers:
                {
                    'cache-control': 'no-cache',
                    Connection: 'keep-alive',
                    'Content-Length': '40',
                    'Accept-Encoding': 'gzip, deflate',
                    Host: 'platform.hootsuite.com',
                    'Postman-Token': '7c28f9cf-68f2-45bb-866b-eb3673798ac8,03916f60-7fce-415d-84e0-c5f0d9ea9bed',
                    'Cache-Control': 'no-cache',
                    'User-Agent': 'PostmanRuntime/7.15.2',
                    Authorization: 'Basic MTE2NGJjZjItYWQxNC00NDc3LWE1NTAtZjBiZWRkYjZmM2FiOlR5cUVtcS1vci1lUA==',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Accept: 'application/json;charset=utf-8'
                },
            form: {grant_type: 'member_app', member_id: req.params.id}
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);

            console.log(body);
            res.send(body);
        });

    })
};
