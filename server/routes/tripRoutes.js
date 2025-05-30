const express = require('express');
const router = express.Router();
const tripController = require('../controllers/tripController');
const auth = require('../middlewares/authMiddleware');

router.get('/', tripController.getAll);
router.get('/latest', tripController.getLatest);
router.get('/search', tripController.search);
router.get('/:id', tripController.getOne);

router.post('/', auth, tripController.create);
router.put('/:id', auth, tripController.update);
router.delete('/:id', auth, tripController.remove);

module.exports = router;
