import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

const LayoutTest = () => {
    return (

        <Layout>
            <Header>
                <Menu mode='horizontal'>
                    <Menu.Item key='item1'>Item 1</Menu.Item>
                    <Menu.Item key='item2'>Item 2</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content">Content</div>
            </Content>
        </Layout>

        

    )
}

export default LayoutTest
