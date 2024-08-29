import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ color: "#5B4137" }} className="  py-12">
      <div className="mt-8 border-t border-gray-700 pt-8 text-center">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link to="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="hover:underline">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/press" className="hover:underline">
                    Press
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:underline">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Products</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link to="/analytics" className="hover:underline">
                    Analytics
                  </Link>
                </li>
                <li>
                  <Link to="/engagement" className="hover:underline">
                    Engagement
                  </Link>
                </li>
                <li>
                  <Link to="/security" className="hover:underline">
                    Security
                  </Link>
                </li>
                <li>
                  <Link to="/integrations" className="hover:underline">
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Support</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link to="/help-center" className="hover:underline">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:underline">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Contact</h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <span>prachips2621@gmail.com</span>
                </li>
                <li className="flex space-x-4 mt-4"></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-500">
              &copy; 2024 Your Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
