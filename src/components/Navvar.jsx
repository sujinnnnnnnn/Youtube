import React from 'react';
import { Link } from 'react-router-dom';
export default function Navvar() {
    return (
        <nav>
             <Link to='/'>Home</Link>
            <Link to="/videos">Videos</Link>
            
        </nav>
    );
}

