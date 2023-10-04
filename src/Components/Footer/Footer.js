import logo from '../../Assets/image/logo.png';
import { Url, useEffect, useState } from '../../Data/Static/staticimport'
const Footer = () => {
    const [Aboute, setAboute] = useState([])
    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`${Url}/get_about_us/`)
            const data = await response.json()
            setAboute(data)
        }
        getData()
    }, [])
    return (
        <div className="w-full h-[160px] mt-20 sm:h-[240px] flex flex-col items-center ">
            <div className="w-full h-[80px] sm:h-full border-b-2 border-t-2 border-[#888888] flex justify-between items-center sm:flex-col sm:items-center">

                <div className="w-fit  h-14 sm:w-fit sm:h-fit flex items-center">
                    <h1 className="font-bold text-xl ">ادرس:</h1>
                    <p className="mr-2 text-ellipsis sm:mt-5 ">{Aboute.address}</p>
                </div>

                {/* <div className="w-full h-14   sm:w-fit sm:mt-5  sm:h-fit flex items-center">
                    <h1 className="font-bold text-xl ">شماره تماس :</h1>
                    <p className="mr-2">{Aboute.phone}</p>
                </div> */}

                <div className="w-fit  h-14 sm:w-full sm:h-fit flex items-center sm:justify-start  sm:mt-5">
                    <h1 className="font-bold text-xl">شماره تماس :</h1>
                    <p className="mr-2">{Aboute.phone}</p>
                </div>

                <div className="w-44 h-20  md:hidden sm:justify-center flex items-center">
                    <img src={logo} alt="logo" className="w-44 h-20" />
                </div>

            </div>
            <div className="w-full h-[80px] flex justify-center items-center ml-10 sm:ml-0">
                <div className="w-5/6 h-14 sm:w-full flex items-center sm:justify-center">
                    <p className=''>تمامی حقوق این سایت مطعلق به آرایشگاه پرتوماه می باشد.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer