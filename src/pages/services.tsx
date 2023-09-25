import Images from "utils/imgs";

const Services = () => {
    return (
        <div className="flex items-center flex-col gap-4 w-full">
            <h1 className="f-c1 font-bold  mt-40 mb-20">
                Conheça nossos serviços
            </h1>
            <div className='flex flex-row justify-center items-center w-full gap-10 flex-wrap'>
                <div className="flex gap-5 h-[43.75rem] max-w-[480px] flex-col">
                    <div className="bg-main-200 w-full max-w-[480px] rounded-xl flex flex-col items-center gap-5 shadow-2xl max-h-[600px] h-full overflow-hidden">
                        <h2 className="text-2xl font-bold p-2 text-primary-500">Força de venda</h2>
                        <img
                            width="100%"
                            src={Images.forcavenda}
                            alt="app força de venda" />
                    </div>
                    <span className="text-text-300 text-2xl mt-5 text-center">
                        Um aplicativo feito para facilitar suas vendas internas e externas
                    </span>
                </div>
                <div className="flex gap-5 h-[43.75rem] max-w-[480px] flex-col">
                    <div className="bg-main-200 w-full max-w-[480px] rounded-xl flex flex-col items-center gap-5 shadow-2xl max-h-[600px] h-full justify-between">
                        <h2 className="text-2xl font-bold p-2 text-primary-500">Consulta preço</h2>
                        <img
                            width="100%"
                            className="bottom-0"
                            src={Images.consultapreco}
                            alt="app Consulta preço" />
                    </div>
                    <span className="text-text-300 text-2xl mt-5 text-center">
                        consulta de estoque e preço, <br /> alteração e levantamento de estoque
                    </span>
                </div>

            </div>
        </div>
    )
}
export default Services;