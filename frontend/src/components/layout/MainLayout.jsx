import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function MainLayout({ children }) {
    return (
        <div className="h-screen flex flex-col bg-slate-950">

            <Navbar />

            <div className="flex flex-1 overflow-hidden">

                <Sidebar />

                <main className="flex-1">
                    {children}
                </main>

            </div>

        </div>
    );
}

export default MainLayout;