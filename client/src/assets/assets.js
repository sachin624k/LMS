import Edulogo from './edulogo.png'
import user_icon from './user_icon.png'
import sketch from './sketch.png'
import search_icon from './search_icon.png'
import microsoft_logo from './microsoft_logo.png'
import walmart_logo from './walmart_logo.png'
import accenture_logo from './accenture_logo.png'
import adobe_logo from './adobe_logo.png'
import paypal_logo from './paypal_logo.png'
import star from './star.png'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'
import logo_dark from './logo_dark.png'

export const assets = {
    Edulogo, user_icon, sketch, search_icon, microsoft_logo, walmart_logo, accenture_logo, adobe_logo, paypal_logo, star, profile_img_1, profile_img_2, profile_img_3, logo_dark
}

export const dummyEducatorData = {
  _id: "675ac1512100b91a6d9b8b99",
  name: "Sachin Kushwaha",
  email: "sachin.kushwaha@gmail.com",
  imageUrl: "https://images.squarespace-cdn.com/content/v1/615712fe3833645321c25e8f/1658240987979-UMOCZ8JMYMFX7FPXLKLA/health-educator.jpg",
  createdAt: "2024-12-12T10:56:17.930Z",
  updatedAt: "2024-12-12T10:56:17.930Z",
  __v: 0,
};

export const dummyTestimonialData = [
  {
    name: "Sachin Kushwaha",
    role: "Full Stack Developer (MERN)",
    image: assets.profile_img_1,
    rating: 5,
    feedback:
      "This platform helped me strengthen my MERN skills with real-world projects. The learning experience was smooth, practical, and very beginner-friendly.",
  },
  {
    name: "Amit Sharma",
    role: "Frontend Developer @ Startup",
    image: assets.profile_img_2,
    rating: 4,
    feedback:
      "The UI and overall flow were very well designed and intuitive. Learning React through hands-on projects felt smooth, practical, and enjoyable.",
  },
  {
    name: "Priya Verma",
    role: "Software Engineer Intern",
    image: assets.profile_img_3,
    rating: 5,
    feedback:
      "I loved the project-based approach with real-world applications. The learning experience was smooth, practical, and very confidence-building.",
  },
];

export const dummyDashboardData = {
  totalEarnings: 707.38,

  enrolledStudentsData: [
    {
      courseTitle: "Introduction to JavaScript",
      student: {
        _id: "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
        name: "Sachin Kushwaha",
        imageUrl:
          "https://img.clerk.com/placeholder-user.png",
      },
    },
    {
      courseTitle: "React for Beginners",
      student: {
        _id: "user_9xKpLrT82AbCqL3P0MNsX7",
        name: "Amit Sharma",
        imageUrl:
          "https://img.clerk.com/placeholder-user.png",
      },
    },
    {
      courseTitle: "Full Stack MERN Bootcamp",
      student: {
        _id: "user_7ZLpQWnP02XyA9T8KLM34",
        name: "Priya Verma",
        imageUrl:
          "https://img.clerk.com/placeholder-user.png",
      },
    },
  ],
};

export const dummyStudentEnrolled = [
  {
    student: {
      _id: "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
      name: "Sachin Kushwaha",
      imageUrl:
        "https://img.clerk.com/placeholder-user.png",
    },
    courseTitle: "Introduction to JavaScript",
    purchaseDate: "2024-12-20T08:39:55.509Z",
  },
  {
    student: {
      _id: "user_8LpQXyR92ABtT90MNZxP7",
      name: "Amit Sharma",
      imageUrl:
        "https://img.clerk.com/placeholder-user.png",
    },
    courseTitle: "React for Beginners",
    purchaseDate: "2024-12-18T11:22:10.112Z",
  },
  {
    student: {
      _id: "user_5PQZLr82X7Ab90MNtK3",
      name: "Priya Verma",
      imageUrl:
        "https://img.clerk.com/placeholder-user.png",
    },
    courseTitle: "Full Stack MERN Bootcamp",
    purchaseDate: "2024-12-15T06:45:30.987Z",
  },
];

export const dummyCourses = [
  {
    _id: "605c72efb3f1c2b1f8e4e1a1",

    courseTitle: "Introduction to JavaScript",
    courseDescription: `
      <h2>Learn the Basics of JavaScript</h2>
      <p>
        JavaScript is a versatile programming language that powers the web.
        In this course, you will learn the fundamentals of JavaScript.
      </p>
      <ul>
        <li>Understand the basics of programming</li>
        <li>Learn DOM manipulation</li>
        <li>Create dynamic web applications</li>
      </ul>
    `,
    coursePrice: 49.99,
    discount: 20,
    isPublished: true,

    educator: {
      _id: "675ac1512100b91a6d9b8b99",
      name: "Sachin Kushwaha",
    },

    enrolledStudents: [
      "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
      "user_9xKpLrT82AbCqL3P0MNsX7",
    ],

    courseRatings: [
      { userId: "u1", rating: 5 },
      { userId: "u2", rating: 5 },
    ],

    courseThumbnail:
      "https://img.youtube.com/vi/CBWnBi-awSA/maxresdefault.jpg",

    createdAt: "2024-12-17T08:16:53.622Z",
    updatedAt: "2025-01-02T04:47:44.701Z",
    __v: 4,

    courseContent: [],
  },

  {
    _id: "2",
    courseTitle: "React for Beginners",
    courseDescription: "Learn React from scratch.",
    coursePrice: 59.99,
    discount: 15,
    isPublished: true,

    educator: {
      _id: "edu2",
      name: "Amit Sharma",
    },

    enrolledStudents: [],
    courseRatings: [{ rating: 4 }],

    courseThumbnail:
      "https://img.youtube.com/vi/bMknfKXIFA8/maxresdefault.jpg",

    createdAt: "2024-12-18T10:00:00.000Z",
    updatedAt: "2025-01-02T04:47:44.701Z",
    __v: 0,

    courseContent: [],
  },

  {
    _id: "3",
    courseTitle: "Full Stack MERN Bootcamp",
    courseDescription: "Become a full stack MERN developer.",
    coursePrice: 99.99,
    discount: 30,
    isPublished: true,

    educator: {
      _id: "edu3",
      name: "Priya Verma",
    },

    enrolledStudents: [],
    courseRatings: [{ rating: 5 }, { rating: 5 }],

    courseThumbnail:
      "https://img.youtube.com/vi/7CqJlxBYj-M/maxresdefault.jpg",

    createdAt: "2024-12-19T10:00:00.000Z",
    updatedAt: "2025-01-02T04:47:44.701Z",
    __v: 0,

    courseContent: [],
  },

  {
    _id: "4",
    courseTitle: "Node.js & Express Mastery",
    courseDescription: "Backend development with Node.js.",
    coursePrice: 69.99,
    discount: 10,
    isPublished: true,

    educator: {
      _id: "edu4",
      name: "Rohit Singh",
    },

    enrolledStudents: [],
    courseRatings: [{ rating: 3 }],

    courseThumbnail:
      "https://img.youtube.com/vi/Oe421EPjeBE/maxresdefault.jpg",

    createdAt: "2024-12-20T10:00:00.000Z",
    updatedAt: "2025-01-02T04:47:44.701Z",
    __v: 0,

    courseContent: [],
  },
];

