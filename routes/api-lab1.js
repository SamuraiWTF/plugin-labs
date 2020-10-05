var express = require('express');
var router = express.Router();

var nonces = {}
var users = {"kevin": "starwars", "jason": "zombie", "test": "This test user password is not in the dictionary!"}

function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

/* GET users listing. */
router.get('/user/:username', function(req, res, next) {
  if (users[req.params.username]) {
    let nonceid = makeid(32);
    nonces[nonceid] = req.params.username;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ username: req.params.username, nonce: nonceid}));
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ username: req.params.username, nonce: '0' }));
  }
});

router.post('/login', express.json(), function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');

  if (nonces[req.body.nonce] && req.body.password) {
    if (users[nonces[req.body.nonce]] === req.body.password) {
      res.end(JSON.stringify( { message: "Login Success!", success: true}));
    } else {
      res.end(JSON.stringify( { message: "Login Failed!"}));
    }
    delete nonces[req.body.nonce];
  } else {
    res.end(JSON.stringify( { message: "Login Failed!"}));
  }

})

module.exports = router;
