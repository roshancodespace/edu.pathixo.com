export const courses = [
    {
        title: "Full-Stack Web Development",
        description:
            "Learn to build dynamic and responsive web applications using modern technologies like React, Node.js, and MongoDB.",
        duration: "6 months",
        price: 3999,
        originalPrice: 9999,
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuATvwPKrblGGY243q9OLxE6otBlaPbjnBFSLH3nHo_CwpZXYXs9nw-BuWiVhbhpftaBAqzhICCgq-NZr4eOAHJ6UpjSuH6i_cxEtooh5LzkJQZ_KGWrH7oKw9OQ-a_pCOJUQTlRin2jE5HtwBsXaWwDpvlAWWmqoyE0BdWmqI3Lyjf57v8Dr2L785cksbDjCpDiJxrKnvR5kjUiUxcK_NcTiznqS3o-CH8KQIo18p5MizxR7dBqDl5L2jAumj1di-3GIl5sRzFpGEE",
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

    },
    {
        title: "Python to Machine Learning Bootcamp",
        description:
            "A 13-week hands-on bootcamp that takes you from zero programming experience to building real machine learning models using Python, NumPy, Pandas, Matplotlib, Seaborn, and Scikit-Learn.",
        duration: "13 Weeks",
        price: 4499,
        originalPrice: 8999,
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCBlm8blct2fESZoMkwfwrA_Wbu2Zu26QTwEXoox_INiKBWHNlf8W1JrEkyAc5PTxczosyn2iju30Vv-gneFedlemm5xopX8lV6cpgS6HtnrPVAq2WEdHFRrkla06UDbi4-jmnyfvkLdelSE_MSsBG4S7Ba9kTO07a8TJ8WNvovPcD2Cp-hJO_gI6DN-aaIN0Xt0NleX9zf9DvubfmmDZK4dnT64ilKio3-B49uVL6sUj1GNlpYTas3p4s3RDGXXDtRsd888OD8vDc",

        longDescription:
            "This intensive bootcamp is designed for absolute beginners who want to enter the world of data science and machine learning. You'll start with Python fundamentals, then master the essential data science ecosystem, and finally build, train, and evaluate real machine learning models. The entire course is project-based with weekly assignments, mini projects, and a final ML capstone project that showcases your skills.",

        whatYouWillLearn: [
            "Write clean and efficient Python programs from scratch.",
            "Master NumPy, Pandas, Matplotlib, and Seaborn for data analysis.",
            "Perform Exploratory Data Analysis (EDA) on real datasets.",
            "Build, train, and evaluate machine learning models using Scikit-Learn.",
            "Understand regression, classification, clustering, and preprocessing techniques.",
            "Create end-to-end ML workflows and pipelines.",
            "Work with Jupyter/Colab for research-grade coding.",
            "Complete a real-world ML capstone project for your portfolio."
        ],

        prerequisites: [
            "No prior coding experience required.",
            "A laptop with internet connection.",
            "Willingness to practice 3–5 hours per week."
        ],

        stats: {
            students: 4280,
            lastUpdated: "Jan 2025",
        },

        includes: [
            "Live weekend classes (Sat & Sun)",
            "Hands-on coding in every class",
            "Weekly assignments and mini-projects",
            "Capstone project with presentation",
            "Lifetime access to materials",
            "Certificate of Completion"
        ],

        curriculum: [
            // ---------------- Module 1 ----------------
            {
                module: "Module 1: Python Foundations",
                weeks: "Weeks 1–3",
                lessons: [
                    "Lecture 1: Python Basics, Environment Setup, Variables & Data Types",
                    "Lecture 2: Lists, Tuples, Dictionaries, Sets",
                    "Lecture 3: Control Flow — if/elif/else, loops, break/continue",
                    "Lecture 4: Functions, Scope & Lambda Functions",
                    "Lecture 5: List Comprehensions & File I/O",
                    "Lecture 6: Introduction to NumPy & Array Operations"
                ]
            },

            // ---------------- Module 2 ----------------
            {
                module: "Module 2: The Data Science Stack",
                weeks: "Weeks 4–6",
                lessons: [
                    "Lecture 7: NumPy Indexing, Slicing, Vectorized Operations, Broadcasting",
                    "Lecture 8: Pandas Series & DataFrames, Reading CSV/Excel",
                    "Lecture 9: Data Cleaning, Selection, Missing Values",
                    "Lecture 10: Groupby, Aggregations, Merge, Join, Concat",
                    "Lecture 11: Matplotlib — Line, Bar, Scatter, Histogram, Subplots",
                    "Lecture 12: Seaborn — Distplots, Pairplots, Boxplots, Heatmaps"
                ]
            },

            // ---------------- Module 3 ----------------
            {
                module: "Module 3: Machine Learning Foundations",
                weeks: "Weeks 7–8",
                lessons: [
                    "Lecture 13: What is ML? Supervised vs Unsupervised, ML Workflow",
                    "Lecture 14: Data Preprocessing — Scaling, Encoding, Pipelines",
                    "Lecture 15: Linear Regression — Concepts & Implementation",
                    "Lecture 16: Regression Evaluation — MAE, MSE, RMSE, R²"
                ]
            },

            // ---------------- Module 4 ----------------
            {
                module: "Module 4: Supervised Learning — Classification",
                weeks: "Weeks 9–10",
                lessons: [
                    "Lecture 17: Logistic Regression — Theory & Scikit-Learn",
                    "Lecture 18: Classification Metrics — Precision, Recall, F1, ROC-AUC",
                    "Lecture 19: K-Nearest Neighbors (KNN) — Theory & Lab",
                    "Lecture 20: Decision Trees, Random Forests & Ensemble Concepts"
                ]
            },

            // ---------------- Module 5 ----------------
            {
                module: "Module 5: Unsupervised Learning & Model Tuning",
                weeks: "Weeks 11–12",
                lessons: [
                    "Lecture 21: K-Means Clustering & Elbow Method",
                    "Lecture 22: PCA — Dimensionality Reduction & Visualization",
                    "Lecture 23: Hyperparameter Tuning — GridSearchCV, RandomizedSearchCV",
                    "Lecture 24: Capstone Project Kickoff & Dataset Selection"
                ]
            },

            // ---------------- Module 6 ----------------
            {
                module: "Module 6: Capstone Project",
                weeks: "Week 13",
                lessons: [
                    "Lecture 25: Capstone Workshop — Debugging, EDA, Model Refinement",
                    "Lecture 26: Final Presentations — Results, Evaluation, Next Steps"
                ]
            }
        ]
    }
];

