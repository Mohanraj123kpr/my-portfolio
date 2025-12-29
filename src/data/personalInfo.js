import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const personalInfo = {
  name: "John Doe",
  title: "Full Stack Developer",
  tagline: "Building beautiful and functional web experiences",
  bio: "Passionate developer with 5+ years of experience creating modern web applications. I specialize in React, Node.js, and building scalable solutions that solve real-world problems. When I'm not coding, you'll find me contributing to open source or exploring new technologies.",
  image: "/assets/images/profile.jpg",
  email: "john.doe@example.com",
  highlights: [
    "5+ years of development experience",
    "Specialized in React and Node.js",
    "Open source contributor",
    "Strong focus on user experience and accessibility"
  ],
  socialLinks: [
    { 
      platform: "GitHub", 
      url: "https://github.com/johndoe", 
      icon: FaGithub 
    },
    { 
      platform: "LinkedIn", 
      url: "https://linkedin.com/in/johndoe", 
      icon: FaLinkedin 
    },
    { 
      platform: "Twitter", 
      url: "https://twitter.com/johndoe", 
      icon: FaTwitter 
    }
  ]
};
