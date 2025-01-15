import { ReactNode } from "react"

interface IPropMenu {
    id: string,
    path: string,
    label: string,
}

let MenuList: IPropMenu[] = [
    {
        id: `dashboard`,
        path: `/admin/dashboard`,
        label: `Dashboard`,
    },
    {
        id: `community`,
        path: `/admin/community`,
        label: `Community`,
    },
    {
        id: `about`,
        path: `/admin/about`,
        label: `About`,
    },
    {
        id: `support`,
        path: `/admin/support`,
        label: `Support`,
    },
]

export default MenuList