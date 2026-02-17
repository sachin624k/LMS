import express from 'express'
import { addUserRating, getUserCourseProgress, getUserData, purcahseCourse, updateUserCourseProgress, userEnrolledCourses } from '../controllers/userContoller.js'

const userRouter = express.Router()

userRouter.get('/data', getUserData)
userRouter.get('/enrolled-courses', userEnrolledCourses)
userRouter.post('/purchase', purcahseCourse)

userRouter.post('/update-course-progress', updateUserCourseProgress)
userRouter.post('/get-course-progress', getUserCourseProgress)
userRouter.post('/add-rating', addUserRating)

export default userRouter;