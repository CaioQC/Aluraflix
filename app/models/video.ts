import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import * as relations  from '@adonisjs/lucid/types/relations'
import VideoCategory from './video_category.js'

export default class Video extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare description: string

  @column()
  declare url: string

  @column()
  declare video_category_id: number

  @belongsTo(() => VideoCategory, {foreignKey : "video_category_id"})
  declare category:relations.BelongsTo<typeof VideoCategory>
  
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}