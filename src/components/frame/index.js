import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import Logo from "./logo.png"
import "./index.less"
import {admainRoute} from "../../routes"
import {withRouter} from "react-router-dom"


const menu = admainRoute.filter(route=>route.isNav === true) //[{dashboard},{article},{settings}]
const { Header, Content, Footer, Sider } = Layout;

@withRouter
class index extends Component {

    //当我们点击Menu.Item的时候会触发   路由相关的api history location match
    handleMenu = ({key})=>{   
        this.props.history.push(key)
    }
    render() {
        return (
            <Layout>
                <Header className="header qf-header">
                    <div className="logo" >
                        <img  src={Logo} alt="logo"/>
                    </div>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                    <Sider className="site-layout-background" width={200}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={[menu[0].pathname]}
                        selectedKeys={[this.props.location.pathname]}
                        style={{ height: '100%' }}
                        onClick = {this.handleMenu}
                    >
                        {
                            menu.map(route=>{
                                return (
                                    <Menu.Item key={route.pathname}>
                                        {route.icon}
                                        {route.title}
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>{this.props.children}</Content>
                </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        )
    }
}
export default  index