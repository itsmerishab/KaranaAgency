export interface Service {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string; // Lucide icon name
  category: 'Engineering & Simulation' | 'Digital Product' | 'Software & AI' | 'Creative & Marketing';
  offerings: string[];
  process: { phase: string; description: string }[];
  technologies: { name: string; logo: string }[];
  relatedServices: string[];
}

export const services: Service[] = [
  {
    id: 'cad-design',
    slug: 'cad-design',
    name: 'CAD Design',
    category: 'Engineering & Simulation',
    description: 'Precision computer-aided design for complex mechanical systems and industrial components.',
    icon: 'Box',
    offerings: [
      'Parametric 3D Modeling',
      'Detailed Technical Drawings',
      'Assembly Design & Optimization',
      'Design for Manufacturing (DFM)',
      'Legacy Drawing Digitalization'
    ],
    process: [
      { phase: 'Concept', description: 'Requirement analysis and initial sketching.' },
      { phase: 'Modeling', description: 'Detailed 3D parametric development.' },
      { phase: 'Validation', description: 'Clash detection and tolerance analysis.' },
      { phase: 'Finalization', description: 'Production-ready technical documentation.' }
    ],
    technologies: [
      { name: 'SolidWorks', logo: '/logos/solidworks.svg' },
      { name: 'Autodesk Fusion 360', logo: '/logos/fusion360.svg' },
      { name: 'CATIA', logo: '/logos/catia.svg' },
      { name: 'Rhino 3D', logo: '/logos/rhino.svg' }
    ],
    relatedServices: ['mechanical-simulation', '3d-printing', 'hardware-prototyping']
  },
  {
    id: 'mechanical-simulation',
    slug: 'mechanical-simulation',
    name: 'Mechanical Simulation',
    category: 'Engineering & Simulation',
    description: 'Advanced FEA and CFD analysis to predict real-world performance and ensure structural integrity.',
    icon: 'Activity',
    offerings: [
      'Stress Analysis',
      'Thermal Analysis',
      'Fluid Dynamics',
      'Vibration Analysis'
    ],
    process: [
      { phase: 'Meshing', description: 'Creating high-fidelity simulation meshes.' },
      { phase: 'Setup', description: 'Defining boundary conditions and loads.' },
      { phase: 'Solving', description: 'Executing high-performance computation.' },
      { phase: 'Optimization', description: 'Iterative design based on simulation results.' }
    ],
    technologies: [
      { name: 'Ansys', logo: '/logos/ansys.svg' },
      { name: 'Abaqus', logo: '/logos/abaqus.svg' },
      { name: 'OpenFOAM', logo: '/logos/openfoam.svg' },
      { name: 'COMSOL', logo: '/logos/comsol.svg' }
    ],
    relatedServices: ['cad-design', 'robotics']
  },
  {
    id: '3d-printing',
    slug: '3d-printing',
    name: '3D Printing',
    category: 'Engineering & Simulation',
    description: 'High-precision additive manufacturing for rapid prototyping and end-use production.',
    icon: 'Layers',
    offerings: [
      'SLA/DLP High-Res Resin Printing',
      'SLS Industrial Nylon Printing',
      'FDM Prototyping',
      'Metal 3D Printing (DMLS)',
      'Post-processing & Finishing'
    ],
    process: [
      { phase: 'File Prep', description: 'Slicing and support optimization.' },
      { phase: 'Material Selection', description: 'Choosing optimal polymers or metals.' },
      { phase: 'Printing', description: 'Precision additive manufacturing.' },
      { phase: 'Finishing', description: 'Curing, sanding, and coating.' }
    ],
    technologies: [
      { name: 'Formlabs', logo: '/logos/formlabs.svg' },
      { name: 'Stratasys', logo: '/logos/stratasys.svg' },
      { name: 'Carbon3D', logo: '/logos/carbon3d.svg' },
      { name: ' EOS', logo: '/logos/eos.svg' }
    ],
    relatedServices: ['cad-design', 'hardware-prototyping']
  },
  {
    id: 'hardware-prototyping',
    slug: 'hardware-prototyping',
    name: 'Hardware Prototyping',
    category: 'Engineering & Simulation',
    description: 'Turning concepts into tangible hardware through rapid iterative prototyping.',
    icon: 'Cpu',
    offerings: [
      'PCB Design & Fabrication',
      'Enclosure Design',
      'Proof-of-Concept (PoC) Builds',
      'Functional Prototypes',
      'DVT/PVT Cycle Management'
    ],
    process: [
      { phase: 'Architecture', description: 'Defining hardware blocks and interfaces.' },
      { phase: 'Breadboarding', description: 'Rapid circuit validation.' },
      { phase: 'PCB Layout', description: 'Professional multi-layer board design.' },
      { phase: 'Assembly', description: 'Sourcing and soldering components.' }
    ],
    technologies: [
      { name: 'Altium Designer', logo: '/logos/altium.svg' },
      { name: 'KiCad', logo: '/logos/kicad.svg' },
      { name: 'Arduino/ESP32', logo: '/logos/arduino.svg' },
      { name: 'Raspberry Pi', logo: '/logos/rpi.svg' }
    ],
    relatedServices: ['iot-services', 'cad-design', '3d-printing']
  },
  {
    id: 'robotics',
    slug: 'robotics',
    name: 'Robotics',
    category: 'Engineering & Simulation',
    description: 'Developing autonomous systems, robotic arms, and intelligent motion control.',
    icon: 'Bot',
    offerings: [
      'Kinematic Modeling',
      'Control System Design',
      'Autonomous Navigation',
      'Actuator & Sensor Integration',
      'Robot OS (ROS) Implementation'
    ],
    process: [
      { phase: 'Kinematics', description: 'Defining movement space and degrees of freedom.' },
      { phase: 'Control Loop', description: 'Designing PID and advanced control logic.' },
      { phase: 'Sensing', description: 'Integrating LiDAR, IMU, and Computer Vision.' },
      { phase: 'Testing', description: 'Real-world deployment and tuning.' }
    ],
    technologies: [
      { name: 'ROS2', logo: '/logos/ros2.svg' },
      { name: 'Python/C++', logo: '/logos/cpp.svg' },
      { name: 'PyTorch', logo: '/logos/pytorch.svg' },
      { name: 'Gazebo', logo: '/logos/gazebo.svg' }
    ],
    relatedServices: ['mechanical-simulation', 'iot-services', 'ml-model-development']
  },
  {
    id: 'iot-services',
    slug: 'iot-services',
    name: 'IoT Services',
    category: 'Engineering & Simulation',
    description: 'End-to-end connected device ecosystems from sensor to cloud.',
    icon: 'Wifi',
    offerings: [
      'Custom Sensor Integration',
      'Wireless Protocol Optimization (LoRa, Zigbee, BLE)',
      'Cloud Gateway Architecture',
      'Device Management Systems',
      'Edge Computing Implementation'
    ],
    process: [
      { phase: 'Connectivity', description: 'Selecting the right wireless protocol.' },
      { phase: 'Firmware', description: 'Developing low-power embedded code.' },
      { phase: 'Backend', description: 'Building scalable cloud ingestion pipes.' },
      { phase: 'Interface', description: 'Creating user dashboards for device control.' }
    ],
    technologies: [
      { name: 'AWS IoT', logo: '/logos/aws.svg' },
      { name: 'Azure IoT', logo: '/logos/azure.svg' },
      { name: 'MQTT', logo: '/logos/mqtt.svg' },
      { name: 'TensorFlow Lite', logo: '/logos/tflite.svg' }
    ],
    relatedServices: ['hardware-prototyping', 'robotics', 'app-development']
  },
  {
    id: 'product-design',
    slug: 'product-design',
    name: 'Product Design & Development',
    category: 'Digital Product',
    description: 'Creating market-ready products through a blend of industrial design and user research.',
    icon: 'PenTool',
    offerings: [
      'Industrial Design (ID)',
      'User Research & Personas',
      'Concept Ideation',
      'Ergonomic Analysis',
      'Market Fit Strategy'
    ],
    process: [
      { phase: 'Discovery', description: 'Deep dive into user needs and market gaps.' },
      { phase: 'Ideation', description: 'Rapid conceptual sketching and moodboarding.' },
      { phase: 'Prototyping', description: 'Creating low and high-fidelity models.' },
      { phase: 'Refinement', description: 'Iterating based on user feedback.' }
    ],
    technologies: [
      { name: 'Figma', logo: '/logos/figma.svg' },
      { name: 'Adobe XD', logo: '/logos/xd.svg' },
      { name: 'KeyShot', logo: '/logos/keyshot.svg' },
      { name: 'Miro', logo: '/logos/miro.svg' }
    ],
    relatedServices: ['ui-ux-development', 'hardware-prototyping']
  },
  {
    id: 'hardware-projects',
    slug: 'hardware-projects',
    name: 'Hardware Projects',
    category: 'Digital Product',
    description: 'Specialized execution of complex hardware initiatives from concept to assembly.',
    icon: 'Cpu',
    offerings: [
      'Custom Electronic Enclosures',
      'Electromechanical Integration',
      'Component Sourcing Strategy',
      'Assembly Line Design',
      'Certification Prep (CE/FCC)'
    ],
    process: [
      { phase: 'Specs', description: 'Defining strict technical requirements.' },
      { phase: 'Sourcing', description: 'Vetting suppliers for critical components.' },
      { phase: 'Build', description: 'Iterative assembly and testing.' },
      { phase: 'Certification', description: 'Ensuring compliance with global standards.' }
    ],
    technologies: [
      { name: 'Altium', logo: '/logos/altium.svg' },
      { name: 'SolidWorks', logo: '/logos/solidworks.svg' },
      { name: 'JMP', logo: '/logos/jmp.svg' },
      { name: 'MATLAB', logo: '/logos/matlab.svg' }
    ],
    relatedServices: ['cad-design', 'hardware-prototyping', 'iot-services']
  },
  {
    id: 'software-prototyping',
    slug: 'software-prototyping',
    name: 'Software Prototyping',
    category: 'Digital Product',
    description: 'Rapidly validating software concepts through high-fidelity interactive prototypes.',
    icon: 'Code2',
    offerings: [
      'Clickable High-Fi Prototypes',
      'Minimum Viable Product (MVP) Dev',
      'User Flow Mapping',
      'Feature Feasibility Analysis',
      'Technical Specification Docs'
    ],
    process: [
      { phase: 'Mapping', description: 'Defining user journeys and edge cases.' },
      { phase: 'Wireframing', description: 'Structuring the information architecture.' },
      { phase: 'Interactivity', description: 'Adding logic and transitions.' },
      { phase: 'Testing', description: 'Gathering data from early beta users.' }
    ],
    technologies: [
      { name: 'React', logo: '/logos/react.svg' },
      { name: 'Framer', logo: '/logos/framer.svg' },
      { name: 'TypeScript', logo: '/logos/typescript.svg' },
      { name: 'Next.js', logo: '/logos/nextjs.svg' }
    ],
    relatedServices: ['ui-ux-development', 'app-development', 'website-development']
  },
  {
    id: 'ui-ux-development',
    slug: 'ui-ux-development',
    name: 'UI/UX Development',
    category: 'Digital Product',
    description: 'Designing intuitive, high-performance interfaces that bridge the gap between humans and machines.',
    icon: 'Layout',
    offerings: [
      'Interface Design Systems',
      'Interactive User Experiences',
      'Accessibility Audits (WCAG)',
      'Usability Testing',
      'Conversion Rate Optimization (CRO)'
    ],
    process: [
      { phase: 'Audit', description: 'Analyzing existing pain points.' },
      { phase: 'Architecture', description: 'Designing intuitive navigation paths.' },
      { phase: 'Visuals', description: 'Applying brand identity and high-end aesthetics.' },
      { phase: 'Handover', description: 'Providing precise specs for developers.' }
    ],
    technologies: [
      { name: 'Figma', logo: '/logos/figma.svg' },
      { name: 'Semplice', logo: '/logos/semplice.svg' },
      { name: 'Adobe Illustrator', logo: '/logos/illustrator.svg' },
      { name: 'Maze', logo: '/logos/maze.svg' }
    ],
    relatedServices: ['product-design', 'website-development', 'app-development']
  },
  {
    id: 'website-development',
    slug: 'website-development',
    name: 'Website Development',
    category: 'Software & AI',
    description: 'Building cutting-edge, high-performance digital experiences with a focus on speed and interactivity.',
    icon: 'Globe',
    offerings: [
      'Custom Enterprise Websites',
      'WebGL/Three.js Experiences',
      'E-commerce Ecosystems',
      'Headless CMS Integration',
      'Performance Optimization'
    ],
    process: [
      { phase: 'Strategy', description: 'Defining goals and technical stack.' },
      { phase: 'Design', description: 'Creating high-fidelity cosmic layouts.' },
      { phase: 'Dev', description: 'Implementing responsive, fast code.' },
      { phase: 'Launch', description: 'Deployment and SEO optimization.' }
    ],
    technologies: [
      { name: 'React', logo: '/logos/react.svg' },
      { name: 'Three.js', logo: '/logos/threejs.svg' },
      { name: 'Next.js', logo: '/logos/nextjs.svg' },
      { name: 'Tailwind CSS', logo: '/logos/tailwind.svg' }
    ],
    relatedServices: ['ui-ux-development', 'app-development', 'seo']
  },
  {
    id: 'app-development',
    slug: 'app-development',
    name: 'App Development',
    category: 'Software & AI',
    description: 'Developing robust, scalable mobile and desktop applications with a focus on native-feel performance.',
    icon: 'Smartphone',
    offerings: [
      'iOS & Android Development',
      'Cross-platform Apps (React Native)',
      'Custom API Architectures',
      'State Management Systems',
      'Real-time Data Sync'
    ],
    process: [
      { phase: 'Wireframing', description: 'Mapping app screens and transitions.' },
      { phase: 'Backend', description: 'Designing scalable database schemas.' },
      { phase: 'Frontend', description: 'Implementing pixel-perfect UI.' },
      { phase: 'QA', description: 'Rigorous beta testing and bug fixing.' }
    ],
    technologies: [
      { name: 'React Native', logo: '/logos/reactnative.svg' },
      { name: 'Flutter', logo: '/logos/flutter.svg' },
      { name: 'Node.js', logo: '/logos/node.svg' },
      { name: 'PostgreSQL', logo: '/logos/postgres.svg' }
    ],
    relatedServices: ['ui-ux-development', 'website-development', 'iot-services']
  },
  {
    id: 'ml-model-development',
    slug: 'ml-model-development',
    name: 'ML Model Development',
    category: 'Software & AI',
    description: 'Creating intelligent systems that learn from data to solve complex engineering challenges.',
    icon: 'Brain',
    offerings: [
      'Custom Neural Network Architecture',
      'Predictive Maintenance Models',
      'Computer Vision Systems',
      'Natural Language Processing (NLP)',
      'Dataset Curation & Labeling'
    ],
    process: [
      { phase: 'Data Mining', description: 'Collecting and cleaning training sets.' },
      { phase: 'Model Selection', description: 'Choosing the right architecture.' },
      { phase: 'Training', description: 'Iterative training and hyperparameter tuning.' },
      { phase: 'Inference', description: 'Integrating the model into the product.' }
    ],
    technologies: [
      { name: 'PyTorch', logo: '/logos/pytorch.svg' },
      { name: 'TensorFlow', logo: '/logos/tensorflow.svg' },
      { name: 'Scikit-Learn', logo: '/logos/sklearn.svg' },
      { name: 'HuggingFace', logo: '/logos/huggingface.svg' }
    ],
    relatedServices: ['robotics', 'iot-services', 'app-development']
  },
  {
    id: 'animation',
    slug: 'animation',
    name: 'Animation',
    category: 'Creative & Marketing',
    description: 'Creating cinematic visual stories and technical animations that explain complex engineering.',
    icon: 'Play',
    offerings: [
      '3D Technical Visualization',
      'Motion Graphics',
      'CGI Product Commercials',
      'Interactive Web Animations',
      'Explainer Videos'
    ],
    process: [
      { phase: 'Storyboarding', description: 'Visualizing the sequence of events.' },
      { phase: 'Blocking', description: 'Setting up main movements and timing.' },
      { phase: 'Animation', description: 'Detailed motion and keyframing.' },
      { phase: 'Rendering', description: 'Final high-quality cinematic output.' }
    ],
    technologies: [
      { name: 'Blender', logo: '/logos/blender.svg' },
      { name: 'After Effects', logo: '/logos/aftereffects.svg' },
      { name: 'Cinema 4D', logo: '/logos/c4d.svg' },
      { name: 'Unreal Engine', logo: '/logos/unreal.svg' }
    ],
    relatedServices: ['cad-design', 'ui-ux-development']
  },
  {
    id: 'seo',
    slug: 'seo',
    name: 'SEO',
    category: 'Creative & Marketing',
    description: 'Driving organic growth through technical SEO and strategic content engineering.',
    icon: 'TrendingUp',
    offerings: [
      'Technical SEO Audit',
      'Keyword Research & Strategy',
      'Content Optimization',
      'Backlink Architecture',
      'Conversion Path Analysis'
    ],
    process: [
      { phase: 'Analysis', description: 'Auditing current site performance.' },
      { phase: 'Research', description: 'Identifying high-value target keywords.' },
      { phase: 'Execution', description: 'On-page and technical optimizations.' },
      { phase: 'Monitoring', description: 'Tracking rank and traffic growth.' }
    ],
    technologies: [
      { name: 'Ahrefs', logo: '/logos/ahrefs.svg' },
      { name: 'Semrush', logo: '/logos/semrush.svg' },
      { name: 'Google Search Console', logo: '/logos/gsc.svg' },
      { name: 'Screaming Frog', logo: '/logos/screamingfrog.svg' }
    ],
    relatedServices: ['website-development', 'ui-ux-development']
  },
];
