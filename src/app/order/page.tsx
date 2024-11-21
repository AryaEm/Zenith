import OrderLayOut from './order'
import Sidebar from '@/components/sidebar'

export default function Order() {
    return(
        <div className="bgPrimaryColor h-dvh">
            <OrderLayOut></OrderLayOut>
            <Sidebar></Sidebar>
        </div>
    )
}