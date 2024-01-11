import Products from "@/components/Products";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <main className="mx-[10%]" >
      <Slider />

      {/* Product Start */}

  <div>
  <div className="space-y-2 mt-8">
        <h1 className="md:text-2xl text-md font-bold text-center "> Cushioning for Your Miles</h1>
        <p className="text-center text-xs">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla nobis quod officia incidunt accusantium sint ducimus. Doloribus nihil soluta magnam</p>
      </div>
<div className="grid  md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-5 my-14">
<Products className={`border`}/>
<Products className={`border`}/>
<Products className={`border`}/>
<Products className={`border`}/>
<Products className={`border`} />
<Products className={`border`}/>
<Products className={`border`}/>
<Products className={`border`}/>
</div>
  </div>
      {/* Product End */}
    </main>
  )
}
