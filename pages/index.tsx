import Layout from '@/components/Layouts/layout';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <div className='p-4 lg:px-[300px] flex items-center bg-gradient-to-r from-blue-300 via-blue-700 to-blue-400'>
        <div className='flex-grow flex flex-col justify-between'>
          <h1 className='text-2xl text-white font-black'>شروع به یادگیری کنید</h1>
          <p className='text-white'>
            همین حالا می‌توانید با زدن دکمهٔ زیر درخواست خود را ثبت کنید و با اولین معلم ارتباط بگیرید.
          </p>
          <Link href='/' className='bg-white p-3 rounded-xl'>
            ثبت درخواست
          </Link>
        </div>
        <div>
          <Image src='/static/banner.webp' alt='banner' width={500} height={500} />
        </div>
      </div>
    </Layout>
  );
}
