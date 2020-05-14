import  {
    Article,
    ArticleEdit,
    Dashboard,
    Login,
    Notfound,
    Settings
} from "../views"


//使用antd里面的icon图标
import {
    DashboardOutlined,
    OrderedListOutlined,
    SettingOutlined
} from '@ant-design/icons';
import React from "react"

//需要实现一个效果？  
// /admin/XXX   dashboard article articleEdit settings

// /login     /404  
export const mainRoute = [
    {
        pathname:"/login",
        component:Login
    },
    {
        pathname:"/404",
        component:Notfound
    }
]


// /admin/XXX   dashboard article articleEdit settings
export const admainRoute = [
    {
        pathname:"/admin/dashboard",
        component:Dashboard,
        title:"仪表盘",
        isNav:true,
        icon:<DashboardOutlined />
    },
    {
        pathname:"/admin/article",
        component:Article,
        exact:true,
        title:"文章列表",
        isNav:true,
        icon:<OrderedListOutlined />
    },
    {
        pathname:"/admin/article/edit/:id",
        component:ArticleEdit,
    },
    {
        pathname:"/admin/settings",
        component:Settings,
        title:"设置",
        isNav:true,
        icon:<SettingOutlined />
    },
]