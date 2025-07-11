import React from 'react'

const Header = () => {
  return (
    <div id='header_section'>
      <div id='header_left_section'>
        <img src='https://logowik.com/content/uploads/images/free-food-delivery8485.logowik.com.webp' id='header_logo'></img>
      </div>
      <div id='header_right_section'>
        {["Home", "About", "Contact Us", "Cart"].map((item) => (
          <button key={item} className='header_btn'>{item}</button>
        ))}
      </div>
    </div>
  )
}

export default Header
