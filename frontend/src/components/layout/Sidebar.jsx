function Sidebar() {
    return (
        <aside className="w-80 bg-slate-900 border-r border-slate-800 p-5 overflow-y-auto">

            <div className="space-y-5">

                <div className="bg-slate-800 rounded-xl p-4">
                    <h2 className="text-lg font-semibold text-white mb-3">
                        Route Planning
                    </h2>

                    <p className="text-slate-400 text-sm">
                        Source, destination and algorithm selection will appear here.
                    </p>
                </div>

                <div className="bg-slate-800 rounded-xl p-4">
                    <h2 className="text-lg font-semibold text-white mb-3">
                        Route Information
                    </h2>

                    <p className="text-slate-400 text-sm">
                        Distance, ETA and statistics will be shown here.
                    </p>
                </div>

                <div className="bg-slate-800 rounded-xl p-4">
                    <h2 className="text-lg font-semibold text-white mb-3">
                        Future Modules
                    </h2>

                    <ul className="text-sm text-slate-400 space-y-2">
                        <li>• Driver Tracking</li>
                        <li>• Traffic Simulation</li>
                        <li>• Route History</li>
                        <li>• Analytics</li>
                    </ul>
                </div>

            </div>

        </aside>
    );
}

export default Sidebar;