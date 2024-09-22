import React, { useContext } from 'react'
import { Themecontext } from '../../context/Themecontext'

export const Themeswitch = () => {
  const { theme, toggleTheme } = useContext(Themecontext)
  return (
    <div>
      <button type='button' className='theme' onClick={toggleTheme}>
        {theme === 'dark' ? 'light' : 'dark'}
      </button>
    </div>
  )
}
