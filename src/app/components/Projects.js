import { motion } from 'framer-motion';

export default function Projects() {
    const projects = [
        {
            title: "E-commerce Platform",
            description: "Developed a user-friendly platform to sell your business",
            technologies: "React, Redux, Tailwind CSS, Node.js",
            github: "https://github.com/haraphat01/bizzconnect",
            link: ""
        },
        {
            title: "Pencil",
            description: "A platform that provides fundamental and technical analysis of any cryptocurrency coin",
            technologies: "Next.js, MoralisApi, GrokApi, SerpApi",
            github: "https://github.com/haraphat01/pencilGPT",
        },
        {
            title: "Expense Tracker App",
            description: "Built a mobile-responsive web app for personal expense tracking and budgeting.",
            technologies: "React Native, Firebase, Expo"
        },
        {
            title: "API Documentation Portal",
            description: "Designed and implemented a comprehensive API documentation portal for developers.",
            technologies: "Swagger, Gitbook, React, Express.js"
        }
    ];

    return (
        <section id="projects" className="min-h-screen py-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        className="border border-gray-200 rounded-lg p-6 shadow-lg"
                    >
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="mb-4">{project.description}</p>
                        <p className="text-sm text-gray-600">Technologies: {project.technologies}</p>
                       
                        <p className="text-sm text-gray-600">
                            <a href={project.github} target="_blank" rel="noopener noreferrer"> Github</a>
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}