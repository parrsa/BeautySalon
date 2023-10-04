import { React, useState, useEffect, Link, Url } from '../../Data/Static/staticimport';
import images from '../../Assets/image/OIP (33) 2 (1) (3).webp'
const Banner = () => {
    const [Head, setHead] = useState([])
    const [Description, setDes] = useState([])
    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`${Url}/get_head_title/`)
            const data = await response.json();
            setHead(data.title)
            setDes(data.description)
        }
        getData()
    }, [])
    const Scroll = () => {
        window.scrollTo({ top: 3000, left: 0, behavior: 'smooth' });
    }
    return (
        <div className="w-full relative h-[560px]  sm:h-fit bg-[#2A2A2A]">

            <div className="grid grid-cols-2 grid-rows-2 h-fit">
                <div className="col-span-1 h-[76vh] md:h-[51vh] sm:overflow-hidden sm:h-full sm:col-span-2 md:col-span-1 flex justify-center">
                    <div className="w-[380px] h-[420px] sm:w-[270px] sm:-mr-14 md:w-[310px] md:-mr-10 md:mt-20 sm:mt-20 sm:h-[335px]  mr-24 rounded mt-[215px] border-2 border-gray-300"></div>
                    <div className="w-fit h-fit sm:w-[290px]  mt-24 mr-10 sm:mr-0 sm:mt rounded absolute">
                        <img src={images} width={"420px"} alt="images" className="rounded" />
                    </div>
                </div>

                <div className="col-span-1 h-[76vh] sm:mt-10 sm:overflow-hidden sm:h-full md:h-full md:overflow-hidden sm:col-span-2  flex justify-center items-center">
                    <div className="w-full h-[380px] flex md:mr-10 items-center">
                        <div className="w-[80%] sm:w-full sm:mr-5 sm:h-full sm:w-full md:h-full md:w-full h-80 flex flex-col  justify-center">
                            <h1 className="text-white w-[460px] sm:text-5xl md:text-5xl md:mr-2 text-7xl animate-pulse  leading-[70px] text-right"><span className="text-[#FF004D]">{Head.slice(0, 7)}</span> {Head.slice(7)}</h1>
                            <p className="w-[440px] sm:w-fit md:w-80 md:mr-2 mt-8 text-[#9E9E9E] leading-10">
                            <span className="font-bold text-[#FFF]">{Description.slice(0, 27)}</span> {Description.slice(27)}
                               </p>
                            <div className="w-[440px] h-20 mt-5 text-white flex sm:justify-start items-center">
                                <button className="bg-[#FF004D] w-36 md:mr-2 h-10 rounded">
                                    <Link onClick={Scroll}>
                                        <a href="">درباره پرتوماه</a>
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
export default Banner;
