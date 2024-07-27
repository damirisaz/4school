import { Router } from 'express'
import { checkAuth} from '../utils/CheckAuth.js'
import { createPost, getAll } from '../controllers/posts.js'


const router = new Router()

// Create post
// http://localhost:3002/api/posts
router.post('/', checkAuth, createPost)

// Get All posts
// http://localhost:3002/api/posts
router.get('/', getAll)


export default router