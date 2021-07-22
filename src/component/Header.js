import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-left'>
        <div className='header-icon'></div>
        <p className='header-name'>Project Manager</p>
        <div className='search-bar'>
          <input></input>
        </div>
      </div>
      <div className='header-right'>
        <svg
          class='moon'
          fill='none'
          stroke='currentColor'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          width='24'
          height='24'
          viewBox='0 0 24 24'
        >
          <defs></defs>
          <path d='M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z'></path>
        </svg>
        <svg
          class='btn-icon'
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          stroke-width='3'
          stroke-linecap='round'
          stroke-linejoin='round'
        >
          <line x1='12' y1='5' x2='12' y2='19' />
          <line x1='5' y1='12' x2='19' y2='12' />
        </svg>
      </div>
    </div>
  )
}

export default Header
