'use client'
import Image from 'next/image'
import Table from './components/table/Table'
import { useRouter } from "next/navigation";
import Navbar from '@/app/components/navbar/Navbar';

export default function Home() {

  let token;

  if (typeof window !== 'undefined') {
    token = localStorage.getItem('testing_user');
  }

  const router = useRouter();

  if (!token) {
    router.push('/auth/login')
  }

  return (
    <div>
      <Navbar />
      <Table token={token} />
    </div>
  )
}
