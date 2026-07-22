import {
  SiDart,
  SiFlutter,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiThreedotjs,
  SiFirebase,
  SiMysql,
  SiPostgresql,
  SiNodedotjs,
  SiGit,
  SiUnity,
  SiVercel,
  SiPostman,
  SiFigma,
  SiIntellijidea,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

// ---------------------------------------------------------------------------
// Skillsets grouped by category. Add / remove entries freely.
// ---------------------------------------------------------------------------

export const skillGroups = [
  {
    title: "Languages",
    items: [
      { name: "Dart", icon: SiDart },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Java", icon: DiJava },
      { name: "C#", icon: TbBrandCSharp },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { name: "Flutter", icon: SiFlutter },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Three.js", icon: SiThreedotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Unity", icon: SiUnity },
    ],
  },
  {
    title: "Web",
    items: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
    ],
  },
  {
    title: "Data & Backend",
    items: [
      { name: "Firebase", icon: SiFirebase },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
];

export const tools = [
  { name: "VS Code", icon: VscVscode },
  { name: "IntelliJ IDEA", icon: SiIntellijidea },
  { name: "Git", icon: SiGit },
  { name: "Postman", icon: SiPostman },
  { name: "Figma", icon: SiFigma },
  { name: "Vercel", icon: SiVercel },
];
