exports.up = async knex => {
  await knex.schema.createTable('cars', table => {
    table.increments()
    table
      .uuid('VIN')
      .notNull()
      .unique()
    table
      .string('make')
      .notNull()
      .index()
    table
      .string('model')
      .notNull()
      .index()
    table.integer('mileage').notNull()
    table.boolean('automatic')
    table.string('title_status')
  })
}

exports.down = async knex => {
  await knex.schema.dropTableIfExists('cars')
}
