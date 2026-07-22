import storysite from "../Assets/Projects/storysite.webp";
import questapp from "../Assets/Projects/questapp.webp";
import gymapp from "../Assets/Projects/gymapp.webp";
import intramuscular from "../Assets/Projects/intramuscular.webp";
import leopold from "../Assets/Projects/leopold.webp";
import subcutan from "../Assets/Projects/subcutan.webp";

// ---------------------------------------------------------------------------
// PROJECTS
//
// Each project renders both a card (on the Projects grid) and its own detail
// page at /projects/<slug>. To flesh out a project's inner page, just edit the
// fields below — especially `overview` (array of paragraphs) and
// `highlights` (array of bullet points). Add more images to `gallery`.
// ---------------------------------------------------------------------------

export const projects = [
  {
    slug: "storysite",
    title: "StorySite",
    tagline: "A Notion-powered platform for writing and sharing stories.",
    category: "Web",
    year: "2024",
    role: "Full-stack Developer",
    cover: storysite,
    featured: true,
    stack: ["React", "Notion API", "JavaScript"],
    links: {
      demo: "https://storysite.berabyk.com/",
      github: "https://github.com/berabyk/storysite",
    },
    summary:
      "A story website where stories can be written and shared. The backend is integrated with Notion, so stories written in Notion are displayed on the site instantly and can be read by everyone.",
    overview: [
      "StorySite is a publishing platform that turns Notion into a friendly content management system. Instead of building a custom editor and admin panel, the site reads content directly from Notion through its API — so writing a story is as simple as typing into a Notion page.",
      "Once a story is uploaded to Notion, it becomes instantly visible on the website and can be read by other users. This keeps the authoring experience effortless while the front end stays fast and focused purely on reading.",
    ],
    highlights: [
      "Notion API integration as a headless CMS backend",
      "Stories written in Notion appear on the site instantly",
      "Clean, distraction-free reading experience",
      "Simple content workflow — no custom admin panel needed",
    ],
    gallery: [],
  },
  {
    slug: "quest-app",
    title: "Quest App",
    tagline: "A Twitter-like Q&A platform — my first Spring Boot project.",
    category: "Web",
    year: "2023",
    role: "Full-stack Developer",
    cover: questapp,
    featured: true,
    stack: ["Spring Boot", "PostgreSQL", "React", "Docker"],
    links: {
      demo: "https://questapp.berabyk.com/",
      github: "https://github.com/berabyk/Spring-Boot-App",
    },
    summary:
      "A Twitter-like site where users can ask questions and answer them. My first project with Java Spring Boot, built to learn backend technologies end to end.",
    overview: [
      "Quest App is a social Q&A application where users post questions and reply to one another, similar in spirit to Twitter. I built it as my first hands-on project with Java Spring Boot, specifically to learn backend development from the ground up.",
      "The backend is powered by the Spring Boot framework with a PostgreSQL database, while the frontend is built with React. I containerized the backend with Docker to make deployment repeatable and reliable.",
    ],
    highlights: [
      "RESTful backend built with Java Spring Boot",
      "PostgreSQL relational database",
      "React single-page frontend",
      "Dockerized backend for consistent deployments",
      "Post questions, answer, like and interact",
    ],
    gallery: [],
  },
  {
    slug: "mobile-sport-app",
    title: "Mobile Sport App",
    tagline: "A subscription fitness app with workout guides and coaching tips.",
    category: "Mobile",
    year: "2023",
    role: "Flutter Developer",
    cover: gymapp,
    featured: true,
    stack: ["Flutter", "Dart", "Firebase"],
    links: {},
    summary:
      "A mobile sports app built for a client. Users follow gym workout examples through a monthly subscription, save routines for quick access, and receive sport and diet advice. Built with Flutter and Firebase.",
    overview: [
      "The Mobile Sport App is a client project delivering a personal-training experience on mobile. Subscribers get access to a library of gym workout examples on a monthly plan, and can save the routines they like for quick access later.",
      "Beyond workouts, the app offers curated sport and diet advice to help users reach their goals. It was developed with Flutter for a smooth cross-platform experience, with Firebase handling authentication and data on the backend.",
    ],
    highlights: [
      "Cross-platform app built with Flutter",
      "Monthly subscription access to workout content",
      "Save and organize favorite routines",
      "Sport and diet guidance for users",
      "Firebase-powered backend and authentication",
    ],
    gallery: [],
  },
  {
    slug: "subcutaneous-administration",
    title: "Subcutaneous Administration",
    tagline: "An interactive 3D web experience teaching subcutaneous injection.",
    category: "3D / Interactive",
    year: "2023",
    role: "Frontend Developer",
    cover: subcutan,
    featured: false,
    series: "3D Medical Education",
    stack: ["Three.js", "GSAP", "Swiper.js", "Tailwind CSS"],
    links: {},
    summary:
      "An interactive 3D website built for nursing students, walking them through the subcutaneous injection procedure step by step.",
    overview: [
      "Part of a series of 3D interactive learning tools built for nursing students, this project teaches the subcutaneous injection technique through an immersive, hands-on web experience.",
      "The scene and interactions are powered by Three.js, camera movement is animated with GSAP, and step-by-step content is presented with Swiper.js sliders. Tailwind CSS was used to style the interface quickly and consistently.",
    ],
    highlights: [
      "Real-time 3D scene rendered with Three.js",
      "Smooth cinematic camera movement using GSAP",
      "Step-by-step guidance with Swiper.js sliders",
      "Responsive UI styled with Tailwind CSS",
      "Designed as a learning aid for nursing students",
    ],
    gallery: [],
  },
  {
    slug: "intramuscular-injection",
    title: "Intramuscular Injection",
    tagline: "An interactive 3D web experience teaching intramuscular injection.",
    category: "3D / Interactive",
    year: "2023",
    role: "Frontend Developer",
    cover: intramuscular,
    featured: false,
    series: "3D Medical Education",
    stack: ["Three.js", "GSAP", "Swiper.js", "Tailwind CSS"],
    links: {},
    summary:
      "An interactive 3D website built for nursing students, demonstrating the intramuscular injection procedure with a guided, hands-on approach.",
    overview: [
      "Another entry in the 3D medical-education series, this project focuses on the intramuscular injection technique. Students explore an interactive 3D model and follow the procedure through guided steps.",
      "Built with Three.js for the 3D scene and interactions, GSAP for camera choreography, and Swiper.js for the step-by-step flow, with Tailwind CSS handling the styling.",
    ],
    highlights: [
      "Interactive 3D anatomy and injection model",
      "Guided, step-by-step procedure walkthrough",
      "Three.js + GSAP for scene and camera motion",
      "Tailwind CSS for a clean, responsive layout",
      "Purpose-built as an educational resource",
    ],
    gallery: [],
  },
  {
    slug: "leopolds-maneuvers",
    title: "Leopold's Maneuvers",
    tagline: "An interactive 3D web experience teaching Leopold's maneuvers.",
    category: "3D / Interactive",
    year: "2023",
    role: "Frontend Developer",
    cover: leopold,
    featured: false,
    series: "3D Medical Education",
    stack: ["Three.js", "GSAP", "Swiper.js", "Tailwind CSS"],
    links: {},
    summary:
      "An interactive 3D website built for nursing students, illustrating Leopold's maneuvers used in prenatal examinations.",
    overview: [
      "The final piece in the 3D medical-education series teaches Leopold's maneuvers — the sequence of abdominal palpations used to assess fetal position during pregnancy. The experience lets students visualize and step through each maneuver.",
      "As with its companion projects, it combines Three.js for the interactive 3D scene, GSAP for camera movement, Swiper.js for the guided steps, and Tailwind CSS for styling.",
    ],
    highlights: [
      "Visualizes each of Leopold's maneuvers in 3D",
      "Step-by-step interactive learning flow",
      "Three.js scene with GSAP-driven camera",
      "Responsive Tailwind CSS interface",
      "Built for nursing and midwifery students",
    ],
    gallery: [],
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);

export const featuredProjects = projects.filter((p) => p.featured);

export const categories = ["All", ...new Set(projects.map((p) => p.category))];
