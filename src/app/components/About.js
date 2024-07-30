// components/About.js
export default function About() {
    return (
      <section id="about" className="min-h-screen py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="mb-4">
            I am a Frontend Engineer with a Master's degree in Software Engineering & Management from Innopolis University.
            My expertise lies in developing intuitive and efficient web applications, with a strong focus on user experience and performance optimization.
          </p>
          <p className="mb-4">
            I have a background in Statistics from the University of Ilorin, which gives me a unique perspective on data-driven decision making in software development.
          </p>
          <p>My skills include:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Frontend: React.js, Next.js, Tailwind CSS, Bootstrap, GraphQL, Redux</li>
            <li>DevOps: Docker, Kubernetes, Github Actions, Helm, Terraform, Jenkins</li>
            <li>Cloud: AWS</li>
            <li>API Documentation: Swagger, Postman, Gitbook</li>
          </ul>
        </div>
      </section>
    );
  }