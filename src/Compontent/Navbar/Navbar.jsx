import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-slate-300">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                    
                    </div>
                    <Link to='/'><a className="btn btn-ghost text-xl">daisyUI</a></Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-2xl text-slate-900">
                        <Link to='/'><li><a href="">Home</a></li></Link>
                        <li><a href="">About</a></li>
                        <li><a href="">Desbord</a></li>
                        <Link to='/data'><li><a>Data</a></li></Link>
                        <li><a>Select(0)</a></li>
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;