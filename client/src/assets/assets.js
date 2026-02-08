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
    JavaScript is a powerful and widely used programming language that helps
    create interactive and dynamic web applications. It plays a key role in
    modern web development and enhances the overall user experience on websites
    and web apps.
  </p>

  <p>
    This course is designed for beginners who want to build a strong foundation
    in JavaScript and prepare themselves for advanced frameworks and libraries.
  </p>

  <ul>
    <li>Understand core JavaScript concepts and syntax</li>
    <li>Learn variables, data types, and operators</li>
    <li>Work with conditions, loops, and basic logic</li>
    <li>Write clean, simple, and effective JavaScript code</li>
  </ul>
`,

    coursePrice: 49.99,
    discount: 20,
    isPublished: true,
    educator: { _id: "edu1", name: "Sachin Kushwaha" },
    enrolledStudents: ["u1", "u2"],
    courseRatings: [{ rating: 5 }, { rating: 5 }],
    courseThumbnail: "https://img.youtube.com/vi/CBWnBi-awSA/maxresdefault.jpg",
    courseContent: [
      {
        chapterTitle: "JavaScript Basics",
        chapterContent: [
          { lectureTitle: "What is JavaScript?", lectureDuration: 10, isPreviewFree: true },
          { lectureTitle: "Variables & Data Types", lectureDuration: 15 },
          { lectureTitle: "Operators", lectureDuration: 12 },
        ],
      },
      {
        chapterTitle: "Control Flow",
        chapterContent: [
          { lectureTitle: "Conditions", lectureDuration: 14 },
          { lectureTitle: "Loops", lectureDuration: 16 },
        ],
      },
    ],
  },

  {
    _id: "2",
    courseTitle: "React for Beginners",
    courseDescription: "Learn React from scratch.",
    coursePrice: 59.99,
    discount: 15,
    isPublished: true,
    educator: { _id: "edu2", name: "Amit Sharma" },
    enrolledStudents: [],
    courseRatings: [{ rating: 4 }],
    courseThumbnail: "https://img.youtube.com/vi/bMknfKXIFA8/maxresdefault.jpg",
    courseContent: [
      {
        chapterTitle: "React Fundamentals",
        chapterContent: [
          { lectureTitle: "What is React?", lectureDuration: 12 },
          { lectureTitle: "JSX Explained", lectureDuration: 14 },
        ],
      },
      {
        chapterTitle: "Core Concepts",
        chapterContent: [
          { lectureTitle: "Props", lectureDuration: 15 },
          { lectureTitle: "State", lectureDuration: 18 },
        ],
      },
    ],
  },

  {
    _id: "3",
    courseTitle: "Full Stack MERN Bootcamp",
    courseDescription: "Become a MERN stack developer.",
    coursePrice: 99.99,
    discount: 30,
    isPublished: true,
    educator: { _id: "edu3", name: "Priya Verma" },
    enrolledStudents: [],
    courseRatings: [{ rating: 5 }, { rating: 5 }],
    courseThumbnail: "https://img.youtube.com/vi/7CqJlxBYj-M/maxresdefault.jpg",
    courseContent: [
      {
        chapterTitle: "Frontend with React",
        chapterContent: [
          { lectureTitle: "React Overview", lectureDuration: 20 },
          { lectureTitle: "Hooks", lectureDuration: 25 },
        ],
      },
      {
        chapterTitle: "Backend with Node",
        chapterContent: [
          { lectureTitle: "Node Basics", lectureDuration: 18 },
          { lectureTitle: "Express APIs", lectureDuration: 22 },
        ],
      },
    ],
  },

  {
    _id: "4",
    courseTitle: "Node.js & Express Mastery",
    courseDescription: "Backend development with Node.js.",
    coursePrice: 69.99,
    discount: 10,
    isPublished: true,
    educator: { _id: "edu4", name: "Rohit Singh" },
    enrolledStudents: [],
    courseRatings: [{ rating: 3 }],
    courseThumbnail: "https://img.youtube.com/vi/Oe421EPjeBE/maxresdefault.jpg",
    courseContent: [
      {
        chapterTitle: "Node Fundamentals",
        chapterContent: [
          { lectureTitle: "Node Architecture", lectureDuration: 15 },
          { lectureTitle: "NPM & Modules", lectureDuration: 12 },
        ],
      },
      {
        chapterTitle: "Express Framework",
        chapterContent: [
          { lectureTitle: "Routing", lectureDuration: 18 },
          { lectureTitle: "Middleware", lectureDuration: 20 },
        ],
      },
    ],
  },

  {
    _id: "5",
    courseTitle: "HTML & CSS Fundamentals",
    courseDescription: "Build responsive websites.",
    coursePrice: 39.99,
    discount: 25,
    isPublished: true,
    educator: { _id: "edu5", name: "Neha Patel" },
    enrolledStudents: [],
    courseRatings: [{ rating: 4 }, { rating: 5 }],
    courseThumbnail: "https://img.youtube.com/vi/mU6anWqZJcc/maxresdefault.jpg",
    courseContent: [
      {
        chapterTitle: "HTML Basics",
        chapterContent: [
          { lectureTitle: "HTML Structure", lectureDuration: 10 },
          { lectureTitle: "Forms & Inputs", lectureDuration: 14 },
        ],
      },
      {
        chapterTitle: "CSS Basics",
        chapterContent: [
          { lectureTitle: "Flexbox", lectureDuration: 16 },
          { lectureTitle: "Responsive Design", lectureDuration: 18 },
        ],
      },
    ],
  },

  {
    _id: "6",
    courseTitle: "Advanced JavaScript Concepts",
    courseDescription: "Closures, promises, async/await.",
    coursePrice: 79.99,
    discount: 20,
    isPublished: true,
    educator: { _id: "edu6", name: "Karan Mehta" },
    enrolledStudents: [],
    courseRatings: [{ rating: 5 }, { rating: 5 }, { rating: 4 }],
    courseThumbnail: "https://img.youtube.com/vi/Bv_5Zv5c-Ts/maxresdefault.jpg",
    courseContent: [
      {
        chapterTitle: "Core Concepts",
        chapterContent: [
          { lectureTitle: "Closures", lectureDuration: 20 },
          { lectureTitle: "Hoisting", lectureDuration: 15 },
        ],
      },
      {
        chapterTitle: "Async JavaScript",
        chapterContent: [
          { lectureTitle: "Promises", lectureDuration: 18 },
          { lectureTitle: "Async/Await", lectureDuration: 22 },
        ],
      },
    ],
  },

  {
    _id: "7",
    courseTitle: "MongoDB Complete Guide",
    courseDescription: "MongoDB from basics to aggregation.",
    coursePrice: 54.99,
    discount: 15,
    isPublished: true,
    educator: { _id: "edu7", name: "Ankit Yadav" },
    enrolledStudents: [],
    courseRatings: [{ rating: 4 }],
    courseThumbnail: "https://img.youtube.com/vi/pWbMrx5rVBE/maxresdefault.jpg",
    courseContent: [
      {
        chapterTitle: "Mongo Basics",
        chapterContent: [
          { lectureTitle: "Documents & Collections", lectureDuration: 14 },
          { lectureTitle: "CRUD Operations", lectureDuration: 18 },
        ],
      },
      {
        chapterTitle: "Advanced Mongo",
        chapterContent: [
          { lectureTitle: "Indexes", lectureDuration: 16 },
          { lectureTitle: "Aggregation", lectureDuration: 20 },
        ],
      },
    ],
  },

  {
    _id: "8",
    courseTitle: "Git & GitHub for Developers",
    courseDescription: "Master version control.",
    coursePrice: 29.99,
    discount: 40,
    isPublished: true,
    educator: { _id: "edu8", name: "Pooja Nair" },
    enrolledStudents: [],
    courseRatings: [{ rating: 5 }],
    courseThumbnail: "https://img.youtube.com/vi/RGOj5yH7evk/maxresdefault.jpg",
    courseContent: [
      {
        chapterTitle: "Git Basics",
        chapterContent: [
          { lectureTitle: "Git Init & Commit", lectureDuration: 10 },
          { lectureTitle: "Branches", lectureDuration: 12 },
        ],
      },
      {
        chapterTitle: "GitHub",
        chapterContent: [
          { lectureTitle: "Pull Requests", lectureDuration: 14 },
          { lectureTitle: "Collaboration", lectureDuration: 16 },
        ],
      },
    ],
  },

  {
    _id: "9",
    courseTitle: "REST API Development",
    courseDescription: "Build scalable APIs.",
    coursePrice: 64.99,
    discount: 20,
    isPublished: true,
    educator: { _id: "edu9", name: "Vikas Malhotra" },
    enrolledStudents: [],
    courseRatings: [{ rating: 4 }, { rating: 4 }],
    courseThumbnail: "https://img.youtube.com/vi/Q-BpqyOT3a8/maxresdefault.jpg",
    courseContent: [
      {
        chapterTitle: "API Basics",
        chapterContent: [
          { lectureTitle: "REST Principles", lectureDuration: 15 },
          { lectureTitle: "HTTP Methods", lectureDuration: 14 },
        ],
      },
      {
        chapterTitle: "Implementation",
        chapterContent: [
          { lectureTitle: "Express APIs", lectureDuration: 18 },
          { lectureTitle: "JWT Auth", lectureDuration: 20 },
        ],
      },
    ],
  },

  {
    _id: "10",
    courseTitle: "DSA with JavaScript",
    courseDescription: "Data Structures & Algorithms.",
    coursePrice: 89.99,
    discount: 35,
    isPublished: true,
    educator: { _id: "edu10", name: "Rahul Khanna" },
    enrolledStudents: [],
    courseRatings: [{ rating: 5 }, { rating: 5 }],
    courseThumbnail: "https://img.youtube.com/vi/8hly31xKli0/maxresdefault.jpg",
    courseContent: [
      {
        chapterTitle: "Data Structures",
        chapterContent: [
          { lectureTitle: "Arrays", lectureDuration: 18 },
          { lectureTitle: "Linked Lists", lectureDuration: 20 },
        ],
      },
      {
        chapterTitle: "Algorithms",
        chapterContent: [
          { lectureTitle: "Sorting", lectureDuration: 22 },
          { lectureTitle: "Searching", lectureDuration: 16 },
        ],
      },
    ],
  },

  {
    _id: "11",
    courseTitle: "TypeScript for React Developers",
    courseDescription: "Type-safe React apps.",
    coursePrice: 74.99,
    discount: 25,
    isPublished: true,
    educator: { _id: "edu11", name: "Sandeep Joshi" },
    enrolledStudents: [],
    courseRatings: [{ rating: 5 }, { rating: 4 }],
    courseThumbnail: "https://img.youtube.com/vi/BwuLxPH8IDs/maxresdefault.jpg",
    courseContent: [
      {
        chapterTitle: "TypeScript Basics",
        chapterContent: [
          { lectureTitle: "Types", lectureDuration: 15 },
          { lectureTitle: "Interfaces", lectureDuration: 18 },
        ],
      },
      {
        chapterTitle: "React + TS",
        chapterContent: [
          { lectureTitle: "Props Typing", lectureDuration: 16 },
          { lectureTitle: "Hooks Typing", lectureDuration: 20 },
        ],
      },
    ],
  },

  {
    _id: "12",
    courseTitle: "Next.js Crash Course",
    courseDescription: "Production-ready Next.js apps.",
    coursePrice: 84.99,
    discount: 30,
    isPublished: true,
    educator: { _id: "edu12", name: "Arjun Rao" },
    enrolledStudents: [],
    courseRatings: [{ rating: 5 }, { rating: 5 }],
    courseThumbnail: "https://img.youtube.com/vi/1WmNXEVia8I/maxresdefault.jpg",
    courseContent: [
      {
        chapterTitle: "Next.js Basics",
        chapterContent: [
          { lectureTitle: "Pages & Routing", lectureDuration: 16 },
          { lectureTitle: "Layouts", lectureDuration: 14 },
        ],
      },
      {
        chapterTitle: "Advanced",
        chapterContent: [
          { lectureTitle: "SSR & SSG", lectureDuration: 20 },
          { lectureTitle: "Deployment", lectureDuration: 18 },
        ],
      },
    ],
  },
];
