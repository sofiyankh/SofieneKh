import React from "react";
import { motion } from "motion/react";

export function BackgroundLogos() {
  // Technology logos with actual URLs
  const technologies = [
    {
      name: "React",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      x: "10%",
      y: "20%",
      delay: 0,
    },
    {
      name: "TypeScript",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      x: "85%",
      y: "15%",
      delay: 0.5,
    },
    {
      name: "Node.js",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      x: "15%",
      y: "70%",
      delay: 1,
    },
    {
      name: "Python",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      x: "75%",
      y: "80%",
      delay: 1.5,
    },
    {
      name: "JavaScript",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      x: "90%",
      y: "50%",
      delay: 2,
    },
    {
      name: "Git",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      x: "5%",
      y: "45%",
      delay: 2.5,
    },
    {
      name: "Docker",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      x: "80%",
      y: "25%",
      delay: 3,
    },
    {
      name: "GraphQL",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      x: "25%",
      y: "85%",
      delay: 3.5,
    },
    {
      name: "Vue.js",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      x: "60%",
      y: "10%",
      delay: 4,
    },
    {
      name: "MongoDB",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      x: "20%",
      y: "30%",
      delay: 4.5,
    },
    {
      name: "PostgreSQL",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      x: "70%",
      y: "60%",
      delay: 5,
    },
    {
      name: "AWS",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
      x: "40%",
      y: "25%",
      delay: 5.5,
    },
    {
      name: "Next.js",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      x: "50%",
      y: "75%",
      delay: 6,
    },
    {
      name: "Tailwind",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      x: "35%",
      y: "50%",
      delay: 6.5,
    },
  ];

  // Technology logo component using actual URLs
  const TechIcon = ({
    name,
    url,
    className,
  }: {
    name: string;
    url: string;
    className?: string;
  }) => {
    return (
      <img
        src={url}
        alt={name}
        className={`w-8 h-8 ${className}`}
        style={{ filter: "grayscale(100%) opacity(0.6)" }}
        onError={(e) => {
          // Fallback to simple text if image fails to load
          const target = e.target as HTMLImageElement;
          target.style.display = "none";
          const fallback = document.createElement("div");
          fallback.className =
            "w-8 h-8 rounded-full bg-current opacity-20 flex items-center justify-center";
          fallback.innerHTML = `<span class="text-xs font-bold text-current">${name.slice(0, 2)}</span>`;
          target.parentNode?.appendChild(fallback);
        }}
      />
    );
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          className="absolute"
          style={{
            left: tech.x,
            top: tech.y,
          }}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{
            opacity: [0, 0.1, 0.05, 0.08],
            scale: [0, 1.2, 0.8, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 4,
            delay: tech.delay,
            repeat: Infinity,
            repeatDelay: 10,
            ease: "easeInOut",
          }}
        >
          <div className="relative">
            {/* Blurred shadow */}
            <div className="absolute inset-0 scale-150 blur-xl opacity-30">
              <TechIcon
                name={tech.name}
                url={tech.url}
                className="w-8 h-8"
              />
            </div>

            {/* Main icon */}
            <TechIcon
              name={tech.name}
              url={tech.url}
              className="w-8 h-8 relative z-10"
            />
          </div>
        </motion.div>
      ))}

      {/* Additional floating particles */}
      {Array.from({ length: 20 }).map((_, index) => (
        <motion.div
          key={`particle-${index}`}
          className="absolute w-1 h-1 bg-primary/10 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}