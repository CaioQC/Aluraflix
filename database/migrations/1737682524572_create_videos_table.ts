import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'videos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string("title").notNullable()
      table.string("description").notNullable()
      table.string("url").notNullable()
      table.integer("video_category_id").unsigned().references("id").inTable("video_categories").onDelete("CASCADE")
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}