import Layout from '@/components/Layouts/layout';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <div className='p-4 lg:px-48 flex flex-col md:flex-row items-center bg-gradient-to-r from-blue-300 via-blue-700 to-blue-400'>
        <div className='flex-grow flex flex-col justify-center align-start gap-4'>
          <h1 className='text-4xl text-white font-black'>شروع به یادگیری کنید</h1>
          <p className='text-white'>
            همین حالا می‌توانید با زدن دکمهٔ زیر درخواست خود را ثبت کنید و با اولین معلم ارتباط بگیرید.
          </p>
          <div className='my-2'>
            <Link href='/' className='bg-white p-3 rounded-xl'>
              ثبت درخواست
            </Link>
          </div>
        </div>
        <div className='mt-4 md:mt-0'>
          <Image src='/static/banner.webp' alt='banner' width={500} height={500} />
        </div>
      </div>
      <div className='p-4 py-16 lg:px-48 flex flex-col bg-gray-200 justify-center items-center gap-4'>
        <h2 className='text-3xl font-black'>سیستم پشتیبانی آموزشی خود را ملاقات کنید</h2>
        <div className='flex flex-col md:flex-row md:justify-between w-full'>
          <div className='flex flex-col justify-center items-center gap-4 hover:bg-white p-4'>
            <div className='mt-4 md:mt-0'>
              <Image src='/static/card1.webp' alt='banner' width={250} height={250} />
            </div>
            <h3 className='text-xl font-bold'>پشتیبانی تخصصی تحصیلی شما</h3>
            <p className='text-center'>
              با مشاوره ۲۴/۷، به دستاوردهای یادگیری بیشتر برسید. هر دانشجو می‌تواند سوالات خود را مطرح کند، برای
              امتحانات آماده شود، و بهترین کارهای خود را برای هر کلاس ارائه دهد.
            </p>
            <Link href='/' className='text-blue-600 hover:text-blue-800'>
              بیشتر بدانید
            </Link>
          </div>
          <div className='flex flex-col justify-center items-center gap-4 hover:bg-white p-4'>
            <div className='mt-4 md:mt-0'>
              <Image src='/static/card2.webp' alt='banner' width={250} height={250} />
            </div>
            <h3 className='text-xl font-bold'>پشتیبانی تخصصی تحصیلی شما</h3>
            <p className='text-center'>
              با مشاوره ۲۴/۷، به دستاوردهای یادگیری بیشتر برسید. هر دانشجو می‌تواند سوالات خود را مطرح کند، برای
              امتحانات آماده شود، و بهترین کارهای خود را برای هر کلاس ارائه دهد.
            </p>
            <Link href='/' className='text-blue-600 hover:text-blue-800'>
              بیشتر بدانید
            </Link>
          </div>
          <div className='flex flex-col justify-center items-center gap-4 hover:bg-white p-4'>
            <div className='mt-4 md:mt-0'>
              <Image src='/static/card3.webp' alt='banner' width={250} height={250} />
            </div>
            <h3 className='text-xl font-bold'>پشتیبانی تخصصی تحصیلی شما</h3>
            <p className='text-center'>
              با مشاوره ۲۴/۷، به دستاوردهای یادگیری بیشتر برسید. هر دانشجو می‌تواند سوالات خود را مطرح کند، برای
              امتحانات آماده شود، و بهترین کارهای خود را برای هر کلاس ارائه دهد.
            </p>
            <Link href='/' className='text-blue-600 hover:text-blue-800'>
              بیشتر بدانید
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
