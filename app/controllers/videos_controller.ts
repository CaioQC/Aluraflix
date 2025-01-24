import Video from '#models/video'
import type { HttpContext } from '@adonisjs/core/http'

export default class VideosController {
    async index({response}:HttpContext){
        const videos = await Video.query()
        return response.status(200).json(videos)
    }

    async store({response, request}:HttpContext){
        const data = request.only([
            "title",
            "description",
            "url"
        ])

        const newVideo = await Video.create(data)
        return response.status(200).json(newVideo)
    }

    async show({response, params}:HttpContext){
        const videoId = params.id
        const video = await Video.findOrFail(videoId)

        if(!video){
            return response.status(404).json({ message : "Video not found" })
        }

        else{
            return response.status(200).json(video) 
        }
    }
}