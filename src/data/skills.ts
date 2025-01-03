export interface SkillCategory {
  [key: string]: string[];
}

export const skills: SkillCategory = {
  Frontend: ["React", "TypeScript", "Tailwind CSS"],
  Backend: ["Node.js", "Express", "Python"],
  Database: ["PostgreSQL", "MongoDB", "Redis"],
  DevOps: ["Docker", "AWS", "CI/CD"],
};
