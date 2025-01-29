import VideoCategory from '#models/video_category'
import type { HttpContext } from '@adonisjs/core/http'

export default class VideoCategoriesController {
    async index({response}:HttpContext){
        const categories = await VideoCategory.query()

        return response.status(200).json(categories)
    }

    async store({response, request}:HttpContext){
        const data = request.only([
            "name",
            "color"
        ])

        const newCategory = await VideoCategory.create(data)
        
        return response.status(200).json(newCategory)
    }
}