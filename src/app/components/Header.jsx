
// 'use server'
import { auth } from "@clerk/nextjs";
import Link from "next/link";





const Header = () => {
   
  const { userId} = auth();
    console.log(userId);
   
  return (
    <>
        <nav className="bg-blue-700 py-4 px-6 flex items-center
        justify-between mb-5
        ">
            <div className="flex items-center">
                <Link href="">
                <div className="text-lg uppercase font-bold text-white">
                    Clerk App
                    
                    
                    </div></Link>

            </div>
<div className='flex gap-4'>
            <div className="text-white">
                <Link href='sign-in' className='text-gray-500 hover:text-white '>
                
                Sign In
                </Link>

            </div>

            <div className="text-white">
                <Link href='sign-up' className='text-gray-500 hover:text-white '>
                
                Sign Up
                </Link>

            </div>
            </div>

        </nav>
    </>
  )
}
export default Header;