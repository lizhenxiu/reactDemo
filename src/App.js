import React,{PureComponent} from 'react'
import Header from './components/header/Header'
import SiderRight from './components/siderRight/SiderRight'
import Footer from './components/footer/Footer'
import Routes from './Routes'


class App extends PureComponent{
    constructor(props) {
        super(props)
        this.state={}
    }        
    render(){
        return(
            <div>
               <div className='ui-header'>
                    <Header/>
                </div>
                <div className='ui-sider-right'>
                    <SiderRight/>
                </div>
                <div className='ui-content'>
                    <Routes />
                </div>
                <div className='ui-footer'>
                    <Footer/>
                </div>
            </div>
        )
    }
}
export default App;