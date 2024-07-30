import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Deep Intel",
      period: "2020/02 – 2022/06",
      location: "Nigeria",
      responsibilities: [
        "Created and maintained detailed API documentation",
        "Designed and implemented a user-friendly dashboard for expense tracking",
        "Integrated advanced data visualization tools",
        "Leveraged code quality analysis tools to reduce technical debt by 20%",
        "Implemented secure authentication and authorization protocols"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Coin Consults",
      period: "2016/11 – 2018/12",
      location: "Nigeria",
      responsibilities: [
        "Designed and implemented an intuitive dashboard for product management, resulting in a 30% increase in vendor efficiency for uploading, editing, and deleting products.",
        "Achieved 100% cross-browser compatibility and responsiveness, enhancing the user experience across devices. ",
        "Collaborated with UI/UX designers to create a user interface that led to a 25% improvement in user satisfaction scores.",
        "Implemented best practices that improved front-end performance, contributing to a 15% increase in overall platform speed.",
        "Worked closely with QA teams to identify and resolve issues, improving platform stability and reliability.",
        "Collaborated with backend developers to seamlessly integrate front-end functionalities with server-side operations, reducing integration time by 20%."

      ]
    }
  ];

  return (
    <section id="experience" className="min-h-screen py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="mb-8"
          >
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-gray-600">{exp.company} | {exp.period} | {exp.location}</p>
            <ul className="list-disc list-inside mt-2">
              {exp.responsibilities.map((resp, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (index * 0.2) + (i * 0.1), duration: 0.5 }}
                >
                  {resp}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}