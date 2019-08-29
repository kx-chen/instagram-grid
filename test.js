const fetch = require('node-fetch');

const thing = {
  grant_type: 'member_app',
  scope : 'offline',
  member_id: '35454',
};

const formBody = Object.keys(thing).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(thing[key])).join('&');

fetch('https://platform.hootsuite.com/oauth2/token', {
  method: 'POST',
  body: formBody,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    'Authorization': 'Basic MTE2NGJjZjItYWQxNC00NDc3LWE1NTAtZjBiZWRkYjZmM2FiOlR5cUVtcS1vci1lUAo=',
  },
}).then(res => res.json())
  .then(json => {
    console.log(json);
  })
  .catch( (err) => {
    console.log(err);
  });

