import { Link } from "react-router-dom";
import logo from '/tasks.png'

const NavBar = () => {
    return (
        <div className="mb-8">
            <nav className="flex justify-between bg-base-100 shadow-2xl p-2">
                <div className="mr-2">
                    <Link to={'/'}> <img className="w-12 object-cover hover:ease-in hover:duration-150 hover:scale-110" src={logo} alt="" /></Link>
                </div>
                <div className="flex justify-center gap-2 md:gap-5 items-center uppercase text-xs font-semibold">
                 
                    <Link to={'/login'}><button className="btn btn-info rounded-full hover:bg-transparent hover:border-2 text-white hover:text-black hover:ease-in hover:duration-150 hover:scale-105">LOGIN</button></Link>
                    <Link to={'/signUp'}><button className="btn btn-info bg-transparent border-2 rounded-full hover:ease-in hover:duration-150 hover:scale-105">SIGN UP</button></Link>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;