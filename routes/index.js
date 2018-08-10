const express = require('express');
const ctrl = require('./../controllers');
const router = express.Router();
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
// router.get('/', ctrl.main.home);

router.use(bodyParser.json()); 

//Create
router.post('/rooms/:id/roomInfo', (req, res) => {
  ctrl.postRoomInfo(req.body, (err, data) => {
    if (err) {
      res.status(422).send(err);
    } else {
      res.send('Room info was successfully added to DB');
    }
  });
});

//Read
router.get('/rooms/:id/roomInfo', (req, res) => {
  ctrl.getRoom(req.params.id, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.json(data);
    }
  });
});


//Update
router.put('/rooms/:id/roomInfo', (req, res) => {
  ctrl.updateRoomInfo(req.params.id, req.body, (err) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send('Room info was successfully updated');
    }
  });
});

//Delete
router.delete('/rooms/:id/roomInfo', (req, res) => {
  ctrl.deleteRoomInfo(req.params.id, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send('Room info was successfully deleted');
    }
  });
});

module.exports = router;
