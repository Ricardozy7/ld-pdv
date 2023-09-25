import Images from "utils/imgs";

const Print = () => {
    return (
        <div className="flex items-center flex-col gap-4 w-full mt-36">
            <div className='flex flex-row justify-center items-center w-full gap-10  h-full flex-wrap '>
                <div className="bg-[#f5f6fa] container flex flex-row flex-wrap max-w-[1280px]">
                    <div className="max-w-[600px] w-full h-full flex flex-col">
                        <img
                            width="100%"
                            src={Images.bolbinas}
                            alt="app força de venda"
                        />
                    </div>
                    <div className="f-c max-w-[600px] w-full flex px-[120px] text-start  justify-center h-full flex-col gap-10 bolb">
                        <div className="font-bold text-text-500 ">
                            Impressões em bolbinas.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Print;