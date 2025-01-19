import Header from "@/components/managerTemplate/header"
import RecommendedFeature from "@/components/managerTemplate/recommended-feature"
import SpecialOffers from "@/components/gameCommponets/special-offers"
import GameCategory from "@/components/gameCommponets/game-category"
import ManagerTemplate from "@/components/managerTemplate"
import MenuList from "./admin/menuList"
import GameList from "@/components/gameCommponets/game-list"
import Sponsor from "@/components/managerTemplate/sponsor"
import FAQ from "@/components/managerTemplate/faq"
import Footer from "@/components/managerTemplate/footer"

const DashboardPage = () => {
    return (
        <ManagerTemplate title="Dashboard" id="dashboard" menuList={MenuList}>
            <Header></Header>
            <RecommendedFeature></RecommendedFeature>
            <SpecialOffers></SpecialOffers>
            <GameCategory></GameCategory>
            <GameList></GameList>
            <Sponsor></Sponsor>
            <FAQ></FAQ>
            <Footer></Footer>
        </ManagerTemplate>
    )
}
export default DashboardPage