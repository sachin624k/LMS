import Edulogo from './edulogo.png'
import user_icon from './user_icon.png'

export const assets = {
    Edulogo, user_icon
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
      "The UI and overall flow are excellent. It made learning React and building projects much easier and more enjoyable.",
  },
  {
    name: "Priya Verma",
    role: "Software Engineer Intern",
    image: assets.profile_img_3,
    rating: 5,
    feedback:
      "I loved the project-based approach. It gave me confidence to build real applications and prepare for interviews.",
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
        In this course, you will learn the fundamentals of JavaScript, including
        syntax, data types, and control structures.
      </p>
      <p>
        This course is perfect for beginners who want to start their journey
        in web development.
      </p>
      <ul>
        <li>Understand the basics of programming</li>
        <li>Learn how to manipulate the DOM</li>
        <li>Create dynamic web applications</li>
      </ul>
    `,
    coursePrice: 49.99,
    isPublished: true,
    discount: 20,

    courseContent: [
      {
        chapterId: "chapter1",
        chapterOrder: 1,
        chapterTitle: "Getting Started with JavaScript",
        chapterContent: [
          {
            lectureId: "lecture1",
            lectureTitle: "What is JavaScript?",
            lectureDuration: 16,
            lectureUrl: "https://youtu.be/CBWnBi-awSA",
            isPreviewFree: true,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture2",
            lectureTitle: "Setting Up Your Environment",
            lectureDuration: 19,
            lectureUrl: "https://youtu.be/2Ji-clqUYnA",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
      {
        chapterId: "chapter2",
        chapterOrder: 2,
        chapterTitle: "JavaScript Fundamentals",
        chapterContent: [
          {
            lectureId: "lecture3",
            lectureTitle: "Variables and Data Types",
            lectureDuration: 22,
            lectureUrl: "https://youtu.be/W6NZfCO5SIk",
            isPreviewFree: false,
            lectureOrder: 1,
          },
          {
            lectureId: "lecture4",
            lectureTitle: "Functions and Scope",
            lectureDuration: 24,
            lectureUrl: "https://youtu.be/N8ap4k_1QEQ",
            isPreviewFree: false,
            lectureOrder: 2,
          },
        ],
      },
    ],
  },
];
