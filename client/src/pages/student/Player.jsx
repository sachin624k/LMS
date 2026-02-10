import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { useParams } from 'react-router-dom'
import humanizeDuration from 'humanize-duration'
import YouTube from 'react-youtube'
import Footer from '../../components/students/Footer'

const Player = () => {

  const { enrolledCourses, calculateChapterTime } = useContext(AppContext)
  const { courseId } = useParams()

  const [courseData, setCourseData] = useState(null)
  const [openSections, setOpenSections] = useState({})
  const [playerData, setPlayerData] = useState(null)

  // ✅ UNIVERSAL YOUTUBE ID EXTRACTOR
  const getYouTubeId = (url) => {
    if (!url) return null

    const regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?v=)|(\&v=))([^#\&\?]*).*/
    const match = url.match(regExp)

    return match && match[8].length === 11 ? match[8] : null
  }

  const getCourseData = () => {
    enrolledCourses.forEach((course) => {
      if (course._id === courseId) {
        setCourseData(course)
      }
    })
  }

  const toggleSection = (index) => {
    setOpenSections(prev => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  useEffect(() => {
    if (enrolledCourses?.length) {
      getCourseData()
    }
  }, [enrolledCourses, courseId])

  return (
    <>
      <div className='p-4 sm:p-10 flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:px-36'>

        {/* LEFT COLUMN */}
        <div className='text-gray-800'>
          <h2 className='text-xl font-semibold'>Course Structure</h2>

          <div className='pt-5'>
            {courseData?.courseContent?.map((chapter, index) => (
              <div
                key={index}
                className='border border-gray-300 bg-white mb-2 rounded'
              >
                <div
                  className='flex items-center justify-between px-4 py-3 cursor-pointer'
                  onClick={() => toggleSection(index)}
                >
                  <div className='flex items-center gap-2'>
                    <i
                      className={`fa fa-angle-down transition-transform duration-300 ${
                        openSections[index] ? 'rotate-180' : ''
                      }`}
                    />
                    <p className='font-medium md:text-base text-sm'>
                      {chapter.chapterTitle}
                    </p>
                  </div>
                  <p className='text-sm'>
                    {chapter.chapterContent.length} Lectures –{' '}
                    {calculateChapterTime(chapter)}
                  </p>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openSections[index] ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <ul className='md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300'>
                    {chapter.chapterContent.map((lecture, i) => {
                      const isCompleted = lecture.isCompleted === true

                      return (
                        <li key={i} className='flex items-center gap-2 py-1'>
                          {isCompleted ? (
                            <i className='fa fa-check-circle text-blue-500 text-sm'></i>
                          ) : (
                            <i className='fa fa-play-circle text-gray-500 text-sm'></i>
                          )}

                          <div className='flex items-center justify-between w-full text-gray-800 text-xs md:text-default'>
                            <p>{lecture.lectureTitle}</p>

                            <div className='flex items-center gap-2 text-gray-500'>
                              {lecture.lectureUrl && (
                                <p
                                  className='text-blue-500 cursor-pointer'
                                  onClick={() =>
                                    setPlayerData({
                                      ...lecture,
                                      chapter: index + 1,
                                      lecture: i + 1,
                                    })
                                  }
                                >
                                  Watch
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
                      )
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className='md:mt-10'>
          {playerData ? (
            <div>
              {getYouTubeId(playerData.lectureUrl) ? (
                <YouTube
                  key={getYouTubeId(playerData.lectureUrl)}
                  videoId={getYouTubeId(playerData.lectureUrl)}
                  iframeClassName='w-full aspect-video'
                />
              ) : (
                <p className='text-red-500'>Invalid video URL</p>
              )}

              <div className='flex justify-between items-center mt-2'>
                <p>
                  {playerData.chapter}.{playerData.lecture}{' '}
                  {playerData.lectureTitle}
                </p>
                <button className='text-blue-600'>
                  {false ? 'Completed' : 'Mark Complete'}
                </button>
              </div>
            </div>
          ) : (
            <img
              src={courseData?.courseThumbnail}
              alt='Course Thumbnail'
              className='w-full rounded'
            />
          )}
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Player
