/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import VideoCategoriesController from '#controllers/video_categories_controller'
import VideosController from '#controllers/videos_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource("/videos", VideosController).apiOnly()
router.resource("/categories", VideoCategoriesController).apiOnly()