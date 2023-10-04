import { React, useState, useEffect, Url } from '../../Data/Static/staticimport'
import image1 from '../../Assets/image/ImageAboute1.webp'
import image2 from '../../Assets/image/ImageAboute2.webp'
import image3 from '../../Assets/image/ImageAboute3.webp'
import image4 from '../../Assets/image/OIP (15) 1.webp'
import image5 from '../../Assets/image/OIP (12) 1 (19).webp'
const Aboute = () => {
    const [Aboute, setAboute] = useState([])
    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`${Url}/get_about_us/`)
            const data = await response.json();
            setAboute(data.description)
        }
        getData()
    }, [])
    return (
        <div id='aboute' className="w-full  sm:mt-0 mt-44  h-fit sm:h-fit flex flex-col items-center ">
            <div className="w-full h-20 bg-white flex justify-center items-center">
                <div className="hr-lines w-72 h-20  flex flex-col items-center ">
                    <h1 className="text-[20px] font-bold text-[#FF004D]  text-2xl mr-40 ">Aboute Us</h1>
                    <h1 className="text-4xl font-bold text-[#FF004D]">دربـــــــــاره مــــــــــا</h1>
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 sm:grid-rows-2 h-fit mt-10 w-[80%] sm:w-full sm:h-full gap-2 ">
                <div className="col-span-1  h-[75vh]  sm:h-fit sm:col-span-2 md:h-fit flex justify-center ">
                    <div className="w-[90%] h-80">
                        <p className="text-xl text-justify leading-[60px]"><span className="text-[#FF004D]">{Aboute.slice(0, 27)}</span> {Aboute.slice(27)}</p>
                    </div>
                </div>
                <div className="col-span-1 h-fit sm:hidden  sm:h-70 sm:col-span-2  flex justify-center items-center">
                    <div dir="ltr" className="w-full h-fit grid grid-cols-3 gap-2 grid-rows-2">
                        <div className="col-span-1 row-span-2 rounded-bl"><img src={image1} className="w-full object-fill rounded-l  h-full" alt="image1" /></div>

                        <div className="col-span-1 row-span-2  gap-3 grid grid-cols-1 grid-rows-2">
                            <div className='col-span-1 bg-black'><img src={image2} className='' alt="image1" /></div>
                            <div className='col-span-1 bg-black'><img src={image3} className='' alt="image1" /></div>
                        </div>

                        <div className="col-span-1 row-span-2 gap-3 grid grid-cols-1 grid-rows-2">
                            <div className='col-span-1 bg-black rounded-tr'><img src={image5} className='rounded' alt="image1" /></div>
                            <div className='col-span-1 bg-black rounded-br'><img src={image5} className='rounded' alt="image1" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Aboute;
