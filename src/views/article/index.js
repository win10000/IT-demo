import React, { Component } from 'react'
import {Card,Button,Table} from "antd"


const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
];
  
const columns = [
    {
        title: '姓名',   //列的名字
        dataIndex: 'name', //这一列的数据需要显示name
        key: 'name',
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
    },
];
export default class index extends Component {
    render() {
        return (
            <Card 
                title="文章列表" 
                extra={<Button>More</Button>} 
            >
                <Table 
                dataSource={dataSource} 
                columns={columns} 
                pagination={{
                    position:['bottomRight'],
                    // total:20,
                    // pageSize:5,
                    // hideOnSinglePage:true  //一页的时候不显示分页器
                }}
                />
            </Card>
        )
    }
}
