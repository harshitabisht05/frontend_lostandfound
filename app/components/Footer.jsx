// components/Footer.jsx
export default function Footer() {
  return (
                <footer className="border-t border-slate-800">
                    <div className="container mx-auto px-6 py-12">
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* About */}
                            <div>
                                <a href="#" className="text-2xl font-bold text-white">
                                <span className="gradient-text">FindMyStuff</span>
                                </a>
                                <p className="text-slate-400 mt-4 max-w-xs">UPES's platform for lost and found items.</p>
                            </div>
                            {/* Links */}
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-bold text-white mb-4">Quick Links</h4>
                                    <ul className="space-y-3">
                                        <li><a href="#" className="text-slate-400 hover:text-sky-400">Report Lost</a></li>
                                        <li><a href="#" className="text-slate-400 hover:text-sky-400">Post Found</a></li>
                                        <li><a href="#" className="text-slate-400 hover:text-sky-400">My Account</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-4">Resources</h4>
                                    <ul className="space-y-3">
                                        <li><a href="#" className="text-slate-400 hover:text-sky-400">About Us</a></li>
                                        <li><a href="#" className="text-slate-400 hover:text-sky-400">Contact Admin</a></li>
                                        <li><a href="#" className="text-slate-400 hover:text-sky-400">College Website</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* Socials */}
                            <div>
                                <h4 className="font-bold text-white mb-4">Connect With Us</h4>
                                <div className="flex space-x-4">
                                    <a href="#" className="text-slate-400 hover:text-sky-400"></a>
                                    <a href="#" className="text-slate-400 hover:text-sky-400"></a>
                                    <a href="#" className="text-slate-400 hover:text-sky-400"></a>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500">
                            &copy; 2024 UPES. All Rights Reserved.
                        </div>
                    </div>
                </footer>
  );
}