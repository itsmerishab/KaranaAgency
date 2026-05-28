export interface Project {
  id: string;
  slug: string;
  title: string;
  client?: string;
  clientLogo?: string;
  description: string;
  challenge: string;
  solution: string;
  results: string;
  metrics?: { label: string; value: string }[];
  services: string[]; // Project IDs of services used
  technologies: string[];
  images: { url: string; alt: string }[];
  heroImage: string;
  thumbnail: string;
  featured: boolean;
  date: string;
}

export const projects: Project[] = [
  {
    id: 'p1',
    slug: 'quantum-core-simulation',
    title: 'Quantum Core Thermal Simulation',
    client: 'Nova Quantum Systems',
    description: 'A high-fidelity thermal simulation for next-gen quantum processor housing.',
    challenge: 'Managing extreme temperature gradients while maintaining structural stability at near-zero Kelvin.',
    solution: 'Implemented custom CFD models using Ansys to optimize heat sink geometry and cryogenic flow.',
    results: 'Reduced thermal leakage by 22%, enabling 15% longer qubit coherence times.',
    metrics: [
      { label: 'Thermal Efficiency', value: '+22%' },
      { label: 'Cooling Speed', value: '1.4x faster' }
    ],
    services: ['mechanical-simulation', 'cad-design'],
    technologies: ['Ansys', 'SolidWorks', 'Python'],
    images: [
      { url: '/projects/p1-1.jpg', alt: 'Quantum simulation view' },
      { url: '/projects/p1-2.jpg', alt: 'Thermal gradient map' }
    ],
    heroImage: '/projects/p1-hero.jpg',
    thumbnail: '/projects/p1-thumb.jpg',
    featured: true,
    date: '2025-03-12'
  },
  {
    id: 'p2',
    slug: 'aero-wing-prototype',
    title: 'AeroWing Autonomous Drone',
    client: 'SkyNet Logistics',
    description: 'Development of a long-endurance autonomous delivery drone with adaptive wing morphing.',
    challenge: 'Developing a lightweight mechanism that could adjust wing shape in real-time for wind resistance.',
    solution: 'Custom carbon-fiber 3D printed wing structures with integrated servo-actuators and PID control.',
    results: 'Increased flight duration by 30% and reduced power consumption during cruise.',
    metrics: [
      { label: 'Flight Time', value: '+30%' },
      { label: 'Weight Reduction', value: '1.2kg' }
    ],
    services: ['robotics', 'hardware-prototyping', '3d-printing'],
    technologies: ['ROS2', 'Carbon3D', 'C++', 'SolidWorks'],
    images: [
      { url: '/projects/p2-1.jpg', alt: 'Drone prototype' },
      { url: '/projects/p2-2.jpg', alt: 'Wing detail' }
    ],
    heroImage: '/projects/p2-hero.jpg',
    thumbnail: '/projects/p2-thumb.jpg',
    featured: true,
    date: '2025-01-20'
  },
  {
    id: 'p3',
    slug: 'neural-health-app',
    title: 'NeuralHealth AI Diagnostics',
    client: 'MediMind AI',
    description: 'An enterprise-grade health app using ML models to detect early signs of neurological disorders.',
    challenge: 'Processing massive amounts of sensor data from wearable devices with high accuracy and low latency.',
    solution: 'Built a distributed processing pipeline using TensorFlow Lite and a React Native frontend for real-time feedback.',
    results: 'Achieved 94% accuracy in early detection of tremor patterns, 12% better than previous benchmarks.',
    metrics: [
      { label: 'Detection Accuracy', value: '94%' },
      { label: 'Latency', value: '< 100ms' }
    ],
    services: ['ml-model-development', 'app-development', 'ui-ux-development'],
    technologies: ['PyTorch', 'React Native', 'Node.js', 'PostgreSQL'],
    images: [
      { url: '/projects/p3-1.jpg', alt: 'App interface' },
      { url: '/projects/p3-2.jpg', alt: 'ML data flow' }
    ],
    heroImage: '/projects/p3-hero.jpg',
    thumbnail: '/projects/p3-thumb.jpg',
    featured: true,
    date: '2024-11-05'
  },
  {
    id: 'p4',
    slug: 'titan-industrial-iot',
    title: 'Titan Industrial IoT Ecosystem',
    client: 'Global Heavy Ind.',
    description: 'A complete IoT infrastructure for monitoring heavy machinery health in real-time.',
    challenge: 'Connectivity in high-interference industrial environments with thousands of sensors.',
    solution: 'Deployed a LoRaWAN mesh network with edge-computing gateways and an AWS IoT core backend.',
    results: 'Reduced unplanned downtime by 40% through predictive maintenance alerts.',
    metrics: [
      { label: 'Downtime Reduction', value: '40%' },
      { label: 'Sensor Density', value: '10k+ nodes' }
    ],
    services: ['iot-services', 'hardware-prototyping', 'ml-model-development'],
    technologies: ['AWS IoT', 'LoRaWAN', 'C++', 'Python'],
    images: [
      { url: '/projects/p4-1.jpg', alt: 'IoT dashboard' },
      { url: '/projects/p4-2.jpg', alt: 'Industrial sensor' }
    ],
    heroImage: '/projects/p4-hero.jpg',
    thumbnail: '/projects/p4-thumb.jpg',
    featured: true,
    date: '2024-09-15'
  },
  {
    id: 'p5',
    slug: 'lumina-web-experience',
    title: 'Lumina Interactive Brand Site',
    client: 'Lumina Luxury',
    description: 'A high-end WebGL experience showcasing luxury architectural jewelry.',
    challenge: 'Rendering 8K textures and complex jewelry geometry at 60fps on mobile devices.',
    solution: 'Custom shader optimization and instanced rendering using Three.js and React Three Fiber.',
    results: 'Ranked as a Site of the Day on Awwwards; increased engagement time by 300%.',
    metrics: [
      { label: 'Engagement', value: '+300%' },
      { label: 'Performance', value: '60fps' }
    ],
    services: ['website-development', 'ui-ux-development', 'animation'],
    technologies: ['Three.js', 'React', 'GSAP', 'Tailwind CSS'],
    images: [
      { url: '/projects/p5-1.jpg', alt: '3D Jewelry render' },
      { url: '/projects/p5-2.jpg', alt: 'Web interface' }
    ],
    heroImage: '/projects/p5-hero.jpg',
    thumbnail: '/projects/p5-thumb.jpg',
    featured: true,
    date: '2024-07-22'
  },
  {
    id: 'p6',
    slug: 'cobot-assembly-line',
    title: 'Cobot precision Assembly',
    client: 'Precision Auto',
    description: 'Implementing collaborative robots for high-precision automotive electronics assembly.',
    challenge: 'Integrating human-robot collaboration without compromising safety or speed.',
    solution: 'Custom force-feedback sensors and a ROS2-based control system with real-time obstacle avoidance.',
    results: 'Assembly accuracy improved to 0.01mm; throughput increased by 25%.',
    metrics: [
      { label: 'Precision', value: '0.01mm' },
      { label: 'Throughput', value: '+25%' }
    ],
    services: ['robotics', 'mechanical-simulation', 'iot-services'],
    technologies: ['ROS2', 'C++', 'Python', 'Ansys'],
    images: [
      { url: '/projects/p6-1.jpg', alt: 'Robot arm' },
      { url: '/projects/p6-2.jpg', alt: 'Assembly line' }
    ],
    heroImage: '/projects/p6-hero.jpg',
    thumbnail: '/projects/p6-thumb.jpg',
    featured: false,
    date: '2024-05-10'
  },
  {
    id: 'p7',
    slug: 'zenith-smart-home',
    title: 'Zenith Smart Home Core',
    client: 'Zenith Living',
    description: 'Designing a unified smart home hub with local-first processing for privacy.',
    challenge: 'Creating a seamless UX that controls 50+ different device types from various vendors.',
    solution: 'Developed a custom protocol abstraction layer and a high-fidelity UI/UX design system in Figma.',
    results: 'Reduced onboarding time from 15 mins to 2 mins per device.',
    metrics: [
      { label: 'Setup Time', value: '-85%' },
      { label: 'User Rating', value: '4.9/5' }
    ],
    services: ['product-design', 'ui-ux-development', 'app-development'],
    technologies: ['React Native', 'Node.js', 'Figma', 'MongoDB'],
    images: [
      { url: '/projects/p7-1.jpg', alt: 'Home hub' },
      { url: '/projects/p7-2.jpg', alt: 'App UI' }
    ],
    heroImage: '/projects/p7-hero.jpg',
    thumbnail: '/projects/p7-thumb.jpg',
    featured: false,
    date: '2024-03-01'
  },
  {
    id: 'p8',
    slug: 'hyper-flow-cfd',
    title: 'HyperFlow CFD Optimizer',
    client: 'Velocity Aerodynamics',
    description: 'A custom software tool for optimizing airflow around high-speed rail trains.',
    challenge: 'Calculating turbulence in real-time for a wide range of velocity profiles.',
    solution: 'Developed a custom C++ solver with GPU acceleration using CUDA for rapid iteration.',
    results: 'Reduced drag coefficient by 8%, translating to 5% energy savings at high speeds.',
    metrics: [
      { label: 'Drag Reduction', value: '8%' },
      { label: 'Compute Speed', value: '10x faster' }
    ],
    services: ['mechanical-simulation', 'software-prototyping'],
    technologies: ['C++', 'CUDA', 'Python', 'OpenFOAM'],
    images: [
      { url: '/projects/p8-1.jpg', alt: 'Airflow visualization' },
      { url: '/projects/p8-2.jpg', alt: 'Train model' }
    ],
    heroImage: '/projects/p8-hero.jpg',
    thumbnail: '/projects/p8-thumb.jpg',
    featured: false,
    date: '2024-01-15'
  },
  {
    id: 'p9',
    slug: 'meta-vision-vr',
    title: 'MetaVision VR Training',
    client: 'SafeWork Industrial',
    description: 'VR training simulation for hazardous material handling in chemical plants.',
    challenge: 'Simulating complex fluid dynamics and chemical reactions in a real-time VR environment.',
    solution: 'Built using Unreal Engine 5 with custom C++ plugins for physics-based fluid simulation.',
    results: 'Reduced on-site training accidents by 60% during the first year of deployment.',
    metrics: [
      { label: 'Accidents', value: '-60%' },
      { label: 'Training Speed', value: '2x faster' }
    ],
    services: ['animation', 'ml-model-development', 'software-prototyping'],
    technologies: ['Unreal Engine 5', 'C++', 'PyTorch', 'Quest 3'],
    images: [
      { url: '/projects/p9-1.jpg', alt: 'VR view' },
      { url: '/projects/p9-2.jpg', alt: 'Simulation' }
    ],
    heroImage: '/projects/p9-hero.jpg',
    thumbnail: '/projects/p9-thumb.jpg',
    featured: false,
    date: '2023-12-01'
  },
  {
    id: 'p10',
    slug: 'orbit-sat-prototype',
    title: 'OrbitSat CubeSat Chassis',
    client: 'StarLinkage',
    description: 'High-precision chassis design for a 3U CubeSat intended for low-earth orbit.',
    challenge: 'Ensuring structural integrity during launch vibration while minimizing weight.',
    solution: 'Topology optimization using generative design in Fusion 360 and DMLS 3D printing.',
    results: 'Reduced weight by 35% while maintaining a 1.5x safety factor for launch loads.',
    metrics: [
      { label: 'Weight Savings', value: '35%' },
      { label: 'Safety Factor', value: '1.5x' }
    ],
    services: ['cad-design', '3d-printing', 'mechanical-simulation'],
    technologies: ['Fusion 360', 'EOS Metal', 'Ansys'],
    images: [
      { url: '/projects/p10-1.jpg', alt: 'CubeSat model' },
      { url: '/projects/p10-2.jpg', alt: 'Topology optimization' }
    ],
    heroImage: '/projects/p10-hero.jpg',
    thumbnail: '/projects/p10-thumb.jpg',
    featured: false,
    date: '2023-10-10'
  },
  {
    id: 'p11',
    slug: 'nexus-seo-engine',
    title: 'Nexus Organic Growth Engine',
    client: 'SaaS Titan',
    description: 'A comprehensive SEO overhaul for a B2B SaaS platform with 1M+ monthly visitors.',
    challenge: 'Cleaning up a massive legacy codebase with severe indexing issues and content decay.',
    solution: 'Implemented a technical SEO framework, reorganized information architecture, and deployed a data-driven content strategy.',
    results: 'Increased organic traffic by 150% in 6 months and improved conversion by 20%.',
    metrics: [
      { label: 'Organic Traffic', value: '+150%' },
      { label: 'Conversion', value: '+20%' }
    ],
    services: ['seo', 'website-development'],
    technologies: ['Ahrefs', 'Next.js', 'Google Search Console'],
    images: [
      { url: '/projects/p11-1.jpg', alt: 'Traffic chart' },
      { url: '/projects/p11-2.jpg', alt: 'SEO audit' }
    ],
    heroImage: '/projects/p11-hero.jpg',
    thumbnail: '/projects/p11-thumb.jpg',
    featured: false,
    date: '2023-08-15'
  },
  {
    id: 'p12',
    slug: 'synth-voice-ai',
    title: 'SynthVoice Neural Engine',
    client: 'AudioGen',
    description: 'An AI-powered voice synthesis engine for ultra-realistic emotional speech.',
    challenge: 'Eliminating the "robotic" cadence in synthesized speech for long-form narration.',
    solution: 'Trained a custom Transformer-based model on high-quality emotional datasets with a GAN-based refiner.',
    results: 'Achieved a Mean Opinion Score (MOS) of 4.7/5, nearly indistinguishable from humans.',
    metrics: [
      { label: 'MOS Score', value: '4.7/5' },
      { label: 'Inference Speed', value: '12ms' }
    ],
    services: ['ml-model-development', 'software-prototyping'],
    technologies: ['PyTorch', 'HuggingFace', 'C++', 'CUDA'],
    images: [
      { url: '/projects/p12-1.jpg', alt: 'AI Waveform' },
      { url: '/projects/p12-2.jpg', alt: 'Model architecture' }
    ],
    heroImage: '/projects/p12-hero.jpg',
    thumbnail: '/projects/p12-thumb.jpg',
    featured: false,
    date: '2023-06-01'
  },
  {
    id: 'p13',
    slug: 'aura-wearable-design',
    title: 'Aura Bio-Sensing Ring',
    client: 'Aura Wellness',
    description: 'Industrial design and hardware engineering for a discreet health-tracking ring.',
    challenge: 'Integrating multiple high-accuracy sensors into a tiny, water-resistant form factor.',
    solution: 'Custom flexible PCB design and high-precision resin 3D printing for internal structural components.',
    results: 'Successfully reduced ring thickness by 20% while maintaining 24h battery life.',
    metrics: [
      { label: 'Thickness', value: '-20%' },
      { label: 'Battery Life', value: '24h' }
    ],
    services: ['product-design', 'hardware-prototyping', '3d-printing'],
    technologies: ['Altium', 'Formlabs', 'Rhino 3D'],
    images: [
      { url: '/projects/p13-1.jpg', alt: 'Ring design' },
      { url: '/projects/p13-2.jpg', alt: 'PCB layout' }
    ],
    heroImage: '/projects/p13-hero.jpg',
    thumbnail: '/projects/p13-thumb.jpg',
    featured: false,
    date: '2023-04-20'
  },
  {
    id: 'p14',
    slug: 'hydro-flow-valve',
    title: 'HydroFlow Precision Valve',
    client: 'AquaTech Industrial',
    description: 'Developing a high-pressure control valve for deep-sea mining operations.',
    challenge: 'Preventing cavitation and erosion under extreme pressures (up to 500 bar).',
    solution: 'Used Computational Fluid Dynamics (CFD) to optimize the internal flow path and selected a custom super-alloy.',
    results: 'Increased valve lifespan by 300% and reduced flow turbulence by 15%.',
    metrics: [
      { label: 'Lifespan', value: '3x' },
      { label: 'Turbulence', value: '-15%' }
    ],
    services: ['mechanical-simulation', 'cad-design'],
    technologies: ['OpenFOAM', 'CATIA', 'SolidWorks'],
    images: [
      { url: '/projects/p14-1.jpg', alt: 'Valve CFD' },
      { url: '/projects/p14-2.jpg', alt: 'Final product' }
    ],
    heroImage: '/projects/p14-hero.jpg',
    thumbnail: '/projects/p14-thumb.jpg',
    featured: false,
    date: '2023-02-15'
  },
  {
    id: 'p15',
    slug: 'solaris-energy-dashboard',
    title: 'Solaris Energy Grid Viz',
    client: 'Solaris Energy',
    description: 'A real-time visualization dashboard for a regional smart-grid solar network.',
    challenge: 'Visualizing 100k+ active energy nodes without lagging the browser.',
    solution: 'Implemented a custom WebGL rendering pipeline for the map and used WebSocket for real-time data streaming.',
    results: 'Reduced data latency from 2s to 150ms; processed 1M+ events per second.',
    metrics: [
      { label: 'Latency', value: '150ms' },
      { label: 'Data Throughput', value: '1M eps' }
    ],
    services: ['website-development', 'ui-ux-development', 'iot-services'],
    technologies: ['Three.js', 'React', 'WebSocket', 'Go'],
    images: [
      { url: '/projects/p15-1.jpg', alt: 'Energy map' },
      { url: '/projects/p15-2.jpg', alt: 'Data chart' }
    ],
    heroImage: '/projects/p15-hero.jpg',
    thumbnail: '/projects/p15-thumb.jpg',
    featured: false,
    date: '2023-01-10'
  },
  {
    id: 'p16',
    slug: 'exo-skeleton-limb',
    title: 'ExoLimb Rehabilitation',
    client: 'MedTech Robotics',
    description: 'Development of a lightweight robotic exoskeleton for lower-limb rehabilitation.',
    challenge: 'Matching the natural gait of a human while providing variable assistance levels.',
    solution: 'Used EMG sensors for intent detection and implemented a series-elastic actuator system.',
    results: 'Reduced patient rehabilitation time by 30% through personalized assistance profiles.',
    metrics: [
      { label: 'Rehab Time', value: '-30%' },
      { label: 'Weight', value: '4.2kg' }
    ],
    services: ['robotics', 'hardware-prototyping', 'ml-model-development'],
    technologies: ['ROS2', 'C++', 'PyTorch', 'Altium'],
    images: [
      { url: '/projects/p16-1.jpg', alt: 'Exoskeleton' },
      { url: '/projects/p16-2.jpg', alt: 'Patient use' }
    ],
    heroImage: '/projects/p16-hero.jpg',
    thumbnail: '/projects/p16-thumb.jpg',
    featured: false,
    date: '2022-11-20'
  },
  {
    id: 'p17',
    slug: 'vortex-engine-cooling',
    title: 'Vortex Engine Cooling',
    client: 'HyperMach Engines',
    description: 'Advanced cooling system for hypersonic engine prototypes.',
    challenge: 'Dealing with stagnation temperatures over 2000°C during Mach 5 flight.',
    solution: 'Integrated transpiration cooling with 3D printed porous metallic structures.',
    results: 'Maintained core temperature within safe limits during full-scale firing tests.',
    metrics: [
      { label: 'Max Temp', value: '2200°C' },
      { label: 'Cooling Rate', value: '+40%' }
    ],
    services: ['mechanical-simulation', '3d-printing', 'cad-design'],
    technologies: ['Ansys', 'CATIA', 'EOS Metal'],
    images: [
      { url: '/projects/p17-1.jpg', alt: 'Engine render' },
      { url: '/projects/p17-2.jpg', alt: 'Porous structure' }
    ],
    heroImage: '/projects/p17-hero.jpg',
    thumbnail: '/projects/p17-thumb.jpg',
    featured: false,
    date: '2022-09-05'
  },
  {
    id: 'p18',
    slug: 'cryptos-secure-wallet',
    title: 'CryptoS Cold Storage Wallet',
    client: 'SecurChain',
    description: 'Hardware security module for institutional cryptocurrency storage.',
    challenge: 'Achieving EAL6+ security certification while maintaining a user-friendly interface.',
    solution: 'Custom secure-element integration and a strictly audited Rust-based firmware.',
    results: 'Passed all third-party security audits with zero critical vulnerabilities found.',
    metrics: [
      { label: 'Security Level', value: 'EAL6+' },
      { label: 'Audit Result', value: 'Zero Critical' }
    ],
    services: ['hardware-prototyping', 'software-prototyping', 'ui-ux-development'],
    technologies: ['Rust', 'C', 'Figma', 'Altium'],
    images: [
      { url: '/projects/p18-1.jpg', alt: 'Wallet design' },
      { url: '/projects/p18-2.jpg', alt: 'Interface' }
    ],
    heroImage: '/projects/p18-hero.jpg',
    thumbnail: '/projects/p18-thumb.jpg',
    featured: false,
    date: '2022-07-12'
  },
  {
    id: 'p19',
    slug: 'eco-grid-optimizer',
    title: 'EcoGrid AI Optimizer',
    client: 'GreenEnergy Co',
    description: 'ML-powered optimizer for balancing intermittent renewable energy sources.',
    challenge: 'Predicting solar and wind volatility with 99% uptime requirements.',
    solution: 'Developed a hybrid LSTM-Transformer model for short-term forecasting with a fail-safe rule-based layer.',
    results: 'Increased grid stability by 18% and reduced energy waste by 12%.',
    metrics: [
      { label: 'Stability', value: '+18%' },
      { label: 'Waste', value: '-12%' }
    ],
    services: ['ml-model-development', 'iot-services'],
    technologies: ['PyTorch', 'Python', 'AWS', 'Kafka'],
    images: [
      { url: '/projects/p19-1.jpg', alt: 'Grid viz' },
      { url: '/projects/p19-2.jpg', alt: 'Model chart' }
    ],
    heroImage: '/projects/p19-hero.jpg',
    thumbnail: '/projects/p19-thumb.jpg',
    featured: false,
    date: '2022-05-01'
  },
  {
    id: 'p20',
    slug: 'stellar-brand-motion',
    title: 'Stellar Brand Motion System',
    client: 'Galactic Agency',
    description: 'A complete motion identity system for a global aerospace communication brand.',
    challenge: 'Creating a visual language that conveys both stability and cutting-edge innovation.',
    solution: 'Developed a library of 50+ synchronized motion primitives using GSAP and After Effects.',
    results: 'Brand consistency increased across all digital touchpoints; 40% increase in ad engagement.',
    metrics: [
      { label: 'Engagement', value: '+40%' },
      { label: 'Assets', value: '50+' }
    ],
    services: ['animation', 'ui-ux-development'],
    technologies: ['After Effects', 'GSAP', 'Figma'],
    images: [
      { url: '/projects/p20-1.jpg', alt: 'Motion reel' },
      { url: '/projects/p20-2.jpg', alt: 'Brand board' }
    ],
    heroImage: '/projects/p20-hero.jpg',
    thumbnail: '/projects/p20-thumb.jpg',
    featured: false,
    date: '2022-03-15'
  },
  {
    id: 'p21',
    slug: 'aqua-drone-swarm',
    title: 'AquaSwarm Ocean Mapping',
    client: 'Oceanic Research',
    description: 'A swarm of autonomous underwater vehicles (AUVs) for high-res seabed mapping.',
    challenge: 'Coordination of 20+ drones in high-current environments with limited communication.',
    solution: 'Decentralized swarm intelligence based on a custom Boids-inspired algorithm and acoustic modems.',
    results: 'Mapped 500 sq km of seabed in 40% less time than traditional single-vessel methods.',
    metrics: [
      { label: 'Mapping Speed', value: '1.6x' },
      { label: 'Swarmsize', value: '20 drones' }
    ],
    services: ['robotics', 'iot-services', 'mechanical-simulation'],
    technologies: ['ROS2', 'Python', 'C++', 'Gazebo'],
    images: [
      { url: '/projects/p21-1.jpg', alt: 'AUV swarm' },
      { url: '/projects/p21-2.jpg', alt: 'Map result' }
    ],
    heroImage: '/projects/p21-hero.jpg',
    thumbnail: '/projects/p21-thumb.jpg',
    featured: false,
    date: '2022-01-10'
  },
  {
    id: 'p22',
    slug: 'prime-erp-system',
    title: 'Prime Engineering ERP',
    client: 'Industrial Flow',
    description: 'A custom ERP system specifically designed for high-precision engineering workflows.',
    challenge: 'Integrating complex BOM management with real-time procurement and simulation data.',
    solution: 'Built a modular micro-frontend architecture using React and a high-performance Go backend.',
    results: 'Reduced procurement cycle time by 25% and eliminated 99% of data entry errors.',
    metrics: [
      { label: 'Cycle Time', value: '-25%' },
      { label: 'Error Rate', value: '< 1%' }
    ],
    services: ['software-prototyping', 'app-development', 'website-development'],
    technologies: ['React', 'Go', 'PostgreSQL', 'Docker'],
    images: [
      { url: '/projects/p22-1.jpg', alt: 'ERP Dashboard' },
      { url: '/projects/p22-2.jpg', alt: 'BOM View' }
    ],
    heroImage: '/projects/p22-hero.jpg',
    thumbnail: '/projects/p22-thumb.jpg',
    featured: false,
    date: '2021-11-01'
  },
  {
    id: 'p23',
    slug: 'bio-skin-sensor',
    title: 'BioSkin Neural Interface',
    client: 'NeuroLink Labs',
    description: 'A flexible, skin-integrated electronic sensor for high-fidelity EMG recording.',
    challenge: 'Creating a breathable, stretchable substrate that maintains electrical conductivity.',
    solution: 'Used a custom gold-nanoparticle infused elastomer and laser-direct structuring (LDS).',
    results: 'Achieved 10x higher signal-to-noise ratio compared to traditional gel electrodes.',
    metrics: [
      { label: 'Signal Quality', value: '10x' },
      { label: 'Flexibility', value: 'Up to 40%' }
    ],
    services: ['hardware-prototyping', '3d-printing', 'product-design'],
    technologies: ['Altium', 'Formlabs', 'Python'],
    images: [
      { url: '/projects/p23-1.jpg', alt: 'BioSkin sensor' },
      { url: '/projects/p23-2.jpg', alt: 'Signal graph' }
    ],
    heroImage: '/projects/p23-hero.jpg',
    thumbnail: '/projects/p23-thumb.jpg',
    featured: false,
    date: '2021-09-15'
  },
  {
    id: 'p24',
    slug: 'quantum-secure-comm',
    title: 'QuantumSecure Communications',
    client: 'GovSecure',
    description: 'Implementing a quantum-resistant encryption layer for strategic government communications.',
    challenge: 'Designing a protocol that remains secure against future quantum computing attacks.',
    solution: 'Deployed a lattice-based cryptographic system combined with quantum key distribution (QKD).',
    results: 'Verified security against current Shor-algorithm simulations; zero breach instances.',
    metrics: [
      { label: 'Security', value: 'Quantum-Resistant' },
      { label: 'Latency', value: '< 50ms' }
    ],
    services: ['software-prototyping', 'ml-model-development'],
    technologies: ['Rust', 'C++', 'Python', 'Linux'],
    images: [
      { url: '/projects/p24-1.jpg', alt: 'Network diagram' },
      { url: '/projects/p24-2.jpg', alt: 'Secure terminal' }
    ],
    heroImage: '/projects/p24-hero.jpg',
    thumbnail: '/projects/p24-thumb.jpg',
    featured: false,
    date: '2021-07-01'
  },
  {
    id: 'p25',
    slug: 'stellar-viz-engine',
    title: 'StellarViz Cosmology Engine',
    client: 'Astrophysics Inst.',
    description: 'An interactive 4D visualization tool for simulating galactic collisions and dark matter.',
    challenge: 'Visualizing billions of particles in a way that is intuitive and performant in a browser.',
    solution: 'Used GPGPU computation for particle physics and a custom fragment shader for galactic nebulas.',
    results: 'Enabled researchers to identify 3 new patterns in galactic spiral formation.',
    metrics: [
      { label: 'Particle Count', value: '10M+' },
      { label: 'Performance', value: '60fps' }
    ],
    services: ['animation', 'website-development', 'ml-model-development'],
    technologies: ['Three.js', 'GLSL', 'React', 'Python'],
    images: [
      { url: '/projects/p25-1.jpg', alt: 'Galaxy sim' },
      { url: '/projects/p25-2.jpg', alt: 'Dark matter map' }
    ],
    heroImage: '/projects/p25-hero.jpg',
    thumbnail: '/projects/p25-thumb.jpg',
    featured: false,
    date: '2021-05-10'
  }
];
