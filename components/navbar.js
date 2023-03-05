import { FaPlus, FaSearch, FaUserCircle } from "react-icons/fa";
function Navbar() {
  return (
    <nav className="h-16 bg-white shadow-lg flex items-center justify-between px-6 font-sans">
      <h1 className="text-3xl font-bold tracking-tight text-gray-800">
        NoteVate
      </h1>

      <div className="w-8 h-8 rounded-full overflow-hidden">
        <FaUserCircle className="w-full h-full text-gray-500" />
      </div>
    </nav>
  );
}

export default Navbar;
