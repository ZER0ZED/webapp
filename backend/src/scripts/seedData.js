import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from '../models/Project.js';
import Skill from '../models/Skill.js';
import Experience from '../models/Experience.js';

dotenv.config();

// Sample data based on Ammar's CV
const sampleProjects = [
  {
    title: "High-Fidelity Defense Simulation System",
    description: "Developed critical backend infrastructure and user interfaces for a defense application using Qt/C++ and QML. The system handles complex data processing, system integration, and network communications for military training simulations. Implemented networking protocols and state handling for immersive simulation experiences.",
    shortDescription: "Defense simulation system with Qt/C++ and QML for military training",
    technologies: ["Qt", "C++", "QML", "CMake", "Networking", "State Management"],
    category: "simulation",
    featured: true,
    status: "completed",
    startDate: new Date("2025-06-01"),
    endDate: new Date("2025-10-02")
  },
  {
    title: "Full-Stack Solution with Qt/C++",
    description: "Architected and implemented complete full-stack solutions using Qt/C++ and QML. Handled the entire development lifecycle from UI/UX design through deployment and system integration. Built robust C++ backend services and responsive QML interfaces.",
    shortDescription: "End-to-end application development with Qt framework",
    technologies: ["Qt", "C++", "QML", "CMake", "UI/UX Design"],
    category: "desktop",
    featured: true,
    status: "completed"
  },
  {
    title: "Unreal Engine Simulation Integration",
    description: "Collaborated with Unreal Engine developers to deliver integrated simulation solutions for defense applications. Implemented custom Qt applications that interface with Unreal Engine components for enhanced visualization and interaction in training scenarios.",
    shortDescription: "Qt and Unreal Engine integration for defense training",
    technologies: ["Qt", "C++", "Unreal Engine", "Integration APIs"],
    category: "simulation",
    featured: true,
    status: "completed"
  }
];

const sampleSkills = [
  // Languages
  { name: "C++", category: "languages", proficiency: 90, yearsOfExperience: 4, featured: true },
  { name: "Python", category: "languages", proficiency: 85, yearsOfExperience: 3, featured: true },
  { name: "QML", category: "languages", proficiency: 90, yearsOfExperience: 3, featured: true },
  { name: "JavaScript", category: "languages", proficiency: 80, yearsOfExperience: 3, featured: false },
  { name: "TypeScript", category: "languages", proficiency: 75, yearsOfExperience: 2, featured: false },
  
  // Frameworks
  { name: "Qt", category: "frameworks", proficiency: 95, yearsOfExperience: 4, featured: true },
  { name: "React", category: "frameworks", proficiency: 80, yearsOfExperience: 2, featured: true },
  { name: "Node.js", category: "frameworks", proficiency: 75, yearsOfExperience: 2, featured: false },
  { name: "Express", category: "frameworks", proficiency: 75, yearsOfExperience: 2, featured: false },
  
  // Tools
  { name: "Git", category: "tools", proficiency: 90, yearsOfExperience: 4, featured: true },
  { name: "CMake", category: "tools", proficiency: 85, yearsOfExperience: 3, featured: true },
  { name: "qmake", category: "tools", proficiency: 85, yearsOfExperience: 3, featured: false },
  { name: "Qt Creator", category: "tools", proficiency: 90, yearsOfExperience: 4, featured: false },
  { name: "Visual Studio", category: "tools", proficiency: 80, yearsOfExperience: 3, featured: false },
  
  // Platforms
  { name: "Linux", category: "platforms", proficiency: 80, yearsOfExperience: 3, featured: false },
  { name: "Windows", category: "platforms", proficiency: 85, yearsOfExperience: 4, featured: false },
  { name: "Unreal Engine", category: "platforms", proficiency: 70, yearsOfExperience: 1, featured: true },
  
  // Databases
  { name: "MongoDB", category: "databases", proficiency: 75, yearsOfExperience: 2, featured: false },
  { name: "SQL", category: "databases", proficiency: 70, yearsOfExperience: 2, featured: false },
  
  // Other
  { name: "AI Integration", category: "other", proficiency: 75, yearsOfExperience: 2, featured: true },
  { name: "Cross-platform Development", category: "other", proficiency: 85, yearsOfExperience: 3, featured: false }
];

const sampleExperiences = [
  {
    company: "ACME - Integrated Engineering Systems (IES)",
    position: "Software Engineer",
    location: "Cairo, Egypt",
    startDate: new Date("2025-06-01"),
    current: true,
    description: "Working on full-stack applications for defense simulation systems using Qt/C++ and QML.",
    responsibilities: [
      "Develop and maintain full-stack applications using Qt/C++ and QML for defense simulation systems",
      "Design and implement networking protocols and state handling for immersive military training simulations",
      "Create responsive user interfaces and manage complete frontend development using QML framework",
      "Build robust C++ backend service handling data processing, system integration, and network communications",
      "Collaborate with Unreal Engine developers to deliver integrated simulation solutions for defense applications",
      "Manage end-to-end development lifecycle from UI/UX design through deployment and system integration",
      "Contribute to high-fidelity simulation systems supporting critical defense training operations"
    ],
    technologies: ["Qt", "C++", "QML", "CMake", "qmake", "Unreal Engine", "Networking", "Git"],
    achievements: [
      "Contributed to high-fidelity simulation systems for defense application",
      "Architected and implemented full-stack solutions using Qt/C++ and QML",
      "Collaborated on multi-disciplinary team integrating custom Qt applications with Unreal Engine"
    ],
    order: 1
  }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await Project.deleteMany({});
    await Skill.deleteMany({});
    await Experience.deleteMany({});
    console.log('🗑️  Cleared existing data');

    // Insert sample data
    await Project.insertMany(sampleProjects);
    console.log('✅ Added sample projects');

    await Skill.insertMany(sampleSkills);
    console.log('✅ Added sample skills');

    await Experience.insertMany(sampleExperiences);
    console.log('✅ Added sample experiences');

    console.log('\n🎉 Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
