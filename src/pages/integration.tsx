import Images from "utils/imgs";

const Integration = () => {
    return (
        <div className="flex items-center flex-col gap-4 w-full">
            <h1 className="f-c1 font-bold  mt-40 mb-20">
                Integração pix
            </h1>
            <div className='flex flex-row justify-center items-center w-full gap-10 min-h-[550px] h-full flex-wrap'>
                <div className="max-w-[600px] w-full h-full flex flex-col">
                    <img
                        width="100%"
                        src={Images.integracaoPix}
                        alt="app força de venda"
                    />
                </div>
                <div className="overflow-hidden f-c max-w-[600px] w-full flex px-[120px] text-start  justify-center bg-[#f5f6fa] h-full mt-5 flex-col gap-10 min-h-[550px] relative">
                    <div className="font-bold uppercase text-primary-500 text-4xl z-10">
                        Receba o pagamento de suas vendas
                    </div>
                    
                    <div className="text-1xl text-text-300 text-4xl z-10">
                        Rápido, Prático <br />
                        e Seguro, Aproveite!
                    </div>
                    <img alt="pix" className="w-52 absolute" style={{ right: '-3.15rem', bottom: '-3.15rem' }} src={Images.pix}/>
                </div>

            </div>
        </div>
    )
}
export default Integration;