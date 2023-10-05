const express = require('express');
const validate = require('../../middlewares/validate');
const aggregationValidation = require('../../validations/aggregate.validation');
const { orderController } = require('../../controllers');

const router = express.Router();
router
  .route('/')
  .get(validate(aggregationValidation.getAggregates), orderController.getOrders);


module.exports = router;