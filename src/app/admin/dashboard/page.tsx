import Header from "@/components/managerTemplate/header"
import RecommendedFeature from "@/components/managerTemplate/recommended-feature"
import SpecialOffers from "@/components/managerTemplate/special-offers"
import GameCategory from "@/components/managerTemplate/game-category"

const DashboardPage = () => {
    return (
        <div className="">
            <Header></Header>
            <RecommendedFeature></RecommendedFeature>
            <SpecialOffers></SpecialOffers>
            <GameCategory></GameCategory>
        </div>
    )
}
export default DashboardPage