import { Url, useState } from '../../Data/Static/staticimport';
const Card = ({ Product }) => {
    return (
        <>
            {Product ? Product.map((item, index) => (
                <>
                    {(index <= 3) && (
                        <>
                            <div key={item} className="w-64 h-[335px] sm:h-[350px] sm:w-fit mt-24    sm:mb-0 rounded border-2 border-gray-300">
                                <div className="pp w-[265px] sm:w-full h-[360px]  rounded top-right-2 relative">
                                    <div className="p hidden w-full  h-full absolute opacity-60 bg-gray-500">
                                        <div className="w-full h-full flex justify-center items-center text-black font-bold z-10 absolute">
                                            {item.description}
                                        </div>
                                    </div>
                                    <img src={`data:image/png;base64,${item.image}`} className="rounded h-full" alt={item.name} />
                                </div>
                            </div>
                        </>
                    )}
                </>
            )) : (<div></div>)}
        </>
    )
}
export default Card