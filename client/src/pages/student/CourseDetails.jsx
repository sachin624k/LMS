import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import Loading from '../../components/students/Loading'
import { assets } from '../../assets/assets'
import humanizeDuration from 'humanize-duration'
import Footer from '../../components/students/Footer'
import YouTube from 'react-youtube'
import axios from 'axios'
import { toast } from 'react-toastify'

const CourseDetails = () => {

  const { id } = useParams()

  const [courseData, setCourseData] = useState(null)
  const [openSections, setOpenSections] = useState({})
  const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(false)
  const [playerData, setPlayerData] = useState(null)

  const {
    allCourses,
    calculateRating,
    calculateNoOfLectures,
    calculateCourseDuration,
    calculateChapterTime,
    currency,
    backendUrl,
    userData, getToken
  } = useContext(AppContext)

  console.log("Backend URL:", backendUrl)
  console.log("Course ID:", id)

  const getYouTubeVideoId = (url) => {
    if (!url) return null
    if (url.includes('youtu.be/')) return url.split('youtu.be/')[1].split('?')[0]
    if (url.includes('watch?v=')) return url.split('watch?v=')[1].split('&')[0]
    return null
  }

  const fetchCourseData = async () => {
    try {
      const { data } = await axios.get(
        backendUrl + '/api/course/' + id
      )

      if (data.success) {
        setCourseData(data.courseData)
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  const enrollCourse = async () => {
    try {
      if (!userData) {
        return toast.warn('Login to Enroll')
      }
      if (isAlreadyEnrolled) {
        return toast.warn('Already Enrolled')
      }
      const token = await getToken();

      const { data } = await axios.post(backendUrl + '/api/user/purchase', { courseId: courseData._id }, { headers: { Authorization: `Bearer ${token}` } })
      if (data.success) {
        const { session_url } = data
        window.location.replace(session_url)
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchCourseData()
    setPlayerData(null)
    setOpenSections({})
  }, [id])

  useEffect(() => {
    if (userData && courseData) {
      setIsAlreadyEnrolled(
        userData.enrolledCourses?.includes(courseData._id)
      )
    }
  }, [userData, courseData])

  const toggleSection = (index) => {
    setOpenSections(prev => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return courseData ? (
    <>
      <div className='flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-20 pt-20 text-left'>

        <div className='absolute top-0 left-0 w-full h-section-height -z-1 bg-gradient-to-b from-cyan-100/70 to-transparent'></div>

        {/* LEFT COLUMN */}
        <div className='max-w-xl z-10 text-gray-500'>
          <h1 className='md:text-course-details-heading-large text-course-details-heading-small font-semibold text-gray-800'>
            {courseData.courseTitle}
          </h1>

          <p
            className='pt-4 md:text-base text-sm'
            dangerouslySetInnerHTML={{ __html: courseData.courseDescription.slice(0, 200) }}
          ></p>

          <div className='flex items-center space-x-2 pt-3 pb-1 text-sm'>
            <p>{calculateRating(courseData)}</p>
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  src={assets.star}
                  className={`w-3.5 h-3.5 ${index < Math.floor(calculateRating(courseData))
                    ? ''
                    : 'opacity-20'
                    }`}
                  alt="star"
                />
              ))}
            </div>
            <p className='text-blue-600'>
              ({courseData.courseRating?.length || 0}{' '}
              {courseData.courseRating?.length > 1 ? 'ratings' : 'rating'})
            </p>
            <p>
              {courseData.enrolledStudents?.length || 0}
              {courseData.enrolledStudents?.length > 1
                ? ' students enrolled'
                : ' student enrolled'}
            </p>
          </div>

          <p className='text-sm'>
            Course by <span className='text-blue-600 underline'>
              {courseData.educator?.name || "Unknown Instructor"}
            </span>
          </p>

          <div className='pt-8 text-gray-800'>
            <h2 className='text-xl font-semibold'>Course Structure</h2>
          </div>

          <div className='pt-5'>
            {courseData.courseContent?.map((chapter, index) => (
              <div key={index} className='border border-gray-300 bg-white mb-2 rounded'>
                <div
                  className='flex items-center justify-between px-4 py-3 cursor-pointer'
                  onClick={() => toggleSection(index)}
                >
                  <div className='flex items-center gap-2'>
                    <i className={`fa fa-angle-down transition-transform ${openSections[index] ? 'rotate-180' : ''}`} />
                    <p className='font-medium md:text-base text-sm'>{chapter.chapterTitle}</p>
                  </div>
                  <p className='text-sm md:text-default'>
                    {chapter.chapterContent.length} Lectures - {calculateChapterTime(chapter)}
                  </p>
                </div>

                <div className={`overflow-hidden transition-all duration-300 ${openSections[index] ? 'max-h-96' : 'max-h-0'}`}>
                  <ul className='list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300'>
                    {chapter.chapterContent.map((lecture, i) => (
                      <li key={i} className="flex items-center gap-2 py-1">
                        <i className="fa fa-play-circle text-gray-500 text-sm leading-none"></i>
                        <div className="flex items-center justify-between w-full text-gray-800 text-xs md:text-default">
                          <p className="leading-none">{lecture.lectureTitle}</p>
                          <div className="flex items-center gap-2 text-gray-500">
                            {lecture.isPreviewFree && lecture.lectureUrl && (
                              <p
                                className="text-blue-500 cursor-pointer"
                                onClick={() => {
                                  const videoId = getYouTubeVideoId(lecture.lectureUrl)
                                  if (!videoId) return
                                  setPlayerData({ videoId })
                                }}
                              >
                                Preview
                              </p>
                            )}
                            <p>
                              {humanizeDuration(
                                lecture.lectureDuration * 60 * 1000,
                                { units: ['h', 'm'] }
                              )}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}
          </div>

          <div className='py-20 text-sm md:text-default'>
            <h3 className='text-xl font-semibold text-gray-800'>Course Description</h3>
            <p
              className='pt-3 rich-text'
              dangerouslySetInnerHTML={{ __html: courseData.courseDescription }}
            ></p>
          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="z-10 shadow-2xl overflow-hidden bg-white rounded-t md:rounded-none w-full max-w-course-card sm:min-w-[424px]">

          {playerData?.videoId ? (
            <YouTube
              key={playerData.videoId}
              videoId={playerData.videoId}
              opts={{ playerVars: { autoplay: 1 } }}
              iframeClassName="w-full aspect-video"
            />
          ) : (
            <img
              src={courseData.courseThumbnail}
              alt=""
              className="w-full h-[180px] sm:h-[220px] object-cover"
            />
          )}

          <div className="p-4 sm:p-5">
            <div className="flex items-center gap-2 text-sm">
              <img className="w-3.5" src={assets.time_left_clock_icon} />
              <p className="text-red-500">
                <span className="font-medium">5 days</span> left at this price!
              </p>
            </div>

            <div className="flex flex-wrap gap-3 items-center pt-2">
              <p className="text-gray-800 text-2xl md:text-4xl font-semibold">
                {currency}{(courseData.coursePrice - (courseData.discount * courseData.coursePrice) / 100).toFixed(2)}
              </p>
              <p className="text-sm md:text-lg text-gray-500 line-through">
                {currency}{courseData.coursePrice}
              </p>
              <p className="text-sm md:text-lg text-gray-500">
                {courseData.discount}% off
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 md:pt-4 text-sm md:text-default text-gray-500">
              <div className="flex items-center gap-1">
                <img src={assets.star} className="w-3.5 h-3.5" />
                <span>{calculateRating(courseData)}</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-gray-500/40"></div>
              <div className="flex items-center gap-1">
                <img src={assets.time_black} className="w-3.5 h-3.5" />
                <span>{calculateCourseDuration(courseData)}</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-gray-500/40"></div>
              <div className="flex items-center gap-1">
                <img src={assets.lesson_icon1} className="w-3.5 h-3.5" />
                <span>{calculateNoOfLectures(courseData)} lessons</span>
              </div>
            </div>

            <button onClick={enrollCourse} className="mt-4 md:mt-6 w-full py-3 rounded bg-blue-600 text-white font-medium">
              {isAlreadyEnrolled ? 'Already Enrolled' : 'Enroll Now'}
            </button>

            <div className="pt-6">
              <p className="text-lg md:text-xl font-medium text-gray-800">
                What's in the course?
              </p>
              <ul className="ml-4 pt-2 text-sm md:text-default list-disc text-gray-500 space-y-1">
                <li>Lifetime access with free updates.</li>
                <li>Step-by-step, hands-on project guidance.</li>
                <li>Downloadable resources and source code.</li>
                <li>Quizzes to test your knowledge.</li>
                <li>Certificate of completion.</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
      <Footer />
    </>
  ) : <Loading />
}

export default CourseDetails
