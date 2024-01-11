import Products from '@/components/Products';
import React from 'react'

const page = ({params}) => {
    const data = [
        { id: 1, name: "Home", url: "/" },
        { id: 2, name: "About", url: "/about" },
        { id: 3, name: "Categories", subMenu: true },
        { id: 4, name: "Contact", url: "/contact" },
      ];
      
      const subMenuData = [
        { id: 1, name: "Jordan", doc_count: 11,  },
        { id: 2, name: "Sneakers", doc_count: 8,  },
        { id: 3, name: "Running shoes", doc_count: 64,  },
        { id: 4, name: "Football shoes", doc_count: 107,},
      ];
  return (

  <div className='items-center mx-[5%]  mt-8'>
  <h1 className='text-4xl font-bold text-center'>Running Shoes</h1>
  <div>
  
<div className="grid  md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-5 my-14">
<Products className={`border`}/>
<Products  className={`border`}/>
<Products className={`border`}/>
<Products className={`border`} />
<Products className={`border`}/>
<Products className={`border`} />
<Products className={`border`}/>
<Products className={`border`}/>
</div>
  </div>
  </div>

    )
}

export default page