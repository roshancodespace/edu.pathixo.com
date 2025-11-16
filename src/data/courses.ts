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
                module: "Module 1: JavaScript Foundations & Modern Tooling",
                weeks: "Week 1–3 (6 x 90-min Classes)",
                lessons: [
                    "Class 1: Dev Environment Setup, VS Code, Git & GitHub",
                    "Class 2: Modern JavaScript Essentials (let/const, functions, scope)",
                    "Class 3: Async JavaScript (Promises, Async/Await, Fetch API)",
                    "Class 4: Array & Object Power Features (Map, Filter, Reduce, Destructuring)",
                    "Class 5: ES Modules, Imports/Exports & Clean Folder Structures",
                    "Class 6: Building Your First Mini JS Project with Proper Git Workflow"
                ]
            },

            {
                module: "Module 2: React Essentials Through Next.js",
                weeks: "Week 4–6 (6 x 90-min Classes)",
                lessons: [
                    "Class 1: React Basics Inside Next.js (Components, Props, JSX)",
                    "Class 2: State & Events with useState",
                    "Class 3: Side Effects & Data Fetching with useEffect",
                    "Class 4: Lists, Conditional Rendering & Component Patterns",
                    "Class 5: Forms & Controlled Inputs in React",
                    "Class 6: Layouts, Pages, SEO Basics & File-System Routing in Next.js"
                ]
            },

            {
                module: "Module 3: Next.js Advanced Features & State Management",
                weeks: "Week 7–9 (6 x 90-min Classes)",
                lessons: [
                    "Class 1: Server Components vs Client Components — When & Why",
                    "Class 2: Next.js App Router Deep Dive",
                    "Class 3: Building API Routes Inside Next.js",
                    "Class 4: Local & Global State: When Redux is Needed",
                    "Class 5: Redux Toolkit Setup & RTK Query for Fetching",
                    "Class 6: Data Caching, Revalidation & Data Layer Patterns"
                ]
            },

            {
                module: "Module 4: Backend with Node.js, Express & REST APIs",
                weeks: "Week 10–12 (6 x 90-min Classes)",
                lessons: [
                    "Class 1: Node.js Fundamentals (Event Loop, NPM, Modules)",
                    "Class 2: Express Setup & Route Handling",
                    "Class 3: Middleware, CORS, Body Parsing & API Structure",
                    "Class 4: Designing RESTful CRUD Endpoints",
                    "Class 5: Controllers, Models & Error Handling",
                    "Class 6: API Testing with Thunder Client/Postman"
                ]
            },

            {
                module: "Module 5: MongoDB, Mongoose & Database Architecture",
                weeks: "Week 13–15 (6 x 90-min Classes)",
                lessons: [
                    "Class 1: MongoDB Atlas Setup (Free Tier)",
                    "Class 2: Connecting MongoDB to Express",
                    "Class 3: Mongoose Models & Schema Definitions",
                    "Class 4: CRUD Operations & Query Patterns",
                    "Class 5: Data Validation, Aggregations & Relationships",
                    "Class 6: Integrating MongoDB with Next.js API Routes"
                ]
            },

            {
                module: "Module 6: Authentication, Authorization & Security",
                weeks: "Week 16–18 (6 x 90-min Classes)",
                lessons: [
                    "Class 1: Password Hashing with Bcrypt",
                    "Class 2: Register & Login API Implementation",
                    "Class 3: Generating & Verifying JWT Tokens",
                    "Class 4: Protecting API Routes (Middleware + Auth Guards)",
                    "Class 5: Role-Based Access Control (RBAC)",
                    "Class 6: NextAuth.js for Full Next.js Authentication Flow"
                ]
            },

            {
                module: "Module 7: Testing, Optimization & Deployment",
                weeks: "Week 19–21 (6 x 90-min Classes)",
                lessons: [
                    "Class 1: Unit vs Integration Testing Basics",
                    "Class 2: Backend Testing with Jest",
                    "Class 3: UI Testing with React Testing Library",
                    "Class 4: Environment Variables, Build Optimization & Performance",
                    "Class 5: Deploying Backend to Render (Free Tier)",
                    "Class 6: Deploying Next.js App to Vercel (Free Tier)"
                ]
            },

            {
                module: "Module 8: Final Capstone (Full-Stack Next.js App)",
                weeks: "Week 22–24 (6 x 90-min Classes)",
                lessons: [
                    "Class 1: Planning the Capstone & Structuring Requirements",
                    "Class 2: Setting Up Full-Stack Architecture with Next.js + Node/MongoDB",
                    "Class 3: Implementing Core CRUD Features",
                    "Class 4: Adding Advanced Feature (Search, Filters, Pagination, Charts)",
                    "Class 5: Final Debugging, Performance Tweaks & UI Polish",
                    "Class 6: Portfolio Build, Deployment & Job-Prep Guidance"
                ]
            }
        ]

    }
];