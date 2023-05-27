'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'react-hot-toast'

const Navbar = () => {

  const router = useRouter();

  async function logout() {
  
    // const res = await fetch('https://dev.abdimant.com/monorepo-backend/public/api/logout', {
    //     method: 'POST',
    //     body: formData
    // });

    // if (res?.ok) {

        localStorage.removeItem('testing_user')

        toast.success('Logged Out');
        router.refresh();
    // }

    // if (!res?.ok) {
    //     toast.error('Something went wrong');
    // }
}



  return (
    <header className="bg-white border-b-[1px] shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 " aria-label="Global">
        <div className="flex lg:flex-1">
         
            <Image  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" width={60} height={60} alt="sdfsd asdadads"/>
         
        </div>
       
       
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button href="#" className="text-sm font-semibold leading-6 text-gray-900 hover:bg-slate-100 p-3 rounded-sm transition" onClick={logout}>Log Out <span aria-hidden="true">&rarr;</span></button>
        </div>
      </nav>

    </header>

  )
}

export default Navbar