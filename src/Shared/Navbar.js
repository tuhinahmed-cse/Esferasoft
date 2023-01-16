import React from 'react';
import img3 from '../assets/logo.png'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl"> <img src={img3} style={{height:'40px'}} alt="" /> </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            
           
            <li tabIndex={0}>
              
              
              <a>
                
               Solutions
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul className="p-2 bg-base-100">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>

            </li>
            <li tabIndex={1}>
              
              
              <a>
                
               Services
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul className="p-2 bg-base-100">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>

            </li>
            
            <li><a>Portfolio</a></li>
            <li><a>Company</a></li>
            <li><a>Insights</a></li>
            <button className="btn" style={{background:"tomato", border:'none'}}>Get a Quote</button>
          </ul>
        </div>
      </div>
    );
};

export default Navbar;