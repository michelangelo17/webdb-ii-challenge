const uuid = require('uuid')

exports.seed = async knex => {
  // Deletes ALL existing entries
  await knex('cars').del()
  await knex('cars').insert([
    { make: 'Ford', model: 'F150', mileage: 12500, VIN: uuid() },
    {
      make: 'Chevy',
      model: 'Impala',
      mileage: 22500,
      VIN: uuid(),
      automatic: true,
      title_status: 'clean',
    },
    {
      make: 'Ford',
      model: 'F150',
      mileage: 82570,
      VIN: uuid(),
      title_status: 'salvage',
    },
    {
      make: 'Dodge',
      model: 'Dart',
      mileage: 45645,
      VIN: uuid(),
      automatic: false,
    },
    { make: 'KIA', model: 'unknown', mileage: 454, VIN: uuid() },
  ])
}
