import { CiShoppingCart,CiPhone, CiSearch } from "react-icons/ci";
import { MdAccountCircle } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className='flex mx-[140px] justify-between items-center py-10 max-[1400px]:hidden'>
    {/* Brand Logo */}
    <div>
      <h1 className='junge text-xl font-semibold'>BRAND</h1>
    </div>

      {/* Search and Phone */}
    <div className='flex w-full ml-[100px] gap-[200px]'>
      <div className='flex items-center gap-4'>
        <div><CiPhone size={30}/></div>
        <div>
          <h4 className="text-[15px] font-semibold junge">PHONE</h4>
          <h4 className="junge text-[15px] cursor-pointer hover:text-red-600 ease-linear duration-200">123-456-789</h4>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <input 
        type="text"  
        placeholder='Search Our Store'
        className="border-[1px] text-sm font-light rounded-full border-black w-[400px] h-[44px] px-4 outline-none "
        />
        <span className="ml-[-30px] opacity-70 cursor-pointer"><CiSearch/></span>
      </div>
    </div>

   {/* Cart and Profile */}
    <div className='flex'>
       <div className='flex items-center gap-4 mx-2'>
       <h4 className="hover:text-red-600 ease-linear duration-200 cursor-pointer"><MdAccountCircle size={30}/></h4>
       <h4 className="hover:text-red-600 ease-linear duration-200 cursor-pointer" ><CiShoppingCart size={30}/></h4>
       </div>
       <div className="w-full">
        <h4 className="text-[12px] font-semibold hover:text-red-600 ease-linear duration-200">YOUR.CART</h4>
        <h4 className="text-[11px] font-bold text-red-600">$0.00</h4>
       </div>
    </div>
  </nav>
  )
}

export default Navbar