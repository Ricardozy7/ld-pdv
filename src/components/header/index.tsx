import {
    FiYoutube,
    FiInstagram,
    FiMail,
    FiAlignJustify
} from "react-icons/fi"
import Images from "utils/imgs"

import Drawer from 'react-modern-drawer'

import 'react-modern-drawer/dist/index.css'
import { useState } from "react"

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleDrawer = () => {
        setIsOpen((prevState: boolean) => !prevState)
    }

    return (
        <div className="relative h-[112px] w-ful z-30 mb-4" >
            <div className="fixed top-0 w-full shadow-md l flex justify-center left-0 bg-main-100">
                <div className="container">
                    <div className="h-full flex items-center justify-between flex-row mb-10 ">
                        <div className="flex items-center gap-4">
                            <img src={Images.logo} alt="logo" width={200} />
                            <a href="/" className="cursor-pointer p-2 bg-primary-500 rounded-full text-main-100 mob-hidden">
                                <FiYoutube />
                            </a>
                            <a href="/" className="cursor-pointer p-2 bg-primary-500 rounded-full text-main-100 mob-hidden">
                                <FiInstagram />
                            </a>
                            <a href="/" className="cursor-pointer p-2 bg-primary-500 rounded-full text-main-100 mob-hidden">
                                <FiMail />
                            </a>
                        </div>
                        <button onClick={toggleDrawer} className="mob mr-10">
                            <FiAlignJustify size={30} />
                        </button>

                        <div className="flex items-center gap-3 mob-hidden">
                            <a href="/" className="px-5 py-2 bg-primary-500 rounded-md colo text-main-100">Cadastre-se</a>
                            <a href="/" className="px-5 py-2 border border-primary-500 rounded-md colo text-primary-500">Accessar</a>
                        </div>
                    </div>
                </div>
            </div>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
            >
                <div className="flex items-center gap-3 flex-col p-2">
                    <a href="/" className="px-5 py-2 w-full bg-primary-500 rounded-md colo text-main-100">Cadastre-se</a>
                    <a href="/" className="px-5 py-2 w-full border border-primary-500 rounded-md colo text-primary-500">Accessar</a>
                </div>
            </Drawer>
        </div>
    )
}

export default Header