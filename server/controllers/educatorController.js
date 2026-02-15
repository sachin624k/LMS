import { clerkClient } from '@clerk/clerk-sdk-node'
import Course from '../models/Course.js'
import { v2 as cloudinary } from 'cloudinary'

// Update role to educator
export const updateRoleToEducator = async (req, res) => {
  try {
    const userId = req.auth.userId

    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        role: 'educator',
      }
    })

    res.json({
      success: true,
      message: 'You can publish a course now'
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

// Add New Course
export const addCourse = async (req, res) => {
  try {
    const { courseData } = req.body
    const imageFile = req.file
    const educatorId = req.auth.userId

    if (!imageFile) {
      return res.json({ success: false, message: 'Thumbnail not attached' })
    }

    const parsedCourseData = await JSON.parse(courseData)
    parsedCourseData.educator = educatorId
    const newCourse = await Course.create(parsedCourseData)
    const imageUplaod = await cloudinary.uploader.upload(imageFile.path)
    newCourse.courseThumbnail = imageUplaod.secure_url
    await newCourse.save()

    res.json({ success: true, message: 'Course Added' })

  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}

// Get Educator Courses
export const getEducatorCourses = async(req, res) => {
  try {
    const educator = req.auth.userId

    const courses = await Course.find({educator})

    res.json({ success: true, courses })
  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}