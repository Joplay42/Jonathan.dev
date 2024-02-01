import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

const Header = () => {
    return (
        <header className="bg-white py-10 px-20 mx-16 mt-16 rounded-3xl shadow-xl border border-gray-200">
            <div className="flex justify-between items-center">
                <h1 className="font-semibold">Jonathan<span className="text-blue-700 text-3xl font-bold">.Dev</span></h1>
                <div className="flex justify-between items-center gap-6">
                    <FaGithub className="w-8 h-8"/>
                    <IoLogoLinkedin className="w-10 h-10"/>
                </div>
            </div>
        </header>
    )
}

export default Header;