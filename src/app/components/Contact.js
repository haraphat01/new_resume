// components/Contact.js
export default function Contact() {
    return (
      <section id="contact" className="min-h-screen py-16 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <p className="mb-4">I'm always open to new opportunities and collaborations.</p>
          <p className="mb-2">Email: haraphat@gmail.com</p>
          <p className="mb-4">LinkedIn: https://www.linkedin.com/in/arafat-akata/</p>
          <div className="flex justify-center space-x-4">
            <a href="https://medium.com/@haraphat" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">
              Medium
            </a>
            <a href="https://github.com/haraphat01" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">
              GitHub
            </a>
          </div>
        </div>
      </section>
    );
  }