import { React, Link, useState } from '../../Data/Static/staticimport';
import locofy from "../../Assets/image/logo.png"
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="w-full sm:hidden md:hidden overflow-hidden bg-[#2A2A2A] sm:z-50 md:z-50 z-10  h-20 top-0 flex justify-between md:jus items-center">
                <Link to={'/'}>
                    <div className="w-20 sm:hidden mr-32 md:mr-0  h-20 z-10 flex  rounded-full mt-6 ">
                        {/* <img className="w-14 cursor-pointer mr-10 h-14" src={Logo} alt="logo" /> */}
                    </div>
                </Link>
                <div className='relative hidden -z-10 sm:left-20 sm:block '>
                    <div class="space-y-2">
                        <span class="block w-8 h-0.5 bg-black"></span>
                        <span class="block w-8 h-0.5 bg-black"></span>
                        <span class="block w-8 h-0.5 bg-black"></span>
                    </div>
                </div>
                <ul className="flex absolute  sm:bg-[#9161F8] sm:shadow-sm sm:shadow-[#9161F8] text-white  sm:mr-0  md:mr-0 p-20   sm:w-64 sm:h-80 sm:top-20  sm:-translate-y-[490PX]">
                    <Link to='/'>
                        <li className="relative mr-10 sm:hover:bg-slate-100 sm:w-52 sm:-top-14 sm:-mr-14 sm:p-0 sm:text-2xl cursor-pointer transition-all  hover:text-[#FF004D]  p-1.5 ">
                            صفحه اصلی
                        </li>
                    </Link>

                    <Link to={`/services/${1}`}>
                        <li className="relative mr-10 sm:hover:bg-slate-100 sm:w-52 sm:-top-14 sm:-mr-14 sm:p-0 sm:mt-5 p-1.5 cursor-pointer sm:text-2xl  transition-all  hover:text-[#FF004D]">
                            <a href="../Card/">خدمات مژه</a>
                        </li>
                    </Link>

                    <Link to={`/services/${2}`}>
                        <li className="relative mr-10 sm:hover:bg-slate-100 sm:w-52 sm:-top-14 sm:-mr-14 sm:p-0 sm:mt-5 p-1.5 cursor-pointer sm:text-2xl  transition-all  hover:text-[#FF004D]">
                            <a href="../Card/">خدمات ناخن</a>
                        </li>
                    </Link>

                    <Link to={`/services/${3}`}>
                        <li className="relative mr-10 sm:hover:bg-slate-100 sm:w-52 sm:-top-14 sm:-mr-14 sm:p-0 sm:mt-5 p-1.5 cursor-pointer sm:text-2xl  transition-all  hover:text-[#FF004D]">
                            <a href="../Card/">میکاپ</a>
                        </li>
                    </Link>

                    <Link to={`/services/${4}`}>
                        <li className="relative mr-10 sm:hover:bg-slate-100 sm:w-52 sm:-top-14 sm:-mr-14 sm:p-0 sm:mt-5 p-1.5 cursor-pointer sm:text-2xl  transition-all  hover:text-[#FF004D]">
                            رنگ و مو
                        </li>
                    </Link>

                </ul>
            </div>

            <nav className="hidden sm:flex md:flex items-center  border-none bg-[#2A2A2A] text-white  justify-between flex-wrap p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
                    <Link to='/'>
                    <img src={locofy} className="w-100 h-[60px] " alt="Logo" />
                    </Link>
                </div>
                <div className="block lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
                    >
                        <svg
                            className={`fill-current h-5 w-5 ${isOpen ? "hidden" : "block"}`}
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                        <svg
                            className={`fill-current h-5 w-5 ${isOpen ? "block" : "hidden"}`}
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                        </svg>
                    </button>
                </div>
                <div
                    className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
                >
                    <div className="text-sm lg:flex-grow">
                        <Link to='/'>
                            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
                                صفحه اصلی
                            </a>
                        </Link>
                        <Link to={`/services/${1}`}>
                            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
                                خدمات مژه
                            </a>
                        </Link>
                        <Link to={`/services/${2}`}>
                            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
                                خدمات ناخن
                            </a>
                        </Link>
                        <Link to={`/services/${3}`}>
                            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
                                میکاپ
                            </a>
                        </Link>

                        <Link to={`/services/${4}`}>
                            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
                                رنگ و مو
                            </a>
                        </Link>
                    </div>

                </div>
            </nav>

        </>
    );
}

export default Navbar;