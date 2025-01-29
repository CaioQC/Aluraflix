import VideoCategory from '#models/video_category'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await VideoCategory.createMany([
      {
        id : 1,
        name : "General Audience",
        color : "Green"
      },
    ])
  }
}