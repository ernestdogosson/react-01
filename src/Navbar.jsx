import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="fixed left-0 right-0 top-0  z-50 mb-20">
        <nav className="">
          <ul className="flex bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 justify-center p-4 gap-8">
            <li>
              <Link
                to="/"
                className="text-white hover:text-blue-400 transition font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white hover:text-blue-400 transition font-medium"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="text-white hover:text-blue-400 transition font-medium"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white hover:text-blue-400 transition font-medium"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
