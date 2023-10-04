import { useState, useEffect, Card, Link, Url } from '../../Data/Static/staticimport';
const Nail = () => {
    const [Product, SetProduct] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`${Url}/get_product_by_cat/2/`)
            const data = await response.json();
            SetProduct(data.results)
        }
        getData()
    }, [])
    return (
        <>
            <div dir="rtl" className="w-full flex sm:mb-44 justify-start font-KALAMEHBOLD mt-44 sm:mt-5 h-fit">
                <div className="w-full sm:flex sm:flex-col sm:items-center  h-fit">
                    <div className="w-full flex justify-between  relative items-center ">
                        <h1 className='mr-20 sm:mr-5 font-bold text-xl '>خدمات ناخن</h1>
                        <Link to={`/services/${2}`}><h1 className='ml-20 sm:ml-5 font-bold  text-xl'>بیشتر</h1></Link>
                    </div>
                    <div className="flex -mt-10  md:-mr-4 sm:-mr-5">
                        <div className="grid grid-cols-4 w-full mr-20 sm:grid-cols-1 md:grid-cols-3 sm:gap-4 sm:mr-4">
                            <Card key='FullData' Product={Product} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );


}
export default Nail


