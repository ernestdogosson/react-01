import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="fixed left-0 right-0 top-0  z-50 mb-20">
        <nav className="">
          <ul className="flex bg-slate-800 justify-center p-4 gap-8">
            <li>
              <Link
                to="/"
                className="text-white hover:text-blue-400 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white hover:text-blue-400 transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="text-white hover:text-blue-400 transition"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white hover:text-blue-400 transition"
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
