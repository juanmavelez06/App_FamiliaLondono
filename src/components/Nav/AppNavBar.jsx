import React from 'react'

function AppNavBar({children}) {
  return (
    <div className='navBar'>
      <div className='ctn-navBar'>
        <div className='ctn-logo'>
          <h1>Familia <br /> Londoño</h1>
        </div>
        <nav>
          {children}
        </nav>
      </div>
    </div>
  )
}

export default AppNavBar