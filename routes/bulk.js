const router  = require('express').Router();
const { getResponse, postResponse } = require('../controllers/bulk');

router
    .route('/')
    .get(getResponse)
    .post(postResponse);

module.exports = router;