import { createElement } from "react"
import {
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaJs,
  FaGithub,
  FaFigma,
  FaDatabase,
  FaUsers,
  FaReact,
  FaNodeJs,
  FaPython,
  FaMicrosoft,
  FaVideo,
  FaLightbulb,
  FaMobileAlt,
  FaServer,
  FaCode,
  FaStar,
} from "react-icons/fa"
import {
  SiCanva,
  SiAdobe,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si"

/*
 * Icon keys selectable in the Sanity Studio (keep in sync with
 * studio/schemaTypes/iconOptions.js).
 */
const ICONS = {
  code: FaCode,
  html: FaHtml5,
  css: FaCss3Alt,
  js: FaJs,
  react: FaReact,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  node: FaNodeJs,
  php: FaPhp,
  python: FaPython,
  mysql: SiMysql,
  mongodb: SiMongodb,
  database: FaDatabase,
  server: FaServer,
  github: FaGithub,
  figma: FaFigma,
  canva: SiCanva,
  adobe: SiAdobe,
  video: FaVideo,
  microsoft: FaMicrosoft,
  mobile: FaMobileAlt,
  lightbulb: FaLightbulb,
  users: FaUsers,
  star: FaStar,
}

export function renderIcon(key) {
  return createElement(ICONS[key] || FaStar)
}
