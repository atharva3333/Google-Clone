import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
    {url: '/search', text:'All'},
    {url: '/news', text:'News'},
    {url: '/image', text:'Images'},
    {url: '/videos', text:'Videos'},
]

export const Links = () => {
  return (
    <div className='flex sm:justify-around gap-8 font-bold mt-4'>
              {links.map(({url,text})=>(
            <NavLink to={url} className='m-2' activeClassName='text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2'>
                {text}
            </NavLink>
              ))}
    </div>
  )
}
