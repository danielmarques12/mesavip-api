const hours = ['20:00:00', '21:00:00', '22:00:00', '23:00:00'];

module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert(
      'hours',
      [
        {
          restaurant_id: 11,
          hour: hours[0],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 11,
          hour: hours[1],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 11,
          hour: hours[2],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 11,
          hour: hours[3],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 12,
          hour: hours[0],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 12,
          hour: hours[1],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 12,
          hour: hours[2],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 12,
          hour: hours[3],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 13,
          hour: hours[0],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 13,
          hour: hours[1],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 13,
          hour: hours[2],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 13,
          hour: hours[3],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 14,
          hour: hours[0],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 14,
          hour: hours[1],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 14,
          hour: hours[2],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 14,
          hour: hours[3],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 15,
          hour: hours[0],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 15,
          hour: hours[1],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 15,
          hour: hours[2],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 15,
          hour: hours[3],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 16,
          hour: hours[0],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 16,
          hour: hours[1],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 16,
          hour: hours[2],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 16,
          hour: hours[3],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 17,
          hour: hours[0],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 17,
          hour: hours[1],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 17,
          hour: hours[2],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 17,
          hour: hours[3],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 18,
          hour: hours[0],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 18,
          hour: hours[1],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 18,
          hour: hours[2],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 18,
          hour: hours[3],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 19,
          hour: hours[0],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 19,
          hour: hours[1],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 19,
          hour: hours[2],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 19,
          hour: hours[3],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 20,
          hour: hours[0],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 20,
          hour: hours[1],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 20,
          hour: hours[2],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 20,
          hour: hours[3],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 21,
          hour: hours[0],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 21,
          hour: hours[1],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 21,
          hour: hours[2],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 21,
          hour: hours[3],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 22,
          hour: hours[0],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 22,
          hour: hours[1],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 22,
          hour: hours[2],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          restaurant_id: 22,
          hour: hours[3],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),
  down: () => {},
};
