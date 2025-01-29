import vine from '@vinejs/vine'

export const createPostValidator = vine.compile(
    vine.object({
        title : vine.string().trim().minLength(5),
        description : vine.string().trim().escape().minLength(5),
        url : vine.string().trim().minLength(5),
        video_category_id : vine.number()
    })
)

export const updateValidator = vine.compile(
    vine.object({
        title : vine.string().trim().minLength(5),
        description : vine.string().trim().escape().minLength(5),
        url : vine.string().trim().minLength(5),
        video_category_id : vine.number()
    })
)