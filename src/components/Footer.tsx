import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Aman Rajak</h3>
            <p className="text-gray-400">
              Backend Developer passionate about building scalable and efficient applications.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Amanworld8040"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/aman-rajak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiLinkedin size={24} />
              </a>
              <a
                href="mailto:amanra382@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiMail size={24} />
              </a>
            </div>
            <p className="text-gray-400 mt-4">
              <FiPhone className="inline mr-2" size={16} />
              +91 9110152652
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Aman Rajak. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

