import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { AppContext } from '../../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Navbar = () => {

  const {navigate, isEducator, backendUrl, setIsEducator, getToken} = useContext(AppContext)

  const isCourseListPage = location.pathname.includes('/course-list');

  const { openSignIn } = useClerk();
  const { user } = useUser();

  const becomeEducator = async() => {
    try {
      if(isEducator){
        navigate('/educator')
        return;
      }
      const token = await getToken()
      const {data} = await axios.get(backendUrl + '/api/educator/update-role', {headers: {Authorization: `Bearer ${token}`}})

      if(data.success){
        setIsEducator(true)
        toast.success(data.message)
      } else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'}`}> { /* Responsive horizontal padding (px-4: mobile sm:px-10: small screens, md:px-14: tablets, lg:px-36: desktops) px-4 sm:px-10 md:px-14 lg:px-36 */}
      <img onClick={() => navigate('/')} src={assets.Edulogo} alt="Logo" className="w-28 lg:w-32 cursor-pointer" />
      <div className='hidden md:flex items-center gap-5 text-gray-500'>{ /* hidden md:flex Hidden on mobile, visible as flex on tablets and desktops */}
        <div className='flex items-centre gap-5'>
          {user &&
            <>
              <button onClick={becomeEducator}>{isEducator ? 'Educator Dashboard' : 'Become Educator'}</button>
              | <Link to='/my-enrollments'>My Enrollments</Link>
            </>
          }
        </div>
        {user ? <UserButton /> :
          <button onClick={() => openSignIn()} className='bg-blue-600 text-white px-5 py-2 rounded-full'>Create Account</button>}
      </div>
      {/* For Phone Screen */}
      <div className='md:hidden flex items-center gap-4 sm:gap-5 text-gray-500'>
        <div className='flex items-center gap-1 sm:gap-2 max-sm:text-xs'>
          {user &&
            <>
              <button onClick={becomeEducator}>{isEducator ? 'Educator Dashboard' : 'Become Educator'}</button>
              | <Link to='/my-enrollments'>My Enrollments</Link>
            </>
          }
        </div>
        {user ? <UserButton /> :
          <button onClick={() => openSignIn()} className="flex items-center justify-center">
            <img
              src={assets.user_icon}
              alt="User"
              className="w-6 h-7 sm:w-6 sm:h-7 object-contain"
            />
          </button>
        }
      </div>
    </div>
  )
}

export default Navbar