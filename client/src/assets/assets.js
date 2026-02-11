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
import time_left_clock_icon from './time_left_clock_icon.svg'
import time_black from './time_black.svg'
import lesson_icon1 from './lesson_icon1.png'
import home_icon from './home_icon.png'
import add_icon from './add_icon.png'
import course_icon from './course_icon.png'
import usertick_icon from './usertick_icon.png'
import { FaUser } from 'react-icons/fa'

export const assets = {
  Edulogo, user_icon, sketch, search_icon, microsoft_logo, walmart_logo, accenture_logo, adobe_logo, paypal_logo, star, profile_img_1, profile_img_2, profile_img_3, logo_dark, time_left_clock_icon, time_black, lesson_icon1, home_icon, add_icon, course_icon, usertick_icon
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
        imageUrl: assets.profile_img_1,
      },
    },
    {
      courseTitle: "React for Beginners",
      student: {
        _id: "user_9xKpLrT82AbCqL3P0MNsX7",
        name: "Amit Sharma",
        imageUrl: assets.user_icon
      },
    },
    {
      courseTitle: "Full Stack MERN Bootcamp",
      student: {
        _id: "user_7ZLpQWnP02XyA9T8KLM34",
        name: "Priya Verma",
        imageUrl: assets.user_icon
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
modern web development and enhances the overall user experience.
</p>

<p>
This course is designed for beginners who want to build a strong foundation
in JavaScript and prepare themselves for advanced frameworks.
</p>

<ul>
  <li>Understand core JavaScript concepts and syntax</li>
  <li>Learn variables, data types, and operators</li>
  <li>Work with conditions and loops</li>
  <li>Write clean and effective JavaScript code</li>
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
          { lectureTitle: "What is JavaScript?", lectureDuration: 10, isPreviewFree: true, lectureUrl: "https://youtu.be/W6NZfCO5SIk"},
          { lectureTitle: "Variables & Data Types", lectureDuration: 15, },
          { lectureTitle: "Operators", lectureDuration: 12 },
        ],
      },
      {
        chapterTitle: "Control Flow",
        chapterContent: [
          { lectureTitle: "Conditions", lectureDuration: 14, isPreviewFree: true, lectureUrl: "https://youtu.be/wT-1T7Ws5qY" },
          { lectureTitle: "Loops", lectureDuration: 16 },
        ],
      },
    ],
  },

  {
    _id: "2",
    courseTitle: "React for Beginners",
    courseDescription: `
<h2>Learn React from Scratch</h2>

<p>
React is a popular JavaScript library used to build fast, interactive, and
scalable user interfaces for modern web applications.
</p>

<p>
This course is ideal for beginners who want to understand how frontend
applications are built using React.
</p>

<ul>
  <li>Understand React fundamentals</li>
  <li>Learn JSX and component structure</li>
  <li>Work with props and state</li>
  <li>Build reusable UI components</li>
</ul>
`,
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
          { lectureTitle: "What is React?", lectureDuration: 12, isPreviewFree: true, lectureUrl: "https://www.youtube.com/watch?v=LX4JUscM9Sk" },
          { lectureTitle: "JSX Explained", lectureDuration: 14 },
        ],
      },
      {
        chapterTitle: "Core Concepts",
        chapterContent: [
          { lectureTitle: "Props", lectureDuration: 15, isPreviewFree: true, lectureUrl:"https://www.youtube.com/watch?v=uvEAvxWvwOs" },
          { lectureTitle: "State", lectureDuration: 18 },
        ],
      },
    ],
  },

  {
    _id: "3",
    courseTitle: "Full Stack MERN Bootcamp",
    courseDescription: `
<h2>Become a Full Stack MERN Developer</h2>

<p>
The MERN stack combines MongoDB, Express, React, and Node.js to build powerful
full-stack web applications.
</p>

<p>
This bootcamp takes you from frontend to backend development with real-world
projects.
</p>

<ul>
  <li>Build frontend apps using React</li>
  <li>Create APIs with Node.js and Express</li>
  <li>Work with MongoDB databases</li>
  <li>Understand full-stack architecture</li>
</ul>
`,
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
          { lectureTitle: "React Overview", lectureDuration: 20, isPreviewFree: true, lectureUrl: "https://www.youtube.com/watch?v=s2skans2dP4&t=50s" },
          { lectureTitle: "Hooks", lectureDuration: 25 },
        ],
      },
      {
        chapterTitle: "Backend with Node",
        chapterContent: [
          { lectureTitle: "Node Basics", lectureDuration: 18, isPreviewFree: true, lectureUrl: "https://www.youtube.com/watch?v=G-bKyVpKwIQ&t=2120s" },
          { lectureTitle: "Express APIs", lectureDuration: 22 },
        ],
      },
    ],
  },

  {
    _id: "4",
    courseTitle: "Node.js & Express Mastery",
    courseDescription: `
<h2>Master Backend Development with Node.js</h2>

<p>
Node.js enables JavaScript to run on the server and build scalable backend
applications.
</p>

<p>
This course focuses on creating robust APIs using Express.
</p>

<ul>
  <li>Understand Node.js architecture</li>
  <li>Work with NPM packages</li>
  <li>Create REST APIs</li>
  <li>Handle middleware and routing</li>
</ul>
`,
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
          { lectureTitle: "Node Architecture", lectureDuration: 15, isPreviewFree: true, lectureUrl: "https://www.youtube.com/watch?v=y0aTs56DJWk" },
          { lectureTitle: "NPM & Modules", lectureDuration: 12 },
        ],
      },
      {
        chapterTitle: "Express Framework",
        chapterContent: [
          { lectureTitle: "Routing", lectureDuration: 18, isPreviewFree: true, lectureUrl: "https://www.youtube.com/watch?v=kyMoEgdMbH8" },
          { lectureTitle: "Middleware", lectureDuration: 20 },
        ],
      },
    ],
  },

  {
    _id: "5",
    courseTitle: "HTML & CSS Fundamentals",
    courseDescription: `
<h2>Build Responsive Websites with HTML & CSS</h2>

<p>
HTML and CSS are the foundation of web development used to create structured
and visually appealing websites.
</p>

<p>
This course is perfect for beginners starting web development.
</p>

<ul>
  <li>Learn HTML structure and elements</li>
  <li>Style websites using CSS</li>
  <li>Create responsive layouts</li>
  <li>Build real-world web pages</li>
</ul>
`,
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
          { lectureTitle: "HTML Structure", lectureDuration: 10, isPreviewFree: true, lectureUrl: "https://www.youtube.com/watch?v=U4nbKMJRVaw" },
          { lectureTitle: "Forms & Inputs", lectureDuration: 14 },
        ],
      },
      {
        chapterTitle: "CSS Basics",
        chapterContent: [
          { lectureTitle: "Flexbox", lectureDuration: 16, isPreviewFree: true, lectureUrl: "https://www.youtube.com/watch?v=phWxA89Dy94" },
          { lectureTitle: "Responsive Design", lectureDuration: 18 },
        ],
      },
    ],
  },

  {
    _id: "6",
    courseTitle: "Advanced JavaScript Concepts",
    courseDescription: `
<h2>Deep Dive into Advanced JavaScript</h2>

<p>
Advanced JavaScript concepts help developers write efficient and optimized
code.
</p>

<p>
This course explains how JavaScript works behind the scenes.
</p>

<ul>
  <li>Understand closures and scope</li>
  <li>Learn hoisting and execution context</li>
  <li>Master promises and async/await</li>
  <li>Write optimized JavaScript</li>
</ul>
`,
    coursePrice: 79.99,
    discount: 20,
    isPublished: true,
    educator: { _id: "edu6", name: "Karan Mehta" },
    enrolledStudents: [],
    courseRatings: [{ rating: 5 }, { rating: 5 }, { rating: 5 }],
    courseThumbnail: "https://img.youtube.com/vi/Bv_5Zv5c-Ts/maxresdefault.jpg",
    courseContent: [
      {
        chapterTitle: "Core Concepts",
        chapterContent: [
          { lectureTitle: "Closures", lectureDuration: 20, isPreviewFree: true, lectureUrl: "https://www.youtube.com/watch?v=vKJpN5FAeF4" },
          { lectureTitle: "Hoisting", lectureDuration: 15 },
        ],
      },
      {
        chapterTitle: "Async JavaScript",
        chapterContent: [
          { lectureTitle: "Promises", lectureDuration: 18, isPreviewFree: true, lectureUrl: "https://www.youtube.com/watch?v=NOzi4wBHn0o" },
          { lectureTitle: "Async/Await", lectureDuration: 22 },
        ],
      },
    ],
  },

  {
    _id: "7",
    courseTitle: "MongoDB Complete Guide",
    courseDescription: `
<h2>Learn MongoDB from Basics to Advanced</h2>

<p>
MongoDB is a NoSQL database used in modern applications.
</p>

<p>
This course teaches how to store, query, and manage data efficiently.
</p>

<ul>
  <li>Understand documents and collections</li>
  <li>Perform CRUD operations</li>
  <li>Use indexes for performance</li>
  <li>Work with aggregation pipelines</li>
</ul>
`,
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
          { lectureTitle: "Documents & Collections", lectureDuration: 14, isPreviewFree: true, lectureUrl: "https://www.youtube.com/watch?v=7o4jC2PNNfc" },
          { lectureTitle: "CRUD Operations", lectureDuration: 18 },
        ],
      },
      {
        chapterTitle: "Advanced Mongo",
        chapterContent: [
          { lectureTitle: "Indexes", lectureDuration: 16, isPreviewFree: true, lectureUrl: "https://www.youtube.com/watch?v=D14wWW9EEx8" },
          { lectureTitle: "Aggregation", lectureDuration: 20 },
        ],
      },
    ],
  },

  {
    _id: "8",
    courseTitle: "Git & GitHub for Developers",
    courseDescription: `
<h2>Master Git and GitHub</h2>

<p>
Git is a version control system that helps developers track code changes.
</p>

<p>
This course teaches collaboration using GitHub.
</p>

<ul>
  <li>Understand Git fundamentals</li>
  <li>Work with branches and commits</li>
  <li>Collaborate using GitHub</li>
  <li>Manage pull requests</li>
</ul>
`,
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
          { lectureTitle: "Git Init & Commit", lectureDuration: 10, isPreviewFree: true, lectureUrl: "https://www.youtube.com/watch?v=f5Dol8ulMRw" },
          { lectureTitle: "Branches", lectureDuration: 12 },
        ],
      },
      {
        chapterTitle: "GitHub",
        chapterContent: [
          { lectureTitle: "Pull Requests", lectureDuration: 14, isPreviewFree: true, lectureUrl: "https://www.youtube.com/watch?v=jRLGobWwA3Y" },
          { lectureTitle: "Collaboration", lectureDuration: 16 },
        ],
      },
    ],
  },

  {
    _id: "9",
    courseTitle: "REST API Development",
    courseDescription: `
<h2>Build Scalable REST APIs</h2>

<p>
REST APIs allow communication between frontend and backend systems.
</p>

<p>
This course focuses on API design and security.
</p>

<ul>
  <li>Understand REST principles</li>
  <li>Work with HTTP methods</li>
  <li>Create APIs using Express</li>
  <li>Implement authentication</li>
</ul>
`,
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
          { lectureTitle: "REST Principles", lectureDuration: 15, isPreviewFree: true, lectureUrl: "https://www.youtube.com/watch?v=pJ83mmqcvoQ" },
          { lectureTitle: "HTTP Methods", lectureDuration: 14 },
        ],
      },
      {
        chapterTitle: "Implementation",
        chapterContent: [
          { lectureTitle: "Express APIs", lectureDuration: 18, isPreviewFree: true, lectureUrl: "https://www.youtube.com/watch?v=-MTSQjw5DrM" },
          { lectureTitle: "JWT Auth", lectureDuration: 20 },
        ],
      },
    ],
  },

  {
    _id: "10",
    courseTitle: "DSA with JavaScript",
    courseDescription: `
<h2>Master Data Structures and Algorithms</h2>

<p>
DSA is essential for writing efficient code and cracking interviews.
</p>

<p>
This course teaches DSA concepts using JavaScript.
</p>

<ul>
  <li>Learn arrays and linked lists</li>
  <li>Understand sorting algorithms</li>
  <li>Improve problem-solving skills</li>
  <li>Prepare for interviews</li>
</ul>
`,
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
          { lectureTitle: "Arrays", lectureDuration: 18, isPreviewFree: true, lectureUrl: "https://www.youtube.com/watch?v=0OK-kbu9Cwo" },
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
    courseDescription: `
<h2>Build Type-Safe React Applications</h2>

<p>
TypeScript improves JavaScript by adding static typing.
</p>

<p>
This course focuses on using TypeScript with React.
</p>

<ul>
  <li>Learn TypeScript basics</li>
  <li>Use types and interfaces</li>
  <li>Type React props and state</li>
  <li>Write safer React code</li>
</ul>
`,
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
          { lectureTitle: "Types", lectureDuration: 15, isPreviewFree: true, lectureUrl: "https://www.youtube.com/watch?v=kwcBi3S4bHU" },
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
    courseDescription: `
<h2>Build Production-Ready Next.js Applications</h2>

<p>
Next.js is a React framework used for building fast and SEO-friendly apps.
</p>

<p>
This course teaches production-ready Next.js concepts.
</p>

<ul>
  <li>Learn routing and layouts</li>
  <li>Understand SSR and SSG</li>
  <li>Optimize performance</li>
  <li>Deploy Next.js apps</li>
</ul>
`,
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
          { lectureTitle: "Pages & Routing", lectureDuration: 16, isPreviewFree: true, lectureUrl: "https://www.youtube.com/watch?v=KBSYutEDkgw" },
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
