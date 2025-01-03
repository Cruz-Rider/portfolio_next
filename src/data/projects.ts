export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

export const projects: Project[] = [
  {
    title: "Project 1",
    description: "A modern web application built with React and Node.js",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    title: "Project 2",
    description: "Full-stack e-commerce platform with real-time features",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    technologies: ["TypeScript", "Express", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Project 3",
    description: "Cloud-based collaboration tool for teams",
    image: "https://images.unsplash.com/photo-1522252234503-e356532cafd5",
    technologies: ["React", "AWS", "Redis"],
    link: "#",
  },
];
