import React from 'react'

const Wrapper = ({children, className}) => {
  return (
    <div className={`md:flex gap-2 lg:flex place-content-center w-full max-w-7xl px-5 md:px-10 mx-auto ${className || ""}`}>{children}</div>
  )
}

export default Wrapper


