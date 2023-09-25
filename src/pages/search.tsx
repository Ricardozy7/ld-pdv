import Images from "utils/imgs";
import Marquee from "react-fast-marquee";
import { FiYoutube } from "react-icons/fi";
const Search = () => {
    return (
        <div className="flex items-center flex-col gap-4 w-full f-c1">
            <h1 className="font-bold  mt-40 mb-20 text-center">
                Tudo que você precisa, <br /> em um só lugar
            </h1>
            <Marquee pauseOnHover>
                {[...Array(15)].map((value) => (
                    <div className="h-[220px] w-[280px] bg-red-500 mx-3 rounded-xl flex items-center justify-center flex-col gap-5">
                        <FiYoutube color="white"/>
                        <h5 className="text-sm text-main-100 text-center">Sua fonte de <br /> pesquisa</h5>
                    </div>
                ))}
            </Marquee>
        </div>
    )
}
export default Search;