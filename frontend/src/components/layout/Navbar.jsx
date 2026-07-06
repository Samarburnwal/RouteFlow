import { FiBell, FiSettings, FiUser } from "react-icons/fi";

function Navbar() {
    return (
        <header className="h-16 bg-slate-900 border-b border-slate-800 px-6 flex items-center justify-between">

            {/* Logo */}
            <div>
                <h1 className="text-2xl font-bold text-cyan-400">
                    RouteFlow
                </h1>

                <p className="text-xs text-slate-400">
                    Smart Route Optimization Platform
                </p>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-5 text-slate-300">

                <button className="hover:text-cyan-400 transition">
                    <FiBell size={20} />
                </button>

                <button className="hover:text-cyan-400 transition">
                    <FiSettings size={20} />
                </button>

                <button className="hover:text-cyan-400 transition">
                    <FiUser size={20} />
                </button>

            </div>

        </header>
    );
}

export default Navbar;