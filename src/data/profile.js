import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

// ---------------------------------------------------------------------------
// Personal information — edit this file to update the site-wide content.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Bera Bıyık",
  firstName: "Bera",
  initials: "BB",
  location: "Türkiye",
  email: "berabykk@gmail.com",
  githubUsername: "berabyk",

  // Rotating roles shown in the hero typewriter
  roles: ["Software Developer", "Flutter Developer", "Computer Engineer"],

  // Short tagline under the name
  tagline:
    "I build cross-platform mobile apps with Flutter and craft modern, interactive experiences on the web.",

  // Longer intro used on the home page
  intro: [
    "Passionate creator driven by innovation and curiosity, blending technology and creativity in everything I build.",
    "I started my journey building web frontends and have since focused on Flutter, developing cross-platform applications with clean, tailored user experiences.",
  ],

  // Quick stats shown in the hero
  stats: [
    { value: "1+", label: "Years of experience" },
    { value: "6", label: "Featured projects" },
    { value: "3", label: "Core languages" },
  ],

  // Availability badge
  available: true,
  availableText: "Open to opportunities",
};

export const socials = [
  {
    name: "GitHub",
    href: "https://github.com/berabyk",
    icon: FaGithub,
    handle: "@berabyk",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/berabyk/",
    icon: FaLinkedinIn,
    handle: "in/berabyk",
  },
  {
    name: "Email",
    href: "mailto:berabykk@gmail.com",
    icon: HiOutlineMail,
    handle: "berabykk@gmail.com",
  },
];

// About-page biography (array of paragraphs)
export const about = {
  paragraphs: [
    "Hi everyone, I am Bera Bıyık — a computer engineering graduate with a year of experience in frontend development. My journey began by developing web frontend projects, but my path has since shifted towards Flutter, where I actively contribute to the development of cross-platform applications.",
    "Proficient in creating customized user experiences, I bring hands-on experience and a strong analytical mindset to my Flutter applications. Eager to continually improve, I stay dedicated to learning and building in the ever-evolving mobile ecosystem.",
    "My goal is to become an advanced Flutter developer — keeping up with the latest technologies and trends while delivering polished, thoughtful user experiences. I thrive in collaborative environments and enjoy contributing to teams focused on continuous learning.",
  ],
  focus: [
    "Cross-platform mobile applications",
    "Web technologies & products",
    "Backend fundamentals (Spring Boot, SQL, Firebase)",
  ],
  learning: ["Java Spring Boot", "MySQL", "Firebase", "Kubernetes"],
};
