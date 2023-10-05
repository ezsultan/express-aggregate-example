const pick = require("../utils/pick");
const catchAsync = require("../utils/catchAsync");
const { orderService } = require("../services");

const getOrders = catchAsync(async (req, res) => {
  const filter = pick(req.query, ["search"]);
  const options = pick(req.query, ["sortBy", "limit", "page"]);
  const result = await orderService.getOrders(filter, options);
  res.send(result);
});

module.exports = {
  getOrders,
};