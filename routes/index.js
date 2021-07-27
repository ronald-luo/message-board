const messages = [
   {
     text: "Congrats! Can I ask what you supplemented Odin with? Did you take CS or have a degree in CS prior?",
     user: "Amando",
     added: new Date()
   },
   {
     text: "Same, it kicked off my current life trajectory in a big way.",
     user: "Charles",
     added: new Date()
   }
];

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { messages: messages });
});

/* GET new page. */
router.get('/new', function(req, res, next) {
  res.render('form');
});

/* GET new page. */
router.post('/new', function(req, res, next) {
  console.log(req.body.text)
  console.log(req.body.user)
  messages.push({
      text: req.body.text,
      user: req.body.user,
      added: new Date()
  })

  res.redirect('/')
});

module.exports = router;
