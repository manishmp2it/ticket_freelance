'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';

const page = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const router = useRouter();
    let token;

    if (typeof window !== 'undefined') {
        token = localStorage.getItem('testing_user');
    }

    async function submitData(e) {

        e.preventDefault();

        let formData = new FormData();

        formData.append('email', email);
        formData.append('password', password);

        const res = await fetch('https://dev.abdimant.com/monorepo-backend/public/api/login', {
            method: 'POST',
            body: formData
        });
        console.log(res)

        if (res?.ok) {

            let data = await res.json();
            console.log(data)

            localStorage.setItem('testing_user', data.token)

            toast.success('Logged in');
            router.refresh();
        }

        if (!res?.ok) {
            toast.error('please enter correct email and password');
        }
    }

    if (token) {
        router.push('/')
    }

    return (
        <div className='flex flex-row items-center justify-center py-28 '>
            <form className='w-[400px] border-[1px] p-12 bg-[#f3f3f326] rounded-md' onSubmit={submitData}>
                <div className="mb-6">
                    <label forName="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required onChange={(e) => {
                        setEmail(e.target.value);
                    }} />
                </div>
                <div className="mb-6">
                    <label forName="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={(e) => {
                        setPassword(e.target.value);
                    }} />
                </div>
                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                    </div>
                    <label forName="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
    )
}

export default page