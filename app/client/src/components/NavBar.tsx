import Link from 'next/link';
import React from 'react';

type NavBarProps = {
    
};

const NavBar:React.FC<NavBarProps> = () => {
    
    return <div className='flex items-center justify-between sm:px-12 px-2 md:px-24'>
        <Link href="/" className='flex items-center justfy-center h-20'>
            <img className='h-full' src='/logo.png' alt='LeetClone'/>          
        </Link>
        <div className="flex items-center">
            <button className='bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium border-2 border-transparent
                hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange
                transition duration-300 ease-in-out'
            >
                Sign In
            </button>
        </div>
    </div>;
}
export default NavBar;