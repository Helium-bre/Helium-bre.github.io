/**
 * Site content
 * =============
 * This is the ONLY file you need to edit to update the website's content.
 * It is plain data - no HTML required. The renderer (assets/js/render.js)
 * turns each entry below into the matching section on the page.
 *
 * Tips:
 *   - To add an item to any list, copy an existing entry and edit it.
 *   - Leave a field as an empty string "" or an empty list [] to hide it.
 *   - Dates are free-form text ("2021", "Jan 2024", "Present") so you can
 *     format them however you like.
 */
window.PORTFOLIO = {
  /* ---------------------------------------------------------------- */
  /* Basic info, shown in the header, hero and contact sections.      */
  /* ---------------------------------------------------------------- */
  profile: {
    name: "Hugo HE",
    // Short professional title shown under Hugo He.
    title: "Computer Eng. @ McGill - Research Assistant @ MRL",
    // One-line tagline for the hero section.
    tagline: "Your average tech fan. Make sure to check out my research and projects!",
    // A few sentences about you. Each string is its own paragraph.
    about: [
      "Currently in my last year of Bachelor's at McGill University. ",
      "My current focus is into robotics, more specifically teleoperation systems and representation learning",
    ],
    location: "Montreal, Canada",
    email: "hehugo1024@gmail.com",
    // Path to your photo. Put the file in assets/images/profile/.
    // Leave as "" to show your initials instead.
    avatar: "",
    // Optional resume/CV. Put the file in assets/files/ and point to it.
    // Leave as "" to hide the button.
    resumeUrl: "",
    // Links shown in the header footer and contact section.
    // "icon" must match a key in assets/js/icons.js (github, linkedin,
    // scholar, orcid, email, link, twitter).
    socials: [
      { label: "GitHub", url: "https://github.com/Helium-bre", icon: "github" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/hugo-he1024/", icon: "linkedin" },
      // { label: "Google Scholar", url: "", icon: "scholar" },
      // { label: "ORCID", url: "", icon: "orcid" },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Career / work experience. Most recent first.                      */
  /* ---------------------------------------------------------------- */
  experience: [
    {
      role: "Software Developper Intern",
      organization: "OneSpan Inc.",
      location: "Montreal, Canada",
      start: "05/2026",
      end: "08/2026",
      summary: "Backend Developper in the Digital Agreement branch",
      highlights: [
        "Part of the major team responsible for implementing the single sign-on service of the OneSpan Sign software, used by the US government and major Canadian banks.",
        "Implemented features such as database retention scripts using CRON jobs, database encryption using Amazon KMS and automatic email sending using Amazon SES.",
        "Assisted on the deployment of the service on production environments. "
        // "Another responsibility or achievement.",
      ],
      tags: ["SpringBoot", "Kubernetes", "AWS"],
    },
    {
      role: "Research Assistant",
      organization: "McGill Mobile Robotics Lab",
      location: "Montreal, Canada",
      start: "09/2025",
      end: "Present",
      summary: "",
      highlights: [
        "Robot Learning, Real-time teleoperation, Deployment on real robots, ...",
        "More in the Research section",
      ],
      tags: ["Robotics", "ROS2", "Simulation"],
    },
    {
      role: "AI Research Intern",
      organization: "Huawei Technologies Co., Ltd.",
      location: "Paris, France",
      start: "05/2025",
      end: "08/2025",
      summary: "Research in the AI4NET team, focused on anomaly detection",
      highlights: ["Built an unsupervisedd anomaly classifier pipeline using statistical machine learning",
                   "Used GMM and other distribution fitting techniques with hypothesis testing for correctly learning the representation of anomalies",
                   "Beat 6 out of 7 state-of-the-art anomaly thresholders in public and private benchmarks."

      ],
      tags: ["scikit-learn", "pandas"],
    },
  ],

  /* ---------------------------------------------------------------- */
  /* Education. Most recent first.                                     */
  /* ---------------------------------------------------------------- */
  education: [
    {
      degree: "\ B.Eng. in Computer Engineering",
      institution: "McGill University",
      location: "Montreal, Canada",
      start: "2023",
      end: "2027",
      summary: "Minor in Biomedical Engineering",
      highlights: ["Relevant Courses: Applied Robotics, Computer Vision, Operating Systems, Biomedical Instrumentation",
                   "Extracuricular Activities: Robotics Club, McGill Biomechanics, McGill Mentorship Program"
      ],
    },
  ],

  /* ---------------------------------------------------------------- */
  /* Achievements: awards, honors, certifications, publications, etc.  */
  /* ---------------------------------------------------------------- */
  achievements: [
    {
      title: "RoboHacks Winner",
      issuer: "McGill Robotics",
      date: "2025",
      description: "Winner of the Technical Challenge of the Robohacks 2025 hackathon.",
    },
    {
      title: "MAIS Hacks Bronze Prize",
      issuer: "McGill AI Society",
      date: "2025",
      description: "Third Place at the McGill AI Society Hackaton 2025",
      // Optional link, shown as a button on the card.
      // link: { label: "View", url: "" },
    },
  ],

  /* ---------------------------------------------------------------- */
  /* Research. Populates the dedicated research.html page.             */
  /* It describes your time in a lab and the different projects you    */
  /* worked on, each with its own images and/or videos.                */
  /* ---------------------------------------------------------------- */
  research: {
    // Lab / group and the period you were there (shown under the title).
    lab: "MRL, McGill University",
    period: "2025 - Present",
    // Intro paragraphs at the top of the page. Each string is a paragraph.
    intro: [
      "Focused on teleoperation and datacollection systems, and AI training pipelines. ",
      "Most of my work supported other researchers across the projects below.",
    ],
    // One entry per project. They render top to bottom on the page.
    projects: [
      {
        // "slug" gives the section a stable #anchor (research.html#project-one).
        // Omit it to auto-generate one from the title.
        slug: "DexSuite",
        title: "DexSuite",
        role: "Research Assistant - supporting A. El Houssaini (Msc.) ",
        period: "2025 - 2026",
        // One-line summary, shown emphasized at the top of the project.
        summary: "Robotics Simulator and Benchmark for Dexterous Manipulation",
        // Longer write-up. Each string is its own paragraph.
        body: [
          "A simulator based on the Genesis physics engine, that has 30+ environments, 12+ manipulators and 10+ end-effectors. Cross embodiement is supported accross manipulators and grippers, giving thousands of configurations",
          "Solves the issue related to the lack of support for dexterous configurations in simulation, by providing realistic physics and support for parallel environments for RL training, and a dataset of 500+ trajectory across several configurations and environments.",
          "Second contributor among 10+ authors, involving people from Kinova and Google Deepmind. Submitted to the RA-L journal."
        ],
        tags: ["Simulation", "HTC Vive", "Genesis AI", "robomimic"],
        // Images and videos shown in a gallery under the text.
        // type is one of:
        //   "image" - a picture in assets/images/projects/
        //   "video" - a video file you host in assets/videos/
        //   "embed" - a YouTube/Vimeo *embed* URL (…/embed/VIDEO_ID)
        // media: [
        //   {
        //     type: "image",
        //     src: "assets/images/projects/example.jpg",
        //     caption: "Caption describing the figure.",
        //   },
        //   {
        //     type: "video",
        //     src: "assets/videos/demo.mp4",
        //     poster: "", // optional still shown before playback
        //     caption: "A short demo video.",
        //   },
        //   {
        //     type: "embed",
        //     src: "https://www.youtube.com/embed/VIDEO_ID",
        //     caption: "An embedded video.",
        //   },
        // ],
        // Optional related links (paper, code, dataset...).
        links: [
          { label: "Paper", url: "" },
          { label: "Code", url: "" },
        ],
      },
      {
        slug: "Teleop",
        title: "Real-World Teleoperation of a Franka+LEAP hand setup",
        role: "Main Developper",
        period: "2026",
        summary: "Real-Time and Real-World teleoperation of a Franka Arm + LEAP Hand",
        body: ["Built the entire pipeline to have a real-time control system with 1-to-1 mapping from the operator to the robot.",
               "Hardware: HTC Vive Tracker for the 6DOF position of the hand, Manus Glove for the joint angles of the hand",
               "Software: OpenVR to capture hand position, GeoRetargeting from Facebook Research to map hand kinematics to the LEAP kinematics, Polymetis to send the information to the Franka arm. "
        ],
        tags: ["Franka","Teleoperation","ROS2"],
        // media: [
        //   {
        //     type: "image",
        //     src: "assets/images/projects/example2.jpg",
        //     caption: "",
        //   },
        // ],
        links: [],
      },
      {
        slug: "World Model",
        title: "Robotics World Model with Tactile feedback",
        role: "Research Assistant",
        period: "2026",
        summary: "A World Model similar to Interactive World Simulator, but with tactile feedback",
        body: ["Model that has  tactile feedback for better world comprehension, and that will be tested in simulation and real world experiments.",
               "Assisted on the integration of the FlexiTac tactile sensors on the real-world setup",
               "Main Developper of the two simulation environments and their automatic datacollection scripts."
        ],
        tags: ["World Model","Tactile"],
        // media: [
        //   {
        //     type: "image",
        //     src: "assets/images/projects/example2.jpg",
        //     caption: "",
        //   },
        // ],
        links: [],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Projects. Populates the dedicated projects.html page.            */
  /* A showcase of things you have built, each with its own images    */
  /* and/or videos. Structured like the research page above.          */
  /* ---------------------------------------------------------------- */
  projects: {
    // Intro paragraphs at the top of the page. Each string is a paragraph.
    intro: [
      "A selection of projects that I am proud of.",
    ],
    // One entry per project. They render top to bottom on the page.
    items: [
            {
        // "slug" gives the section a stable #anchor (projects.html#my-project).
        // Omit it to auto-generate one from the title.
        slug: "franka_control",
        title: "Franka Arm Controller",
        // Optional one-line role/subtitle shown under the title.
        role: "Author",
        // Optional date or date range.
        period: "2026",
        // One-line summary, shown emphasized at the top of the project.
        summary: "A easy to use python library to teleoperate a Franka Arm using HTC VIVE devices",
        // Longer write-up. Each string is its own paragraph.
        body: [
          "Allows real-time 1-to-1 control of a Franka armm using VR controllers, without the need to write any extra code",
          "Uses Facebook's Polymetis library for communication with the Franka arm",
        ],
        tags: ["Polymetis", "HTC VIVE", "Franka"],
        // Images and videos shown in a gallery under the text.
        // type is one of:
        //   "image" - a picture in assets/images/projects/
        //   "video" - a video file you host in assets/videos/
        //   "embed" - a YouTube/Vimeo *embed* URL (…/embed/VIDEO_ID)
        // media: [
        //   {
        //     type: "image",
        //     src: "assets/images/projects/example.jpg",
        //     caption: "Caption describing the screenshot or figure.",
        //   },
        //   {
        //     type: "video",
        //     src: "assets/videos/demo.mp4",
        //     poster: "", // optional still shown before playback
        //     caption: "A short demo video.",
        //   },
        //   {
        //     type: "embed",
        //     src: "https://www.youtube.com/embed/VIDEO_ID",
        //     caption: "An embedded video.",
        //   },
        // ],
        // Optional related links (live demo, code, write-up...).
         links: [
          { label: "GitHub", url: "https://github.com/Helium-bre/franka_control", icon: "github" },
        ],
      },
      {
        // "slug" gives the section a stable #anchor (projects.html#my-project).
        // Omit it to auto-generate one from the title.
        slug: "AInterview",
        title: "AInterview - McHacks 2026",
        // Optional one-line role/subtitle shown under the title.
        role: "Main Developper - Team of 4",
        // Optional date or date range.
        period: "2026",
        // One-line summary, shown emphasized at the top of the project.
        summary: "An AI agent to conduct speech-to-speech mock interviews based on the job offering, with feedback.",
        // Longer write-up. Each string is its own paragraph.
        body: [
          "A fully working app that can conduct a mock interview based on the job position, description and the type of interview that is expected. Also gives feedback and score at the end of the session",
          "Implemented ElevenLabs AI agents with customizable context based on the type of interview, and used Google Gemini to generate feedback and extract a score.",
          "Used FastAPI for the backend, Supabase for the database, and TypeScript for the UI",
        ],
        tags: ["FastAPI", "ElevenLabs", "TypeScript"],
        // Images and videos shown in a gallery under the text.
        // type is one of:
        //   "image" - a picture in assets/images/projects/
        //   "video" - a video file you host in assets/videos/
        //   "embed" - a YouTube/Vimeo *embed* URL (…/embed/VIDEO_ID)
        // media: [
        //   {
        //     type: "image",
        //     src: "assets/images/projects/example.jpg",
        //     caption: "Caption describing the screenshot or figure.",
        //   },
        //   {
        //     type: "video",
        //     src: "assets/videos/demo.mp4",
        //     poster: "", // optional still shown before playback
        //     caption: "A short demo video.",
        //   },
        //   {
        //     type: "embed",
        //     src: "https://www.youtube.com/embed/VIDEO_ID",
        //     caption: "An embedded video.",
        //   },
        // ],
        // Optional related links (live demo, code, write-up...).
         links: [
          { label: "GitHub", url: "https://github.com/Helium-bre/AInterview", icon: "github" },
        ],
      },
      {
        slug: "Signify",
        title: "Signify - MAIS Hacks 2025",
        role: "Machine Learning Developper - Team of 2",
        period: "2025",
        summary: "Sign-to-Speech translator and Facial Recognition for visually impaired patients",
        body: ["A real-time app that can translate sign language into speech. Unlike most Sign-to-Speech pipelines, Signify can take video input and capture motion, meaning that it can translate signs that are based on a motion",
               "The main model is a RNN implemented using Tensorflow, and has been trained using a custom dataset. It classify signs with 70% accuracy in evaluation settings.",
               "The data has been preprocessed by turning RGB video into markpoints using OpenCV and the mediapipe library.",
               "My first time creating an AI in a hackathon. Built everything in 24 hours and got third place."
        ],
        tags: ["TensorFlow", "OpenCV", "HuggingFace"],
        // media: [
        //   {
        //     type: "image",
        //     src: "assets/images/projects/example2.jpg",
        //     caption: "",
        //   },
        // ],
        // Each entry becomes a button under the project. "icon" is optional
        // and must match a key in assets/js/icons.js (github, link, ...);
        // it defaults to the generic link icon.
        links: [
          { label: "GitHub", url: "https://github.com/Oscar-T24/Signify-", icon: "github" },
        ],
      },
    ],
  },
};
