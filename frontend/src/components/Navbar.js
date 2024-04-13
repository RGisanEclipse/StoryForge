import React, { useState } from 'react';
import logo from '../StoryForgeLogo.jpg';
export default function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return(
        <nav className="bg-[#0f1925] p-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className='flex items-center'>
                    <div className="hidden md:block">
                        <img src={logo} alt="Story Forge Logo" className="h-10 w-auto mr-2" />
                    </div>
                    <a href="#" className="text-white text-xl font-bold">STORY FORGE</a>
                </div>
                <div className="hidden md:flex">
                    <a href="#" className="text-white mx-4">Browse</a>
                    <a href="#" className="text-white mx-4">Community</a>
                    <a href="#" className="text-white mx-4">Write</a>
                    <a href="#" className="text-white mx-4">Login</a>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                        <img src={logo} alt="Burger Menu" className="w-6 h-6" />
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-black opacity-50 transition-opacity" onClick={() => setIsMenuOpen(false)}></div>
            )}
            <div className={`md:hidden fixed inset-y-0 right-0 bg-[#0f1925] w-48 lg:w-96 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out`}>
                <div className="py-4 px-2">
                    <a href="#" className="block text-white px-4 py-2">Browse</a>
                    <a href="#" className="block text-white px-4 py-2">Community</a>
                    <a href="#" className="block text-white px-4 py-2">Write</a>
                    <a href="#" className="block text-white px-4 py-2">Login</a>
                </div>
            </div>
        </nav>
    );
};