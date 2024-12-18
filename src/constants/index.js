export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Krishna Sai Ambati',
    position: 'MERN Stack Developer',
    img: 'assets/krishna.png',
    review:
      'Vignesh expertise in web development is exceptional. He created a scalable job portal application using the MERN stack, resulting in significant improvements in performance and user engagement  '
    ,
  },
  {
    id: 2,
    name: 'Sathwik Podishetti',
    position: 'Software Developer',
    img: 'assets/sathwik.png',
    review:
      'Working with Vignesh was a fantastic experience; he transformed our outdated website into a modern, user-friendly platform. His unmatched attention to detail and commitment to quality make him highly recommended for any web development projects.',
  },
  {
    id: 3,
    name: 'Saketh Reddy',
    position: 'Cloud Engineer',
    img: 'assets/saketh.png',
    review:
      'Vignesh skills as a Cloud Engineer are exceptional; he designed and implemented scalable, efficient cloud solutions that optimized costs and improved application performance. His proactive approach and technical proficiency have significantly enhanced our cloud operations.',
  },
  {
    id: 4,
    name: 'Guguloth Vamshi',
    position: 'Data Scientist',
    img: 'assets/vamshi.png',
    review:
      'Vignesh demonstrates strong proficiency in machine learning, developing innovative solutions for complex problems. His work on real-time projects, like smoke detection systems, highlights his ability to create accurate and efficient models',
  },
];

export const myProjects = [
  {
    title: 'Attendance Using Face Recognition',
    desc: 'Developed a facial recognition-based attendance system to automate tracking, leveraging Python, OpenCV for real-time face detection and user management.',
    subdesc:
      ' Integrated Haar Cascade classifiers for robust face detection and trained a K-Nearest Neighbors (KNN) model for accurate face recognition, ensuring reliable attendance logging with a user-friendly web interface',
    href: 'https://github.com/buntyanvi/Attendance_Using_Face_Recognition',
    liveUrl: "https://project1.com",
    texture: '/textures/project/project1.mp4',
    logo: '/assets/facerec.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/python.svg',
      },
      {
        id: 2,
        name: 'Machine Learning',
        path: 'assets/ml.png',
      },
      {
        id: 3,
        name: 'HTML',
        path: '/assets/html.png',
      },
      {
        id: 4,
        name: 'CSS',
        path: '/assets/css.png',
      },
    ],
  },
  {
    title: 'Job Portal Application',
    desc: 'Developed a job portal application using the MERN stack (MongoDB, Express.js, React JS, Node.js) to create a seamless platform for job seekers and recruiters. Enhanced the system with efficient database management and dynamic user interface design.',
    subdesc:
      'Optimized application performance, resulting in a 30% improvement in load times and a 25% increase in user engagement and Integrated advanced search and filtering features to provide an improved user experience and better job matching.',
    href: 'https://github.com/buntyanvi/Job_Portal_MERN',
    liveUrl: "https://project1.com",
    texture: '/textures/project/project2.mp4',
    logo: '/assets/job.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Node.js',
        path: 'assets/nodejs.png',
      },
      {
        id: 3,
        name: 'MongoDB',
        path: '/assets/mongodb.png',
      },
      {
        id: 4,
        name: 'Express.js',
        path: '/assets/expressjs.png',
      },
    ],
  },
  {
    title: 'Smoke Detection Using Machine Learning',
    desc: 'Developed a machine learning-based smoke detection system leveraging environmental sensor data for real-time fire safety monitoring.',
    subdesc:
      'Utilized a hybrid model combining Principal Component Analysis (PCA) for dimensionality reduction and a Random Forest classifier for smoke detection, achieving 93% accuracy in predictions with Python and Scikit-learn',
    href: 'https://github.com/buntyanvi/Smoke_Detection_ML',
    liveUrl: "https://project1.com",
    texture: '/textures/project/project3.mp4',
    logo: '/assets/smoke.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/python.svg',
      },
      {
        id: 2,
        name: 'Machine Learning',
        path: 'assets/ml.png',
      },
      {
        id: 3,
        name: 'HTML',
        path: '/assets/html.png',
      },
      {
        id: 4,
        name: 'CSS',
        path: '/assets/css.png',
      },
    ],
  },
  {
    title: 'General Store Management System',
    desc: 'Developed a management system for a general store using HTML, CSS, and JavaScript. Implemented features for inventory management, sales transactions, and customer data handling, increasing operational efficiency by 30%',
    subdesc:
      'Designed to streamline store operations and automate sales reporting processes and Enhanced user experience through an intuitive interface and responsive design',
    href: 'https://github.com/buntyanvi/General_store_management_system',
    liveUrl: "https://project1.com",
    texture: '/textures/project/project4.mp4',
    logo: '/assets/store.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'HTML',
        path: '/assets/html.png',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/css.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/javascript.png',
      },
      {
        id: 4,
        name: 'Bootstrap',
        path: '/assets/bootstrap.png',
      },
    ],
  },

];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Edunet Foundations',
    pos: 'Full Stack Web Developer Intern',
    duration: 'Feb 2024 - Apr 2024',
    title: "Developed a job portal application using the MERN stack with features like job listings, applications, and user authentication, implementing Material UI, Apollo Client, Express.js, MongoDB, JWT, and NodeMailer for frontend design, state management, backend logic, and email functionality",
    icon: '/assets/edunet.jpg',
    animation: 'victory',
  },
  // {
  //   id: 2,
  //   name: 'Upskill Campus',
  //   pos: 'Cloud Computing Intern',
  //   duration: 'June 2024 - Present',
  //   title: "Gained knowledge in AWS services and fundamentals of cloud computing, focusing on cloud infrastructure management, optimization, and cloud service exploration across AWS.",
  //   icon: '/assets/upskill.jpg',
  //   animation: 'clapping',
  // },
  {
    id: 3,
    name: 'AICTE Virtual Internship',
    pos: 'Intern',
    duration: 'May 2023- Present',
    title: " Acquired comprehensive knowledge of core AWS services including EC2, S3, RDS, VPC, and IAM, strengthening cloud computing expertise.",
    icon: '/assets/aicte.jpeg',
    animation: 'salute',
  },
];
