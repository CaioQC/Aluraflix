import vine from '@vinejs/vine'

export const categoryPostValidator = vine.compile(
    vine.object({
        name : vine.string().minLength(2).trim(),
        color : vine.string().minLength(3).trim()
    })
)