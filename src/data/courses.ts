export const courses = [
    {
        title: "Full-Stack Web Development",
        description:
            "Learn to build dynamic and responsive web applications using modern technologies like React, Node.js, and MongoDB.",
        duration: "6 months",
        price: 3999,
        originalPrice: 9999,
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB3lR5pCcIbvCDXXHBNDDhi0gHaDgKBLa1QHZRc-45A0dmXgrliHSgXDtQWu_txAd6IgbrkMMOk1J_NencpxiJjgUHKeRgVkq7lcvH8e9hf1P7MT4b-1005jMpLJ-8JBovhT-skw4dIgb-4cTIuamywOEIyCCIcwZna568Yq4gOT5imwrQpx_N82a8qQ-8e9Ic_QOCj3XzHETWFoYriKJQacUGpG4xRRnmcy95RCOVn36io_fKRtsrZ5TQf7y585kKyD9NbNk9wYhw",

        longDescription:
            "This masterclass is your complete guide to becoming a proficient full-stack developer. You'll start with modern front-end development using React, exploring component architecture, hooks, and state management. Then you'll move to the back-end with Node.js and Express to build secure REST APIs, work with databases, authentication systems, and deploy full applications. The course includes several real-world projects and a final capstone project you can showcase in your portfolio.",

        whatYouWillLearn: [
            "Build modern, scalable full-stack web applications.",
            "Master React, Node.js, Express, and MongoDB.",
            "Implement secure authentication and authorization.",
            "Deploy applications to cloud platforms such as Vercel and Render (Free Tier).", 
            "Understand and design **RESTful APIs**.", 
            "Write clean, maintainable, and testable code.",
        ],

        prerequisites: [
            "Basic understanding of HTML, CSS, and JavaScript.",
            "Some familiarity with the command line is helpful.",
            "A computer with Node.js and a code editor installed.",
        ],

        stats: {
            students: 12345,
            lastUpdated: "Oct 2023",
        },

        includes: [
            "45 hours on-demand video",
            "12 coding exercises",
            "Full lifetime access",
            "Certificate of completion"
        ],

        curriculum: [
            {
                module: "Module 1: Essential Foundations & Modern JavaScript",
                weeks: "Week 1-3 (6 x 90-min Classes)",
                lessons: [
                    "Class 1: Environment Setup, CLI, and Git Essentials",
                    "Class 2: Modern JavaScript: Core Syntax and Functions",
                    "Class 3: Mastering Asynchronous JS (Promises, Async/Await)",
                    "Class 4: Array Methods and Destructuring (Map, Filter, Reduce)",
                    "Class 5: ES Modules and Imports/Exports",
                    "Class 6: Structuring a Clean Project and Git Workflow Review"
                ],
            },
            {
                module: "Module 2: React Core & Component Architecture",
                weeks: "Week 4-6 (6 x 90-min Classes)",
                lessons: [
                    "Class 1: JSX, Functional Components, and Props",
                    "Class 2: Introduction to State with `useState`",
                    "Class 3: Managing Side Effects with `useEffect`",
                    "Class 4: Conditional Rendering and List Mapping",
                    "Class 5: Handling Forms and Controlled Inputs",
                    "Class 6: Setting up Client-Side Routing (**React Router v6**)"
                ],
            },
            {
                module: "Module 3: Advanced React State Management (Redux Toolkit)",
                weeks: "Week 7-9 (6 x 90-min Classes)",
                lessons: [
                    "Class 1: Global State: Why We Need Redux",
                    "Class 2: Installing and Setting up **Redux Toolkit**",
                    "Class 3: Defining State Slices and Reducers",
                    "Class 4: Dispatching Actions and State Updates",
                    "Class 5: Asynchronous Fetching with **RTK Query** (Intro)",
                    "Class 6: Integrating RTK Query for Data Management"
                ],
            },
            {
                module: "Module 4: Node.js, Express, and RESTful API Design",
                weeks: "Week 10-12 (6 x 90-min Classes)",
                lessons: [
                    "Class 1: Node.js Basics (Event Loop, Modules)",
                    "Class 2: Express Installation and Routing Setup",
                    "Class 3: Using Middleware (Body Parser, CORS)",
                    "Class 4: Designing and Implementing CRUD Endpoints",
                    "Class 5: Building Route Controllers and Centralized Error Handling",
                    "Class 6: Simple Postman/Insomnia Demo for API Testing"
                ],
            },
            {
                module: "Module 5: MongoDB and Mongoose Data Modeling",
                weeks: "Week 13-15 (6 x 90-min Classes)",
                lessons: [
                    "Class 1: Intro to NoSQL and **MongoDB Atlas** (Free Tier)",
                    "Class 2: Connecting MongoDB to the Express App",
                    "Class 3: Defining **Mongoose** Schemas and Models",
                    "Class 4: Implementing Database CRUD Operations",
                    "Class 5: Data Validation and Basic Querying",
                    "Class 6: Integrating Mongoose Functions into Controllers"
                ],
            },
            {
                module: "Module 6: Authentication and Security (JWT)",
                weeks: "Week 16-18 (6 x 90-min Classes)",
                lessons: [
                    "Class 1: Hashing Passwords with **Bcrypt** (Registration)",
                    "Class 2: Implementing User Registration Endpoint",
                    "Class 3: Generating **JWT Tokens** upon Successful Login",
                    "Class 4: Storing and Sending the JWT to the Frontend",
                    "Class 5: Protecting Routes with Authentication Middleware",
                    "Class 6: Basic Authorization: Role-Based Access Control (RBAC)"
                ],
            },
            {
                module: "Module 7: Professional Testing & Deployment (Free Tier)",
                weeks: "Week 19-21 (6 x 90-min Classes)",
                lessons: [
                    "Class 1: Intro to Testing: Unit vs. Integration",
                    "Class 2: Unit Testing Backend Logic with **Jest**",
                    "Class 3: Component Testing with **React Testing Library**",
                    "Class 4: Setting up Production Environment Variables",
                    "Class 5: Deploying Backend API to **Render** (Free Tier)",
                    "Class 6: Deploying Frontend to **Vercel/Netlify** (Free Tier)"
                ],
            },
            {
                module: "Module 8: The Capstone Project (Portfolio Ready)",
                weeks: "Week 22-24 (6 x 90-min Classes)",
                lessons: [
                    "Class 1: Final Project Planning and Feature Scoping",
                    "Class 2: Setting up the Capstone Full-Stack Architecture",
                    "Class 3: Implementing Core CRUD Functionality",
                    "Class 4: Adding Advanced Feature I (e.g., Search/Filtering)",
                    "Class 5: Code Refactoring and Final Bug Fixes",
                    "Class 6: Portfolio Preparation, Documentation, and Interview Guidance"
                ],
            }
        ],
    }
];