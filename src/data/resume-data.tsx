import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Leo Wu",
  initials: "LW",
  location: "Hong Kong",
  locationLink: "https://www.google.com/maps/place/HongKong",
  about:
    "Skilled developer with expertise in API development, system optimization, and mobile app creation across various technologies.",
  summary:
    "Experienced developer with expertise in system analysis, server optimization, API development, and mobile app creation. Skilled in Java, Python, Go, and modern web technologies, with a focus on efficient, user-centric solutions.",
  avatarUrl: "https://avatars.githubusercontent.com/u/9302503?v=44",
  personalWebsiteUrl: "https://leonardpark.dev",
  contact: {
    email: "leokwsw@gmail.com",
    tel: "+85267485283",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/leokwsw",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/leokwsw/",
        icon: LinkedInIcon,
      }
    ],
  },
  education: [
    {
      school: "Hong Kong Institute of Vocational Education",
      degree: "Mobile Applications Development (Higher Diploma)",
      start: "2015.08",
      end: "2019.02"
    },
  ],
  work: [
    {
      company: "Octopus InfoTech Limited",
      link: "https://octopus-tech.com",
      badges: [],
      title: "System Analysis",
      start: "2023.06",
      end: "2023.11",
      description: "Assisted the development team in technical exploration during the research stage. Implemented and enhancement the OpenAI ChatGPT proxy server. Analyzed server usage, identified and resolved high memory usage, and optimized the system structure. Implemented Private Document Search with Chatbot using Python and Flask framework with OpenAI ChatGPT and LangChain.",
      description_list: [
        "Assisted the development team in technical exploration during the research stage.",
        "Analyzed server usage, identified and resolved high memory usage, and optimized the system structure.",
        "Implemented and enhancement the OpenAI ChatGPT proxy server.",
        "Researched and Implemented Knowledge Bases With RAG(retrieval-augmented-generation) and Fine tuning and ChatGPT and LangChain."
      ],
      sub_description: "Technologies: Go, Python, Flask, MongoDB"
    },
    {
      company: "Octopus InfoTech Limited",
      link: "https://octopus-tech.com",
      badges: [],
      title: "Programmer",
      start: "2023.02",
      end: "2023.05",
      description: "Invited partly developed and maintained RESTful APIs using Java with the Spring framework in in-house product. Maintained a website with React.js, JavaScript, and TypeScript. Implement Payment Gateway System.",
      description_list: [
        "Invited partly developed and maintained RESTful APIs using Java with the Spring framework in in-house product.",
        "Maintained a website with React.js, JavaScript, and TypeScript.",
        "Implement Payment Gateway System."
      ],
      sub_description: "Technologies: React, TypeScript, Java, Spring Boot, MongoDB, MySQL, Redis, JavaScript, Socket"
    },
    {
      company: "Octopus InfoTech Limited",
      link: "https://octopus-tech.com",
      badges: [],
      title: "Programmer",
      start: "2021.10",
      end: "2022.07",
      description: "Developed RESTful APIs using Java with the Spring Boot framework. Designed databases concurrently using MySQL and MongoDB for two different projects. Assisted the development team in technical exploration during the research stage. Participated in front-end development, creating iOS and Android apps using Apache Cordova.",
      description_list: [
        "Developed RESTful APIs using Java with the Spring Boot framework.",
        "Designed databases concurrently using MySQL and MongoDB for two different projects.",
        "Assisted the development team in technical exploration during the research stage.",
        "Participated in front-end development, creating iOS and Android apps using Apache Cordova."
      ],
      sub_description: "Technologies: Java, Spring Boot, MongoDB, MySQL, Redis, Node.js, JavaScript, Socket"
    },
    {
      company: "Yoslock System Limited",
      link: "https://www.yoslock.com",
      badges: [],
      title: "Junior Mobile Application Developer",
      start: "2021.05",
      end: "2021.07",
      description: "Developed and maintained in-house Cross-Platform App with Cordova. Created Apache Cordova Plugin Regular Face SDK and revamped Home and Support pages using Jinja2. ",
      description_list: [
        "Developed and maintained in-house Cross-Platform App with Cordova.",
        "Created Apache Cordova Plugin Regular Face SDK and revamped Home and Support pages using Jinja2."
      ],
      sub_description: "Technologies: Java, Cordova, Jinja2"
    },
    {
      company: "AfterSchool Education Limited",
      link: "https://afterschool.com.hk",
      badges: [],
      title: "Android Developer",
      start: "2018.02",
      end: "2020.08",
      description: "Focused on developing and maintaining in-house Android app. Facilitated the conversion of app development language (from Java-based to Kotlin-based app). Improved the user experience by adding extra handling for Android unique operating behavior. ",
      description_list: [
        "Focused on developing and maintaining in-house Android app.",
        "Facilitated the conversion of app development language (from Java-based to Kotlin-based app).",
        "Improved the user experience by adding extra handling for Android unique operating behavior."
      ],
      sub_description: "Technologies: Android, Java, Kotlin, TypeScript, Vue"
    },
    {
      company: "Hong Kong Playground Association",
      link: "https://hkpa.hk",
      badges: [],
      title: "Android Application Developer",
      start: "2016.07",
      end: "2017.05",
      description: "Compiled a Content Management System for internal uses. Collaborated on a team of 4 to the characteristics of target users and their needs for app to develop Android app supporting the organization’s plan to implement systematized management. ",
      description_list: [
        "Compiled a Content Management System for internal uses.",
        "Collaborated on a team of 4 to the characteristics of target users and their needs for app to develop Android app supporting the organization’s plan to implement systematized management. "
      ],
      sub_description: "Technologies: Android, Java"
    },
  ],
  skills: [
    "Java",
    "Spring Boot",
    "Android",
    "Kotlin",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Socket.io",
    "Python",
    "React",
    "Vue",
    "Go"
  ],
  projects: [
    {
      title: "local rag",
      techStack: [
        "Side Project",
        "Python",
        "LLM",
        "RAG",
        "Unstructured"
      ],
      description: "Use Unstructured to ingest and pre-process documents for local RAG(retrieval-augmented-generation) application",
      link: {
        href: "https://github.com/leokwsw/local-rag"
      }
    },
    {
      title: "Discord ChatBot",
      techStack: [
        "Side Project",
        "Python",
        "Discord",
        "OpenAI"
      ],
      description: "Discord chatbot with google search and open weather tools",
      link: {
        href: "https://github.com/leokwsw/discord-chatbot"
      }
    },
    {
      title: "OpenAI TTS Gradio",
      techStack: [
        "Side Project",
        "Python",
        "TTS",
        "Gradio",
        "OpenAI"
      ],
      description: "Use OpenAI TTS(Text to Speech) API with Gradio",
      link: {
        href: "https://github.com/leokwsw/OpenAI-TTS-Gradio"
      }
    },
    {
      title: "ChatGPT Android Client",
      techStack: [
        "Side Project",
        "Android",
        "Kotlin",
        "Jetpack Compose",
        "OpenAI"
      ],
      description: "Use Android Jetpack Create a ChatGPT Client",
      link: {
        href: "https://github.com/leokwsw/ChatGPT-Android-Jetpack"
      }
    },
    {
      title: "OpenAI STT Gradio ",
      techStack: [
        "Side Project",
        "Python",
        "STT",
        "Gradio",
        "OpenAI"
      ],
      description: "Use OpenAI STT(Speech to Text) API with Gradio",
      link: {
        href: "https://github.com/leokwsw/OpenAI-STT-Gradio"
      }
    },
    {
      title: "OpenAI DALL·E Gradio",
      techStack: [
        "Side Project",
        "Python",
        "DALL·E",
        "Gradio",
        "OpenAI"
      ],
      description: "Use OpenAI DALL·E API with Gradio",
      link: {
        href: "https://github.com/leokwsw/OpenAI-DALL_E-Gradio"
      }
    },
    {
      title: "AI for Document Knowledge base",
      techStack: [
        "Python",
        "AI",
        "Vector Database"
      ],
      description: "Study the integration of LangChain, ChromaDB, and ElasticSearch for embedding text and PDFs into a Vector Database."
    },
    {
      title: "AI Leave and substitute teaching system",
      techStack: [
        "Java",
        "JavaScript"
      ],
      description: "Develop a Web Push Notification Module. For Google Chrome version 50+, Firefox version 47+, Desktop Safari 10+, Mobile Safari on iOS and iPadOS 16.4+"
    },
    {
      title: "Node.js load balancer",
      techStack: [
        "Side Project",
        "Node.js",
        "Express",
        "load balancer"
      ],
      description: "Use Express.js to simulation Nginx load balancer",
      link: {
        href: "https://github.com/leokwsw/nodejs-load-balancer"
      }
    },
    {
      title: "iTeach",
      techStack: [
        "go",
        "OpenAI",
        "Android",
        "iOS"
      ],
      description: "Implement OpenAI ChatGPT Proxy to project for teacher ask AI and generate question. Using Cordova to build iOS and Android App."
    },
    {
      title: "NowBook Digital Library",
      techStack: [
        "Java",
        "SpringBoot",
        "React.js",
        "TypeScript"
      ],
      description: "An platform provides a diverse e-library with advanced reading features, catering to Hong Kong schools and individual users.",
      link: {
        href: "https://www.nblib.com/"
      }
    },
    {
      title: "大千世界",
      techStack: [
        "iOS",
        "Objective-C",
        "Swift",
        "JavaScript"
      ],
      description: "An mobile app uses AR technology to help students learn about global landmarks and cultures on campus.",
      link: {
        href: "https://apps.apple.com/hk/app/大千世界/id1602456372"
      }
    },
    {
      title: "Yoswit",
      techStack: [
        "Java",
        "Cordova",
        "Objective-C",
        "Jinja2"
      ],
      description: "An mobile app offers user-friendly, high-quality Bluetooth smart switches for easy home automation.",
      link: {
        href: "https://www.yoslock.com"
      }
    },
    {
      title: "AfterSchool",
      techStack: [
        "Android",
        "Kotlin",
        "TypeScript",
        "Vue.js"
      ],
      description: "An online learning platform for secondary students to ask, discuss, earn rewards, and explore.",
      link: {
        href: "https://afterschool.com.hk"
      }
    },
    {
      title: "Emoji Keyboard",
      techStack: [
        "Side Project",
        "Android",
        "Kotlin"
      ],
      description: "A simple library to add Emoji support to your Android Application.",
      link: {
        href: "https://github.com/leokwsw/Emoji-Keyboard"
      }
    },
    {
      title: "Pixel Image",
      techStack: [
        "Side Project",
        "Android",
        "Kotlin"
      ],
      description: "Powerful library for Image Picker and Drawing on Image to your Android Application.",
      link: {
        href: "https://github.com/leokwsw/pixel-image"
      }
    },
    // {
    //   title: "HKPA",
    //   techStack: [
    //     "Android",
    //     "Java"
    //   ],
    //   description: "An platform to share campaign content, and "
    // }
  ],
} as const;
