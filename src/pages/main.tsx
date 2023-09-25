import { Parallax } from 'react-scroll-parallax';
import Images from 'utils/imgs';

const Main = () => {
    return (
        <div className="flex items-center flex-col gap-4 p-2 text-center mt-10">
            <span className='text-text-300 text-lg'>
                Mais que um sistema
            </span>
            <h1 className="font-[900] f-c1 text-text-500">
                Prático, rápido, clean... <br />
                Assim é o host
            </h1>
            <div className="mt-4 p-8 flex flex-row gap-16 flex-wrap text-center justify-center container">
                {/* <Parallax opacity={[1.2, 0.5]} scale={[1, 1.5]}> */}
                <img
                    className="max-w-3xl"
                    width="100%"
                    src={Images.main}
                    alt="super sistema" />
                <div className='text-start text-text-300 max-w-[500px] text-sm'>
                    <span className='text-4xl font-bold text-primary-500'>
                        <span className='px-1 bg-primary-500 text-[#fff]'>Host</span> um sistema<br />
                        completo para sua
                        empresa ter<br />
                        controle total.

                    </span><br /><br />
                    Emissão de cupons e notas fiscais e eletrônicas. <br /><br />
                    Abertura e fechamento de caixa automático.<br /><br />

                    Gestão de estoque e clientes, impressão de notas promissários,

                    confissão de dívida e carnês na bobina.<br /><br />

                    Grade para cor e tamanho, controle de troca de produto.<br /><br />

                    Frente de caixa fácil e rápido, importação de NF-e pela chave
                    de acesso, devolução em 2 clique, integração com TEF,
                    integração com balanças, etiquetas, gaveta e contigência
                    automática da NFCe.
                    <br /><br />
                    Ordem de serviço com anexo de imagens e documentos, sistema
                    de busca por referência e informação de localização

                    física do produto.

                </div>
                {/* </Parallax> */}
            </div>
        </div>
    )
}
export default Main;