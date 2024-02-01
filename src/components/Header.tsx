import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";

const Header = () => {
    function handleMobileMenu() {
        const sidebar = document.getElementById("sidebar");

        if (sidebar) {
            const isHidden = sidebar.classList.contains("hidden");
            sidebar.classList.toggle("hidden");

            sidebar.style.marginLeft = isHidden ? "16px" : "64px";
        }
    }

    return (
        <header className="bg-white p-10 lg:p-14 mx-4 xl:mx-16 mt-4 lg:mt-10 rounded-3xl shadow-xl border border-gray-200">
            <div className="flex justify-between items-center">
                <div className="flex justify-between items-center gap-6">
                    <IoMenuOutline onClick={handleMobileMenu}  className="xl:hidden w-8 h-8"/>
                    <h1 className="font-semibold text-3xl">Jonathan<span className="text-blue-700 text-2xl font-bold">.Dev</span></h1>
                </div>
                <div className="flex justify-between items-center gap-6">
                    <FaGithub className="w-8 h-8"/>
                    <IoLogoLinkedin className="w-10 h-10"/>
                </div>
            </div>
        </header>
    )
}

export default Header;