import { useState } from "react";
import { CiShoppingCart, CiFacebook, CiInstagram, CiTwitter, CiYoutube, CiMenuFries, CiSearch } from "react-icons/ci";
import { MdAccountCircle } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";

const MobMenu = () => {
    const [isMenu, setIsMenu] = useState(false);

    const handleMenu = () => {
     setIsMenu(!isMenu);
    };
 
    const closeMenu = () => {
     setIsMenu(false);
    };
 
  return (
    <>
      {/* Mobile Screen */}
      <div className='min-[1400px]:hidden py-5'>
      <div>
        <h1 className='junge text-xl text-center font-semibold cursor-pointer'>BRAND</h1>
      </div>
      <div className="flex gap-4 justify-center items-center mt-5 cursor-pointer">
        <h4 className="hover:text-red-600 ease-linear duration-200"><CiSearch size={30}/></h4>
        <h4 className="hover:text-red-600 ease-linear duration-200"><MdAccountCircle size={30}/></h4>
        <h4 className="hover:text-red-600 ease-linear duration-200"><CiShoppingCart size={30}/></h4>
        <h4 onClick={handleMenu} className="hover:text-red-600 ease-linear duration-200"><CiMenuFries size={30}/></h4>
      </div>
    </div>

     {/* Overlay */}
     {isMenu && (
        <div 
          className="fixed inset-0 bg-black opacity-80 z-10 " 
          onClick={closeMenu}>
        </div>
      )}
  
      {/* Mobile menu with animation */}
      <motion.div 
        initial={{ x: '-100%' }} 
        animate={{ x: isMenu ? '0%' : '-100%' }} 
        transition={{ type: "spring", stiffness: 60 }} 
        className={`bg-white w-[70%] h-[100vh] absolute top-0 z-20 border-r-2`}
      >
          <div className="flex justify-between mx-5 py-5">
            <h1 className="text-xl font-semibold junge">BRAND</h1>
            <span className="cursor-pointer text-red-600" onClick={handleMenu}><RxCross2 size={25}/></span>
          </div>
          <hr className="mx-10 h-[2px] mt-5"/>
       
          <div className="flex justify-center items-center mt-10">
            <input type="text"
            placeholder="Search Our Store" 
            className="border-[1px] border-slate-300 outline-none text-sm w-[80%] h-[50px] px-4 bg-white" 
            />
            <span><CiSearch size={25} className="ml-[-30px] cursor-pointer"/></span>
          </div>
  
          <div className="flex flex-col ml-[35px] mt-10 gap-10 cursor-pointer font-light">
            <h4 className="hover:text-red-600 ease-linear duration-200">HOME</h4>
            <h4 className="hover:text-red-600 ease-linear duration-200">ABOUT US</h4>
            <h4 className="hover:text-red-600 ease-linear duration-200">PRODUCTS</h4>
            <div className="flex items-center justify-between mr-5">
              <h4 className="hover:text-red-600 ease-linear duration-200">SHOP</h4>
              <span><GoPlus size={20}/></span>
            </div>
            <h4 className="hover:text-red-600 ease-linear duration-200">CONTACT</h4>
          </div>
          <hr className="mx-10 h-[2px] mt-5"/>
  
          <div className="mt-10">
            <div className="ml-[35px] cursor-pointer flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <span className="p-2 border-2 border-slate-300"><MdAccountCircle size={25}/></span>
                <h4 className="font-light">My Account</h4>
              </div>
              <div className="flex items-center gap-4">
                <span className="p-2 border-2 border-slate-300"><CiShoppingCart size={25}/></span>
                <h4 className="font-light">Shopping Cart</h4>
              </div>
            </div>
          </div>
          <hr className="mx-10 h-[2px] mt-5"/>
  
          <div className="flex gap-4 items-center justify-center mt-5 pb-10 cursor-pointer">
            <span className="p-2 bg-slate-200 hover:bg-red-700 hover:text-white ease-linear duration-200"><CiFacebook size={25}/></span>
            <span className="p-2 bg-slate-200 hover:bg-red-700 hover:text-white ease-linear duration-200"><CiInstagram size={25}/></span>
            <span className="p-2 bg-slate-200 hover:bg-red-700 hover:text-white ease-linear duration-200"><CiTwitter size={25}/></span>
            <span className="p-2 bg-slate-200 hover:bg-red-700 hover:text-white ease-linear duration-200"><CiYoutube size={25}/></span>
          </div>
          <p className="text-center junge text-sm opacity-80">&copy; Developed by Kdevs &reg;</p>
      </motion.div>
      </>
  )
}

export default MobMenu