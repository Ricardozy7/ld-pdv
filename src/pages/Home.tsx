import Services from "pages/services"
import Main from "./main";
import Integration from "./integration";
import Header from "components/header";
import Search from "./search";
import Management from "./management";
import Whatsapp from "components/whatsapp";
import Print from "./print";
const Home = () => {
    return (
        <>
            <Header />
            <div className="flex flex-col ga-5 scrollbox max-auto">
                <Main />
                <Print />
                <Services />
                <Integration />
            </div>
            <Search />
            <Management />
            <Whatsapp />
        </>
    )
}

export default Home;