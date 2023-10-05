const { Order } = require("../models");

const getOrders = async (filter, options) => {
  if (filter.search) {
    filter.customerId = { $regex: filter.search, $options: "i" };
    delete filter.search;
  }

  const { page, limit, sortBy } = options;
  const skip = (page - 1) * limit;

  const pipeline = [
    {
      $match: filter,
    },
    {
      $lookup: {
        from: "products",
        localField: "productId",
        foreignField: "_id",
        as: "product",
      },
    },
    {
      $unwind: "$product",
    },
    {
      $lookup: {
        from: "customers",
        localField: "customerId",
        foreignField: "_id",
        as: "customer",
      },
    },
    {
      $unwind: "$customer",
    },
    {
      $project: {
        customerId: 0,
        productId: 0,
      },
    },
    {
      $sort: sortBy ? { [sortBy]: 1 } : { _id: 1 },
    },
    {
      $skip: skip,
    },
    {
      $limit: limit,
    },
  ];

  const orders = await Order.aggregate(pipeline).exec();
  return orders;
};

module.exports = {
  getOrders,
};
