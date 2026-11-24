/* ==========================================================================
   PORTFOLIO CONTENT
   --------------------------------------------------------------------------
   Every piece of text on the site lives in this file. Edit it to update the
   page - no HTML or CSS changes needed. `profile.about` paragraphs may use
   simple HTML such as <strong>; everything else is plain text.

   Project details: add a `details` object to any project (see the Martoo
   entry for the shape). A "View details" button appears automatically.
   ========================================================================== */

window.PORTFOLIO = {
  profile: {
    name: "Zubair Khalid",
    initials: "ZK",
    title: "Senior Software Engineer | Mobile & Full-Stack",
    stack: "Android · Flutter · React Native · .NET",
    currentRole: "Lead Mobile Engineer at Martoo",
    location: "Lahore, Pakistan",
    pitch:
      "I architect, build and ship high-performance mobile apps across native Android, Flutter, React Native and Ionic, backed by full-stack .NET and SQL Server experience.",
    about: [
      "I'm a Senior Software Engineer with 8+ years of experience taking mobile products from architecture to release. I currently lead native Android development for <strong>Martoo</strong>, a grocery shopping app, and its B2B companion <strong>Martoo Wholesale</strong>, where I own architecture decisions, code reviews and release management.",
      "I also spent nearly six years at <strong>3S Solutions</strong>, growing from Mobile Application Developer to Senior Software Engineer and owning end-to-end delivery for native and cross-platform apps in Agile teams running Scrum and Kanban. Along the way I've shipped apps on Google Play and the App Store for restaurants, distributors, event venues, wellness and fitness brands, accounting firms, golf academies and educators.",
      "My path into software started in electrical engineering. I hold an engineering degree in Electrical, Electronics & Communications from the University of Lahore and began my career at <strong>Bilal Switchgear Engineering</strong>, designing industrial LT and MV electrical panels and working on R&D for new panel designs, then taking them through testing and final inspection. I later moved into industrial electronics, diagnosing and maintaining CTP imaging machines. That design, prototype and test mindset still shapes how I build software, especially for BLE and hardware integrations.",
    ],
    email: "zabi.butt1989@gmail.com",
    linkedin: "https://www.linkedin.com/in/zubair-khalid-20bb769a/",
    github: "https://github.com/zkb-butt-1989",
    photo: "assets/img/profile.jpg", // square, at least 400×400
    resume: "", // TODO: optional, e.g. "assets/Zubair-Khalid-Resume.pdf" (shows a "Résumé" button)
    languages: ["English (Professional)", "Urdu (Native)"],
    // Rows on the hero "quick info" card.
    quickInfo: [
      { icon: "briefcase", label: "Current role", value: "Lead Mobile Engineer, Martoo" },
      { icon: "pin", label: "Based in", value: "Lahore, Pakistan" },
      { icon: "book", label: "Education", value: "Electronics & Communications Engineering, University of Lahore" },
      { icon: "globe", label: "Languages", value: "English · Urdu" },
    ],
  },

  stats: [
    { value: "8+", label: "Years building software" },
    { value: "20+", label: "Apps & products delivered" },
    { value: "11", label: "Apps live on Google Play & App Store" },
    { value: "4", label: "Mobile stacks shipped" },
  ],

  // Short, factual wins. Replace or extend with your own achievements.
  highlights: [
    {
      icon: "users",
      title: "Leads mobile at Martoo",
      text: "Owns architecture, code review and releases for the Martoo grocery app and Martoo Wholesale.",
    },
    {
      icon: "trending",
      title: "Promoted to Senior",
      text: "Moved from Mobile Application Developer to Senior Software Engineer at 3S Solutions.",
    },
    {
      icon: "zap",
      title: "Faster, more stable apps",
      text: "Cut startup time, memory usage and crash rates through systematic profiling and targeted fixes.",
    },
    {
      icon: "shield",
      title: "Quality & delivery",
      text: "Set up CI/CD pipelines, MVVM architecture and JUnit/Espresso coverage that reduced regressions.",
    },
  ],

  skills: [
    {
      icon: "smartphone",
      title: "Native Android",
      items: ["Kotlin", "Java", "Android SDK", "Jetpack Compose", "MVVM", "BLE & hardware integration", "Google Play releases"],
    },
    {
      icon: "layers",
      title: "Cross-platform",
      items: ["Flutter", "Dart", "React Native", "React", "Ionic", "Angular", "Capacitor", "TypeScript"],
    },
    {
      icon: "server",
      title: "Backend & Data",
      items: [".NET Core", "ASP.NET MVC", "C#", "Entity Framework", "RESTful APIs", "MS SQL Server", "Stored Procedures", "WPF"],
    },
    {
      icon: "shield",
      title: "Process & Delivery",
      items: [
        "Agile",
        "Scrum",
        "Kanban",
        "CI/CD",
        "Expo EAS",
        "OTA (over-the-air) updates",
        "Code review",
        "JUnit",
        "Espresso",
        "Performance profiling",
        "Release management",
      ],
    },
    {
      icon: "cpu",
      title: "Embedded & Electronics",
      wide: true,
      items: [
        "PIC16/18",
        "AVR / Atmel",
        "Arduino",
        "Raspberry Pi",
        "Linux",
        "FPGA Spartan-3E",
        "Verilog HDL",
        "Assembly",
        "Siemens PLC S7-300",
        "Ladder Logic",
        "WinCC",
        "GSM / RF / Wi-Fi modules",
        "Sensors & actuators",
        "PCB design",
      ],
    },
    {
      icon: "box",
      title: "Blockchain",
      items: ["ERC20 tokens", "Ethereum", "Crypto wallets", "Exchange apps"],
    },
    {
      icon: "tool",
      title: "Tools",
      wide: true,
      items: [
        "Android Studio",
        "VS Code",
        "Visual Studio",
        "IntelliJ",
        "MATLAB / Simulink",
        "Proteus",
        "MultiSim",
        "Xilinx ISE",
        "Keil",
        "AutoCAD",
        "EAGLE",
        "Photoshop",
        "CorelDRAW",
      ],
    },
  ],

  // Software career (newest first). `roles` with more than one entry show a promotion.
  experience: [
    {
      company: "Martoo",
      companyNative: "مارتو",
      url: "https://play.google.com/store/apps/details?id=com.martoo.grocery",
      location: "Dubai, UAE",
      roles: [
        {
          title: "Lead Mobile Engineer",
          start: "Sep 2023",
          end: "Present",
          bullets: [
            "Lead native Android development for Martoo, a grocery shopping app, and its B2B companion app, Martoo Wholesale.",
            "Delivered new features across both apps, including ordering, account and loyalty flows.",
            "Improved app stability and crash resilience, and kept both apps current with the latest Android releases and Play requirements.",
            "Responsible for architecture decisions, code reviews and release management for both apps.",
            "Plan and deliver features, fixes and releases following an Agile development process.",
          ],
        },
      ],
      tags: ["Kotlin", "Android", "Architecture", "Code review", "Release management", "Agile"],
    },
    {
      company: "3S Solutions (Pvt) Ltd",
      location: "Lahore, Pakistan",
      roles: [
        {
          title: "Senior Software Engineer",
          start: "Apr 2023",
          end: "Nov 2026",
          bullets: [
            "Owned end-to-end architecture, implementation, code review, testing and release for native and cross-platform apps built with Kotlin, React Native and Ionic.",
            "Drove performance and stability work through systematic profiling, reducing startup time, memory usage and crash rates.",
            "Integrated BLE/hardware features and established CI/CD pipelines and engineering standards that increased release velocity and code quality.",
            "Worked directly with product and design teams to shape UX decisions and improve user engagement.",
            "Delivered in Agile teams using Scrum (sprint planning, daily stand-ups, reviews and retrospectives) and Kanban for continuous flow of features and fixes.",
          ],
        },
        {
          title: "Mobile Application Developer",
          start: "Feb 2021",
          end: "Apr 2023",
          bullets: [
            "Developed and maintained Android apps in Kotlin and Java with a focus on usability, performance and long-term maintainability.",
            "Implemented MVVM architecture with unit and UI test coverage (JUnit, Espresso), reducing regressions.",
            "Partnered with designers and product owners to turn requirements into performant mobile features.",
          ],
        },
      ],
      tags: ["Kotlin", "Java", "React Native", "Ionic", "BLE", "CI/CD", "JUnit", "Espresso", "Agile", "Scrum", "Kanban"],
    },
    {
      company: "Graffitecs",
      location: "Lahore, Pakistan",
      roles: [
        {
          title: "Full-Stack .NET & Mobile Developer",
          start: "Aug 2020",
          end: "Feb 2021",
          bullets: [
            "Built Android features and .NET Core back-end services, implementing RESTful APIs for the mobile apps.",
            "Created the SQL Server database with Entity Framework Core's code-first approach, defining the schema in C# models and evolving it through migrations.",
            "Integrated back-end services with mobile clients and resolved production issues to improve reliability.",
            "Worked across Android, C#, .NET Core and SQL Server to deliver end-to-end features faster.",
          ],
        },
      ],
      tags: ["Android", "C#", ".NET Core", "Entity Framework Core", "Code First", "REST APIs", "SQL Server"],
    },
    {
      company: "CoinBitSolutions",
      location: "Lahore, Pakistan",
      roles: [
        {
          title: "Associate Full-Stack .NET & Mobile Developer",
          start: "Jun 2018",
          end: "Jul 2020",
          bullets: [
            "Developed Android apps and ASP.NET MVC back ends with RESTful APIs and database layers.",
            "Built cross-platform mobile apps with Flutter and Dart, connecting them to the same REST back ends.",
            "Worked with the back-end team to optimize SQL queries and improve data consistency across mobile features.",
            "Took part in testing, debugging and release activities for stable production deployments.",
          ],
        },
      ],
      tags: ["Android", "Java", "Flutter", "Dart", "ASP.NET MVC", "C#", "SQL Server"],
    },
    {
      company: "Inovedia Technologies",
      location: "Lahore, Pakistan",
      roles: [
        {
          title: "Junior Software Engineer (Internship)",
          start: "Jun 2018",
          end: "Aug 2018",
          bullets: [
            "Android app development: feature implementation and debugging.",
            "Assisted with ERC20 Ethereum token development.",
          ],
        },
      ],
      tags: ["Android", "Ethereum", "ERC20"],
    },
  ],

  // Shown in a collapsible "Earlier engineering career" block.
  earlierExperience: [
    {
      company: "Printo Scan (Pvt) Ltd",
      location: "Lahore, Pakistan",
      roles: [
        {
          title: "Electronics Engineer",
          start: "Dec 2016",
          end: "Feb 2018",
          bullets: [
            "Maintained and diagnosed CTP UV semi-automatic plate-setters and Katana 5055 exposure machines.",
            "Operated and handled CTP machines in production.",
          ],
        },
      ],
      tags: ["Industrial electronics", "Diagnostics"],
    },
    {
      company: "Bilal Switchgear Engineering",
      location: "Lahore, Pakistan",
      roles: [
        {
          title: "Electrical Engineer",
          start: "May 2014",
          end: "Feb 2016",
          bullets: [
            "Designed industrial LT and MV electrical panels: automatic changeover, integrated power system, PFI and MCC panels, power & lighting DBs, and WAPDA-approved and private industrial MV panels.",
            "Worked on R&D for new panel designs and improvements to existing products.",
            "Configured modules, PFI relays, protection relays and energy analyzers.",
            "Carried out electrical testing, final inspection and troubleshooting of finished panels, and prepared test reports.",
          ],
        },
      ],
      tags: ["Panel design", "R&D", "LT / MV switchgear", "Protection relays", "Testing & inspection"],
    },
  ],

  // Project filter chips. `id` must match a project's `category`.
  projectFilters: [
    { id: "all", label: "All" },
    { id: "android", label: "Native Android" },
    { id: "cross", label: "Cross-platform" },
    { id: "web", label: "Web & Backend" },
    { id: "blockchain", label: "Blockchain" },
  ],

  projects: [
    {
      name: "Martoo",
      category: "android",
      client: "Martoo · Dubai",
      summary:
        "Online grocery delivery app with a companion B2B wholesale app, offering easy ordering, wholesale pricing, loyalty and secure online payments.",
      tags: ["Kotlin", "Android", "B2C + B2B"],
      links: { play: "https://play.google.com/store/apps/details?id=com.martoo.grocery" },
      featured: true,
      details: {
        overview:
          "Martoo delivers groceries to households and offers competitive B2B wholesale prices through a companion app, Martoo Wholesale.",
        role: "Lead Mobile Engineer: native Android development, architecture decisions, code reviews and release management for both apps.",
        features: ["Grocery ordering", "Account management", "Loyalty flows", "Secure online payments", "B2B wholesale ordering"],
        results: [
          "Improved app stability and crash resilience across both apps.",
          "Kept both apps current with the latest Android releases and platform requirements.",
        ],
        // screenshots: ["assets/img/projects/martoo-1.png"],
      },
    },
    {
      name: "Venue Nest",
      category: "cross",
      client: "Venue Nest LLC",
      summary:
        "Led a team of 4 developers to build a private mobile community for wedding and event venue owners: discussion feed, photo posts, reactions, comments and official updates.",
      tags: ["React Native", "iOS & Android", "Redux Toolkit", "Firebase", "WebSockets", "Google Calendar", "Team lead"],
      links: {
        play: "https://play.google.com/store/apps/details?id=com.venuenest.rn",
        appStore: "https://apps.apple.com/us/app/venue-nest/id6773105250",
      },
      featured: true,
      details: {
        overview:
          "Venue Nest is a private mobile community for wedding and event venue owners. Owners connect with peers, join discussions on sales, operations, marketing and more, and get official updates, without the noise of public social media.",
        role:
          "Mobile Team Lead for a team of 4 developers. I set up the React Native app foundation, built the most complex features myself, and owned code quality, planning and releases from kickoff to store launch.",
        responsibilities: [
          "Led a team of 4 developers: planned, assigned and tracked tasks",
          "Built the most complex features in the app",
          "Reviewed code and pull requests to keep quality and standards consistent",
          "Wrote documentation: module details, use cases and edge cases",
          "Managed full releases to Google Play and the App Store",
          "Ran client demos at each milestone",
        ],
        architecture: [
          "Clean, scalable React Native project structure as the team's baseline",
          "Redux Toolkit for predictable state management",
          "Custom hooks for shared logic and data fetching",
          "API layer with interceptors for auth tokens and centralized error handling",
          "Secure storage for tokens and sensitive data",
          "Firebase: Remote Config, Analytics, Crashlytics and push notifications",
          "TypeScript with ESLint and Prettier for consistent, type-safe code",
          "React Navigation structure shared across all modules",
          "Separate environment configs for development, staging and production",
          "Reusable, themed UI components",
        ],
        built: [
          "Calendar feature: venue owners see all their bookings in the app, synced automatically from their Google Calendar",
          "Google Calendar connection with the required permissions, so each owner links their own Google account",
          "End-to-end booking flow: customers submit a form with venue, date and time, our backend registers the event on the owner's Google Calendar, and it appears in the app",
          "WebSocket integration for real-time messaging and other important live events",
        ],
        features: [
          "Booking calendar synced from the venue owner's Google Calendar",
          "Real-time messaging and live updates",
          "Community feed and discussions on sales, operations, marketing, finances and more",
          "Search posts and sort by recent or relevant",
          "Reactions, comments and saved posts",
          "Create posts with photos and respond to prompts",
          "Official updates from the Venue Nest team",
        ],
      },
    },
    {
      name: "Essential Emotions+",
      category: "cross",
      client: "Essential Emotions",
      summary:
        "Led this guide to emotions and doTERRA essential oils from Ionic to a from-scratch React Native rewrite, including custom auto-renewing subscriptions built with native modules.",
      tags: ["React Native", "Ionic & Angular", "Capacitor", "Native modules", "In-app subscriptions"],
      links: {
        play: "https://play.google.com/store/apps/details?id=com.essentialemotion.guru",
        appStore: "https://apps.apple.com/us/app/essential-emotions/id6497874332",
      },
      featured: true,
      details: {
        overview:
          "Essential Emotions+ is an on-the-go guide to emotions and doTERRA essential oils. Users look up 500+ emotions, 100+ oils or 250+ body parts and systems, then get guided through oil selection, application and emotional processing.",
        role:
          "Led the app through two generations. My team and I first built and maintained it in Ionic with Angular and Capacitor for several months. I then led a full rewrite in React Native from scratch, set up its clean baseline structure and worked on the complex modules.",
        responsibilities: [
          "Led the team on the original Ionic app built with Angular and Capacitor plugins",
          "Led the migration from Ionic to React Native, rewriting the app from scratch",
          "Set up a clean, scalable React Native baseline structure for the rewrite",
          "Worked on the most complex modules",
          "Built the in-app subscription flow with the team, down to the native layer",
        ],
        challenges: [
          "Auto-renewing subscriptions (monthly and yearly) needed custom behaviour for special use cases that off-the-shelf libraries couldn't cover",
          "Implemented the subscription flow in native code and exposed it to React Native through a native bridge, handling purchase, renewal, restore and expiry cases",
        ],
        features: [
          "Look up 500+ emotions, 100+ essential oils and 250+ body parts and systems",
          "Recommended oils with processing support: declarations and visualizations",
          "Guided oil selection, application and emotional processing",
          "Monthly and yearly auto-renewing subscriptions",
        ],
      },
    },
    {
      name: "Secure Client Portals",
      category: "android",
      client: "Dillner's Accounting Tools",
      summary:
        "On-the-go access to an accounting firm's Virtual Office: uploaded documents, files and other portal features, anytime.",
      tags: ["Android", "Document access", "Security"],
      links: { play: "https://play.google.com/store/apps/details?id=com.dillner.vomobile" },
      featured: true,
    },
    {
      name: "Mr. Rebounder",
      category: "cross",
      client: "Cellercise · Cellular Health Innovations",
      summary:
        "Virtual trainer app for rebounder workouts: choose pre-made routines or build your own and exercise on your schedule.",
      tags: ["React Native", "iOS & Android", "Fitness"],
      links: {
        play: "https://play.google.com/store/apps/details?id=com.cellercise.rebounder",
        appStore: "https://apps.apple.com/us/app/mr-rebounder/id1300713793",
      },
      featured: true,
    },
    {
      name: "Genetic Basketball (GB)",
      category: "cross",
      engagement: "Freelance",
      summary:
        "Flutter basketball app for iOS and Android that connects players with community centers for games, 8v8 tournaments and live chat.",
      tags: ["Flutter", "iOS & Android", "Firebase", "AWS Amplify", "RevenueCat"],
      links: {},
      details: {
        overview: "GB is a Flutter basketball app for iOS and Android, connecting players with community centers.",
        role: "Mobile Lead: led development, code reviews and the complex modules, and handled App Store and Google Play submissions.",
        features: [
          "Match scheduling: players register for games at community centers",
          "Tournament management: 8v8 matches with rankings and stats",
          "Multi-role access for players, managers and admins",
          "Live chat and updates: real-time messaging with WebSockets and Firebase",
          "In-app purchases: RevenueCat with restore flows",
          "Cloud backend: AWS Amplify, S3 and Firebase",
        ],
      },
    },
    {
      name: "Hue Spectra",
      category: "cross",
      engagement: "Freelance",
      summary:
        "AI-powered accessibility app for colorblind users: real-time color detection, food doneness analysis and object recognition.",
      tags: ["Flutter", "iOS & Android", "OpenAI", "Computer vision", "Machine learning", "RevenueCat"],
      links: {},
      details: {
        overview:
          "An AI-powered accessibility app for colorblind users, built with machine learning, computer vision and OpenAI for real-time color detection and object analysis.",
        features: [
          "Real-time color detection: instantly identifies colors in RGB and HEX",
          "Smart food analysis: detects raw, cooked or overcooked food from color and texture",
          "Object recognition: computer vision analyzes objects and their colors",
          "In-app subscriptions: RevenueCat integration with purchase and restore flows",
        ],
      },
    },
    {
      name: "SAMS Online - Sales Automation",
      category: "android",
      client: "Fast Services",
      summary:
        "Sales and distribution app that tracks orders, inventory and payments in real time across distributors, dealers and retailers.",
      tags: ["Android", "Supply chain", "Real-time stock"],
      links: { play: "https://play.google.com/store/apps/details?id=com.fastservices.sams" },
      featured: true,
    },
    {
      name: "CORN POS TableTap",
      category: "android",
      client: "Fast Services",
      summary:
        "Order-taking app for waiters at dine-in and take-away counters, powered by the CORN POS restaurant management system.",
      tags: ["Android", "POS", "Restaurants"],
      links: { play: "https://play.google.com/store/apps/details?id=com.corn.cornpos" },
      featured: true,
    },
    {
      name: "CORN Rider",
      category: "cross",
      client: "Fast Services",
      summary:
        "Delivery rider app integrated with CORN POS: Google Maps navigation and time tracking from order and preparation through pickup and delivery.",
      tags: ["React Native", "Google Maps", "Delivery"],
      links: { play: "https://play.google.com/store/apps/details?id=com.fs.rider.cornpos" },
      featured: true,
    },
    {
      name: "Savor",
      category: "android",
      client: "Budget Bites LLC",
      summary:
        "Connects restaurants with people to sell surplus food at a discount, cutting food waste and saving customers money.",
      tags: ["Android", "Marketplace", "Sustainability"],
      links: { play: "https://play.google.com/store/apps/details?id=com.budgetbites" },
      featured: true,
    },
    {
      name: "GLF. CONNECT (GLF Locker)",
      category: "android",
      client: "Orbis Golf",
      summary:
        "Companion app for an end-to-end golf coaching platform, connecting coaches and academies with their students.",
      tags: ["Android", "Coaching", "Sports"],
      links: { play: "https://play.google.com/store/apps/details?id=com.orbis.glflocker" },
      featured: true,
    },
    {
      name: "Sibme",
      category: "android",
      client: "Sibme",
      summary:
        "Coaching and collaboration platform for educators, built around video and audio reflection, feedback and an AI copilot.",
      tags: ["Android", "EdTech", "Video"],
      links: { play: "https://play.google.com/store/apps/details?id=com.sibme.mobileapp" },
      featured: true,
    },
    {
      name: "CritMe",
      category: "cross",
      summary: "Cross-platform mobile app built with Flutter.", // TODO: details
      tags: ["Flutter", "Dart"],
      links: {},
    },
    {
      name: "RAK External Trip",
      category: "android",
      summary: "Mobile app for planning and managing external trips.", // TODO: details
      tags: ["Android"],
      links: {},
    },
    {
      name: "Admin Chiesi",
      category: "android",
      summary: "Administration app built for Chiesi.", // TODO: details
      tags: ["Android"],
      links: {},
    },
    {
      name: "Taxi App (Driver & Passenger)",
      category: "android",
      summary: "Ride-hailing solution with separate Android apps for drivers and passengers.", // TODO: details
      tags: ["Android", "Maps", "Real-time"],
      links: {},
    },
    {
      name: "HR Management System",
      category: "web",
      summary: ".NET back end for an HR management system: REST APIs and a SQL Server data layer.", // TODO: details
      tags: [".NET", "C#", "SQL Server", "REST APIs"],
      links: {},
    },
    {
      name: "Novo Markets Crypto Exchange",
      category: "blockchain",
      summary: "Web platform for a cryptocurrency exchange.", // TODO: details
      tags: ["Web", "Crypto exchange"],
      links: {},
    },
    {
      name: "E-Wallet (MetaMask-style)",
      category: "blockchain",
      summary: "Ethereum wallet app modelled on MetaMask.", // TODO: details
      tags: ["Android", "Ethereum", "Wallet"],
      links: {},
    },
    {
      name: "Coin Exchange & Wallet",
      category: "blockchain",
      summary: "Android app combining a crypto exchange with a multi-coin wallet.", // TODO: details
      tags: ["Android", "Crypto", "Wallet"],
      links: {},
    },
    {
      name: "Desktop Crypto Wallet (Exodus-style)",
      category: "blockchain",
      summary: "Windows desktop crypto wallet modelled on Exodus, built with WPF and C#.", // TODO: details
      tags: ["WPF", "C#", "Crypto"],
      links: {},
    },
  ],

  // Engineering & academic project archive (table).
  archiveFilters: [
    { id: "all", label: "All" },
    { id: "embedded", label: "Embedded" },
    { id: "plc", label: "PLC & Automation" },
    { id: "hdl", label: "FPGA & HDL" },
    { id: "power", label: "Analog & Power" },
    { id: "software", label: "Software" },
  ],

  archive: [
    { name: "Controlled Shed Using Automatic Wireless Updates", category: "embedded", tech: "Microcontroller, GSM", note: "Final year project" },
    { name: "RF-Based Shock Sensing System", category: "embedded", tech: "RF module", note: "Fiverr" },
    { name: "Multiple Square Waves with Custom Phase Shift", category: "embedded", tech: "Microcontroller", note: "Fiverr" },
    { name: "Speed & Distance Calculator via GPS", category: "embedded", tech: "AVR, GPS", note: "Fiverr" },
    { name: "Battery Internal Resistance Meter", category: "embedded", tech: "AVR", note: "Fiverr" },
    { name: "Watt Meter with Data Logging", category: "embedded", tech: "AVR", note: "Fiverr" },
    { name: "Vending Machine", category: "embedded", tech: "Arduino" },
    { name: "Obstacle-Avoiding Robot", category: "embedded", tech: "Arduino" },
    { name: "PC-Controlled Outputs over USB", category: "embedded", tech: "PIC, USB" },
    { name: "RF-Supported GSM Monitoring System", category: "embedded", tech: "GSM, RF module" },
    { name: "Home Automation with PC & GSM", category: "embedded", tech: "GSM module" },
    { name: "Automatic Bidirectional Visitor Counter", category: "embedded", tech: "Microcontroller, sensors" },
    { name: "Auto Mains Failure (AMF) Panel Logic", category: "plc", tech: "Siemens PLC S7-300" },
    { name: "4-Way Traffic Light Controller", category: "plc", tech: "Siemens PLC S7-300" },
    { name: "Arithmetic Logic Unit (ALU)", category: "hdl", tech: "Verilog HDL" },
    { name: "Multi-Channel PWM Generator", category: "hdl", tech: "Verilog HDL" },
    { name: "Single-Phase Protection (Sag, Swell & Over-current)", category: "power", tech: "Protection circuitry", note: "Client FYP" },
    { name: "Tap Changing with SCR", category: "power", tech: "MATLAB / Simulink" },
    { name: "DC to AC Push-Pull Inverter", category: "power", tech: "Power electronics" },
    { name: "Audio Amplifier with Op-Amp", category: "power", tech: "Analog electronics" },
    { name: "Electronic Water Level Indicator", category: "power", tech: "Analog electronics" },
    { name: "File Compression with Huffman Coding", category: "software", tech: "Algorithms" },
    { name: "Tic-Tac-Toe Game", category: "software", tech: "C++" },
  ],

  education: [
    {
      degree: "Engineering Degree - Electrical, Electronics & Communications",
      school: "The University of Lahore",
      period: "2010 - 2014",
      note: "Final year project: Controlled Shed Using Automatic Wireless Updates - automated temperature, feeding and drinking control with GSM alerts for critical conditions.",
    },
    {
      degree: "Diploma - Computer Hardware Engineering",
      school: "Punjab Board of Technical Education, Lahore",
    },
    {
      degree: "HSSC & SSC - Science",
      school: "Board of Intermediate & Secondary Education, Lahore",
    },
  ],

  // Certifications & technical courses (newest first). `link` is optional.
  certifications: [
    {
      name: "Flutter & Dart: The Complete Guide",
      issuer: "Udemy",
      date: "Mar 2021",
      description: "Building iOS and Android apps with Flutter and Dart: widgets, state management, HTTP and device features.",
      link: "", // TODO: paste the Udemy certificate URL
    },
    {
      name: "Certified Android Application Development",
      issuer: "EVS Training Institute",
      date: "Feb 2018 - Jun 2018",
      description:
        "Hands-on training in Android app development using Java, Android SDK, Android Studio and Firebase, covering UI development, data storage, REST APIs, device features and Google Play Store publishing.",
    },
    {
      name: "PLC, HMI & SCADA Professional Training",
      issuer: "Electrical Engineering Solution International (EESINT)",
      date: "Aug 2015",
      description: "Professional training in PLC programming, HMI design and SCADA systems for industrial automation.",
    },
    {
      name: "Computer Graphic Designing",
      issuer: "Edge Systems International College",
      date: "Oct 2007",
      description:
        "Covered graphic design fundamentals and advanced 3D graphic design, with hands-on practice building a design portfolio.",
    },
  ],
};
