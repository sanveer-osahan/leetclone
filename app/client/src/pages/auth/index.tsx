import NavBar from '@/components/NavBar';
import React from 'react';

type AuthPageProps = {
    
};

const index:React.FC<AuthPageProps> = () => {
    
    return (
        <div className='bg-gradient-to-b from-gray-600 to-black h-screen relative'>
            <div className='max-w-7xl mx-auto'>
                <NavBar/>
                <div className='flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none'>
                    <img src="/hero.png" alt="Hero img"/>
                </div>
            </div>
        </div>
    );
}
export default index;