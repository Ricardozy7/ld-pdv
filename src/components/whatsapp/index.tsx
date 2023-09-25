import {
    FaWhatsapp
} from "react-icons/fa"
import {
    FiChevronUp
} from "react-icons/fi"
const Whatsapp = () => {
    return (
        <a
            href="/"
            className="fixed p-2 shadow-lg bottom-10 right-10 z-50 bg-main-50 text-primary-500 font-bold flex flex-row gap-4 items-center cursor-pointer">
            <FaWhatsapp color={"#075e54"} size={25} />
                Whatsapp
            <FiChevronUp size={25} />
        </a>
    )
}
export default Whatsapp;