import { Icons } from "utils/imgs";

const Management = () => {
    return (
        <div className="flex items-center flex-col gap-4 pb-40 f-c1 p-4 w-full">
            <h1 className="font-bold  mt-40 mb-20 text-center">
                Sistema de gestão, <br /> Para sua loja!
            </h1>
            <div className="flex flex-row flex-wrap management-container">
                <div className="flex flex-col gap-14">
                    <ItemsManagement title="Supermercados" icon={Icons.supermercado}/>
                    <ItemsManagement title="Auto Peças" icon={Icons.ferreamentas}/>
                    <ItemsManagement title="Ótica" icon={Icons.otica}/>
                </div>
                <div className="flex flex-col gap-14">
                    <ItemsManagement title="Loja de variedades" icon={Icons.loja}/>
                    <ItemsManagement title="Roupas e vestuários" icon={Icons.roupas}/>
                    <ItemsManagement title="Materias de construção" icon={Icons.construcao}/>
                </div>
            </div>
        </div>
    )
}
export default Management;

const ItemsManagement = (props: { title: string; icon: string }) => {

    const { title, icon } = props;

    return (
        <div className="flex flex-row gap-4 items-center">
        <span className="flex flex-row items-center">
            <div className="p-4 rounded-full bg-primary-500 w-24 h-24 flex items-center justify-center">
                <img src={icon} alt={title} width="100%" />
            </div>
        </span>
        <div className="font-[900] uppercase text-primary-500">
            {title}
        </div>
    </div>
    )
}