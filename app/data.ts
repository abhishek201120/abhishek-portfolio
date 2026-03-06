export const portfolioData = {
  personal: {
    firstName: "Abhishek",
    lastName: "Chauhan",
    title: "MERN STACK DEVELOPER",
    summary: "Building scalable backend systems & modern web applications. I specialize in designing RESTful APIs, ERP architecture, real-time WebSockets, and full-stack engineering using Node.js, Express, React.js, and MongoDB.",
    email: "abhishekchauhan4201@gmail.com",
    phone: "+91 9054277372",
    linkedin: "https://www.linkedin.com/in/abhishek-c-9b1766255/",
    resumeFile: "/resume.pdf"
  },
  experience: [
    {
      company: "Leeway Softech Pvt Ltd",
      role: "MERN Stack Developer",
      dates: "Dec 2025 - Present",
      location: "Bhavnagar, India",
      bullets: [
        "Built complete ERP backend using Node.js, Express.js, and MongoDB.",
        "Designed and developed RESTful APIs for leads, customers, and workflow modules.",
        "Implemented authentication and role-based access control.",
        "Created modular backend structure (routes, controllers, services, models).",
        "Improved API performance and database query efficiency.",
        "Worked closely with frontend team for API integration and documented using Postman."
      ]
    },
    {
      company: "Floatbot.ai",
      role: "Software Developer I",
      dates: "Feb 2024 - Feb 2025",
      location: "Bhavnagar, India",
      bullets: [
        "Developed backend features using Node.js and Express.",
        "Built real-time chatbot and voicebot systems using WebSockets.",
        "Implemented chat history and live messaging features.",
        "Improved application speed and backend performance.",
        "Contributed to Experience-Zone bot interaction platform.",
        "Worked in an agile team with strict production delivery timelines."
      ]
    }
  ],
  projects: [
    {
      title: "CineRate: Movie Platform",
      tech: "React.js, APIs",
      desc: "Built a user-friendly React app using IMDb data. Users can find movies, view cast details, plot summaries, and create personalized rated movie lists.",
      icon: "film" // Unique Icon
    },
    {
      title: "Real-time Voicebot System",
      tech: "Node.js, WebSockets",
      desc: "Developed backend systems handling real-time data communication for bot platforms, focusing on transaction handling models.",
      icon: "bot" // Unique Icon
    },
    {
      title: "Route Optimization API",
      tech: "Node.js, Express, Google Maps",
      desc: "Designed and implemented an algorithm-driven API that calculates the absolute shortest delivery routes for logistics.",
      icon: "map" // Unique Icon
    }
  ],
  skills: [
    { group: "Languages & Frameworks", items: ["JavaScript", "Node.js", "Express.js", "React.js"] },
    { group: "Databases & Tools", items: ["MongoDB", "MySQL", "Postman", "WebSockets"] },
    { group: "Design & Styling", items: ["Tailwind CSS", "Bootstrap", "Responsive UI"] }
  ],
  education: [
    {
      degree: "Information Technology (BE)",
      school: "Gujarat Technological University (GTU)",
      dates: "May 2020 - Jun 2024",
      location: "Bhavnagar",
      grade: "CGPA: 8.34 / 10",
      icon: "university" // Unique Icon
    },
    {
      degree: "High School",
      school: "Mangal Murti Vidhyalaya",
      dates: "Mar 2018 - Mar 2020",
      location: "Mahuva",
      grade: "Percentage: 83.84%",
      icon: "school" // Unique Icon
    }
  ]
};