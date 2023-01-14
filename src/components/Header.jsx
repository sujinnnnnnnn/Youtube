import React, { useEffect, useState } from 'react';
import { useNavigate , Link, useParams } from 'react-router-dom';
import {AiFillYoutube} from 'react-icons/ai'
import {GoSearch} from 'react-icons/go'

export default function Header() {
    const [text,setText] = useState('');
    const navigate = useNavigate();
    const {keyword} = useParams();
    const handleSubmit = (e) => {
        e.preventDefault();
        
        navigate(`/videos/${text}`);
        
        
    }   
    useEffect(()=>{
        setText(keyword || '') 
    },[keyword])
    const handleSearch = (route) => {
    navigate(route);
    }
    return (
        <header className='w-full p-3 flex border-b border-zinc-600 mb-5 justify-start items-center '>
            <Link to='/'  className='cursor-pointer flex justify-center items-center'>
                    <AiFillYoutube className='text-brand text-7xl '/>
                    <h1 className='font-bold text-4xl ml-2'>Youtube</h1>
            </Link>
            <form onSubmit={handleSubmit} className='w-full justify-center' type="text" >
                <input  className='border-slate-900 border w-7/12 ml-32 h-11 p-1 outline-none bg-black text-gray-50' type="text" placeholder='Search...' onChange={e=>setText(e.target.value)} value={text}/>
                <button onClick={handleSubmit} className='ml-3 bg-slate-600 text-[#ffffff] p-3'><GoSearch /></button>
            </form>
            
        </header>
    );
}

