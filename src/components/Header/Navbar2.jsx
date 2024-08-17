import MobMenu from "./MobMenu";


const Navbar2 = () => {
  
  return (
    <>
    <div className="flex font-light text-[15px] justify-center items-center gap-10 cursor-pointer max-[1400px]:hidden">
      <h4 className="hover:text-red-600 ease-linear duration-200">HOME</h4>
      <h4 className="hover:text-red-600 ease-linear duration-200">ABOUT US</h4>
      <h4 className="hover:text-red-600 ease-linear duration-200">PRODUCTS</h4>
      <h4 className="hover:text-red-600 ease-linear duration-200">SHOP</h4>
      <h4 className="hover:text-red-600 ease-linear duration-200">CONTACT</h4>
    </div>
    <MobMenu/>
    </>
  )
}

export default Navbar2;
