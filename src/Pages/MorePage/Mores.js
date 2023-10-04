import { useState, useEffect, useParams, Url, Navbar, Footer } from '../../Data/Static/staticimport';
import { useRef } from 'react';
function Mores() {
    const { id } = useParams();
    const [Product, setProduct] = useState([])
    const [Pages, setPages] = useState([])
    const [page, setPag] = useState(1)
    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`${Url}/get_product_by_cat/${id}/?page=${page}`)
            const data = await response.json();
            setProduct(data.results)
            setPages(data.pages)
        }
        getData()
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [id, page])
    return (
        <>
            <Navbar />
            <div dir="rtl" className="w-full flex justify-start font-KALAMEHBOLD mb-20  sm:mt-5  h-fit">
                <div className="w-full sm:flex sm:flex-col sm:items-center h-fit">
                    <div className="w-full flex justify-start items-center h-10">
                        <h1 className="font-bold mt-10  text-xl sm:text-base sm:font-bold relative sm:mr-3 mr-32 md:mr-3">
                            {id == 1 ? "خدمات مژه" : id == 2 ? "خدمات ناخن" : id == 3 ? "میکاپ" : id == 4 ? "رنگ و مو" : ""}
                        </h1>
                    </div>
                    <div className="flex md:-mr-4 sm:-mr-5 ">
                        <div className="grid grid-cols-4 w-full mr-20 sm:grid-cols-1 md:grid-cols-2 sm:gap-4 sm:mr-4">
                            {Product.map((item) => (
                                <div className="w-64 h-[335px] sm:h-[350px] sm:w-fit mt-24  sm:h-72  sm:mb-0 rounded border-2 border-gray-300">
                                    <div className="pp w-[265px] sm:w-full h-[360px] sm:w-fit rounded top-2right-2 relative">
                                        <div className="p hidden w-full h-full absolute opacity-50 bg-gray-900"><div className="w-full h-full flex justify-center items-center text-white">
                                            {item.description}
                                        </div>
                                        </div>
                                        <img src={`data:image/png;base64,${item.image}`} className="rounded h-full" alt={item.name} />
                                    </div>
                                </div>
                            ))}
                            {Product.length <= 5 && (<>
                                <div className='w-full h-[80vh] '></div>
                            </>)}
                        </div>
                    </div>
                </div>
            </div>
            {
                Pages ? (
                    <>
                        <div dir='ltr' className='w-full h-20 mt-10  flex justify-center items-center'>
                            <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                                <a href="#" onClick={() => setPag(Pages > 1 ? page - 1 : page)} class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                    <span class="sr-only">Previous</span>
                                    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
                                    </svg>
                                </a>
                                {[...Array(Pages).keys()].map((x, index) => (
                                    <>
                                        {index > 0 && (
                                            <a onClick={() => setPag(page + 1)} class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">{x}</a>
                                        )}
                                    </>
                                ))}
                                <a onClick={() => setPag(Pages < 1 ? page + 1 : page)} href="#" class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                    <span class="sr-only">Next</span>
                                    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </nav>
                        </div>
                    </>
                ) : ("")
            }
            <Footer />
        </>
    );
}

export default Mores;