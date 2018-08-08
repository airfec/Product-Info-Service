const app = require('express');
const ctrl = require('./../controllers');
const router = app.Router();
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
// router.get('/', ctrl.main.home);

router.get('/rooms/:id', (req, res) => {
  console.log('here inside routes/index', req.params.id);
  ctrl.getRoom(req.params.id, (err, data) => {
    if (err) {
      res.status(404).send(err);
    }
    res.json(data);
  });
});

//POST
router.post('/rooms/:id/room', (req, res) => {
  console.log('Post got triggered');
  const roomInfo = req.params;
  ctrl.createRoom(roomInfo, (err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).send();
  })
})

//PUT - UPDATE
// router.put('/rooms/:id/room', (req, res) => {
//   console.log('Put got triggered');
//   const changes = req.body;
//   const id = req.params.id;
//   ctrt
// });

//DELETE



module.exports = router;
