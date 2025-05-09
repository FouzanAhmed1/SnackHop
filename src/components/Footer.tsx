import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-orange-50 shadow-lg mt-8">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-gray-700">
        <p className="text-sm">&copy; {new Date().getFullYear()} SnackHop. All rights reserved.</p>
        <div className="flex space-x-4">
          <Link to="/about" className="hover:text-orange-500">About Us</Link>
          <Link to="/contact" className="hover:text-orange-500">Contact</Link>
          <Link to="/privacy" className="hover:text-orange-500">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
