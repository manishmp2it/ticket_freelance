import React, { useEffect, useState } from 'react'
import Pagination from '../pagination/Pagination'

const Table = ({ token }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState([]);
    const totalPages = 10; // Replace this with the actual total number of pages

    const handlePageChange = (page) => {
        setCurrentPage(page);
        // You can update your data fetching logic here based on the selected page
    };

    async function getTableData() {

        if (token != undefined) {
            const res = await fetch('https://dev.abdimant.com/monorepo-backend/public/api/bookings', {
                headers: { 'authorization': `Bearer ${token}` }
            });
           
            if (res?.ok) {
                let data = await res.json();
                setData(data);
            }

            if (!res?.ok) {
                toast.error('Something went wrong');
            }
        }
    }

    useEffect(() => {
        getTableData();
    }, [])


    return (
        <div className="flex flex-col pt-10">
            <div className='border-b-2 my-2 pb-8 flex flex-row justify-between mx-5 items-center'>
                <nav className="w-full rounded-md">
                    <ol className="list-reset flex">
                        <li>
                            <a
                                href="#"
                                className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                            >Home</a
                            >
                        </li>
                        <li>
                            <span className="mx-2 text-neutral-500 dark:text-neutral-400">/</span>
                        </li>
                        <li className="text-neutral-500 dark:text-neutral-400">Tickets</li>
                    </ol>
                </nav>
                <div>
                    <button type="button" className="w-[150px] text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create Tickets</button>
                </div>
            </div>
            <div className="overflow-x-auto ">
                <div className=" min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light">
                            <thead
                                className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                                <tr>
                                    <th scope="col" className="px-6 py-4">SN No.</th>
                                    <th scope="col" className="px-6 py-4">Reason</th>
                                    <th scope="col" className="px-6 py-4">Date</th>
        
                                </tr>
                            </thead>
                            <tbody>
                                {data && data.map((item,index) => (
                                    <tr key={index}
                                        className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">{index}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{item.date}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{item.reason}</td>
                                       
                                    </tr>
                                ))}
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
    )
}

export default Table