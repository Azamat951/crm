import { Button } from "@/training/Button"
import { HisotryIcon, HomeIcon, InvIcon, LogOutIcon, MembersIcon, PaymentIcon, POSIcon, ProductsIcon } from "@/components/Icons"
import Logo from "@/assets/Logo.png"
import { Outlet } from "react-router-dom"
import { useState } from "react"
const Members = () => {
    const [isOpen,setIsOpen] = useState(false)
    return <>
    <div className="flex min-h-screen">
    <div className={`
    SideBar
    fixed md:sticky top-0 left-0
    w-[280px] bg-[#343743] h-screen px-[26px]
    z-50
    transform transition-transform duration-300
    ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
  `}>
    <button
    onClick={() => setIsOpen(false)}
     className="text-white text-xl md:hidden absolute right-4 top-2">✕</button>
        <div className="flex gap-y-[11px] flex-col">
        <div className="img mt-[26px] mb-[35px] my-auto flex justify-center">
        
        
            <img src={Logo} alt="" />
        </div>
        <Button text="Home" to="Home" icon={<HomeIcon/>} style="text-white bg-transparent duration-800 hover:bg-[#9B74F033] w-[228px]" iconColor={"default"}/>
        <Button text="Members" to="Members" icon={<MembersIcon/>} style="text-white bg-transparent duration-800 hover:bg-[#9B74F033] w-[228px]" iconColor={"default"}/>
        <Button text="Store" icon={<POSIcon/>} style="text-white bg-transparent duration-800 hover:bg-[#9B74F033] w-[228px]" iconColor={"default"}/>
        <Button text="Inventory" icon={<InvIcon/>} style="text-white bg-transparent duration-800 hover:bg-[#9B74F033] w-[228px]" iconColor={"default"}/>
        <Button text="Products" icon={<ProductsIcon/>} style="text-white bg-transparent duration-800 hover:bg-[#9B74F033] w-[228px]" iconColor={"default"}/>
        <Button text="Visit History" icon={<HisotryIcon/>} style="text-white bg-transparent duration-800 hover:bg-[#9B74F033] w-[228px]" iconColor={"default"}/>
        <Button text="Payments" icon={<PaymentIcon/>} style="text-white bg-transparent duration-800 hover:bg-[#9B74F033] w-[228px]" iconColor={"default"}/>
        </div>
        <div className="mb-4 absolute bottom-0">
        <Button
        text="Logout"
        icon={<LogOutIcon />}
        style="text-white bg-transparent duration-800 hover:bg-[#9B74F033] w-[228px]"
        iconColor="default"/>
        </div>
        
    </div>
    <div className="flex-1">
        <button
    onClick={() => setIsOpen(true)}
    className="text-white text-2xl md:hidden m-4"
  >
    ☰
  </button>
        <Outlet />
      </div>
    </div>
    </>
}
export default Members


