//ROUTES

const app = require('express');
const ctrl = require('./../controllers');
const router = app.Router();

router.get('/rooms/:id', (req, res) => {
  console.log('here inside routes/index', req.params.id);
  ctrl.getRoom(req.params.id, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.json(data);
    }
  });
});


// CREATE
// CHECK POSTING ERROR CODES
router.post('/', (req, res) => {
  // console.log('POST-- here inside routes/index', req.params.id);
  // console.log('POST-- data', req.body);
  ctrl.postRoom(req.body, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      console.log('successfully posted');
      res.json(data);
    }
  });
});

// UPDATE
router.put('/rooms/:id', (req, res) => {
  console.log('PUT-- here inside routes/index', req.params.id, req.body);
  ctrl.updateRoom(req.params.id, req.body, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.json(data);
    }
  });
});

// DELETE
router.delete('/rooms/:id', (req, res) => {
  console.log('DELETE-- here inside routes/index', req.params.id);
  ctrl.deleteRoom(req.params.id, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.json(data);
    }
  });
});

module.exports = router;



// const bodyParser = require('body-parser');

// const jsonParser = bodyParser.json();
// const urlencodedParser = bodyParser.urlencoded({ extended: false });
// router.get('/', ctrl.main.home);