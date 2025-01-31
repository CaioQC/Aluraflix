import Video from '#models/video'
import VideoCategory from '#models/video_category'
import { categoryPostValidator } from '#validators/video_category'
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

        const payload = await categoryPostValidator.validate(data)

        const newCategory = await VideoCategory.create(payload)
        
        return response.status(200).json(newCategory)
   }

   async show({response, params}:HttpContext){
        const categoryId = params.id

        const category = await VideoCategory.findOrFail(categoryId)

        if(!category){
            return response.status(404).json({ message : "Category not found" })
        }

        else{
            return response.status(200).json(category)
        }
   }

   async update({response, params, request}:HttpContext){
        const categoryId = params.id

        const category = await VideoCategory.findOrFail(categoryId)

        const data = request.only([
            "name",
            "color"
        ])

        const updateCategory = await category.merge({ name : data.name ?? category.name, color : data.color ?? category.color })

        return response.status(200).json(updateCategory)
   }

   async destroy({response, params}:HttpContext){
        const categoryId = params.id

        const category = await VideoCategory.findOrFail(categoryId)

        await category.delete()

        return response.status(200).json({ message : "Category successfully deleted" })
   }

   async showCategoryVideos({response, params}:HttpContext){
        const categoryId = params.id

        const videos = await Video.query().where("video_category_id", categoryId)

        return response.status(200).json(videos)
   }
}