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
                'Authorization': 'Bearer qEh1KpNIFQKAKouILSTZVVP4aCfVa9aifqxIvzRN3_Q.UpSLNZN_PHpXAqzSwQXz6uyJ9Yy2mT5U0mgmfy_Sdek',
            },
        }).then(res => res.json())
            .then(json => {
                res.send(json)
                console.log(json);
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
                'Authorization': 'Bearer qEh1KpNIFQKAKouILSTZVVP4aCfVa9aifqxIvzRN3_Q.UpSLNZN_PHpXAqzSwQXz6uyJ9Yy2mT5U0mgmfy_Sdek',
            },
        }).then(res => res.json())
            .then(json => {
                res.send(json)
                console.log(json);
            })
            .catch((err) => {
                res.send(err)
                console.log(err);
            });
    });
};
