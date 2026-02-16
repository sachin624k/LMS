import express from 'express'
import { getUserData, purcahseCourse, userEnrolledCourses } from '../controllers/userContoller.js'

const userRouter = express.Router()

userRouter.get('/data', getUserData)
userRouter.get('/enrolled-courses', userEnrolledCourses)
userRouter.post('/purchase', purcahseCourse)

export default userRouter;