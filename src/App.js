import React, { PureComponent } from 'react'
import Header from './components/header/Header'
import SiderRight from './components/siderRight/SiderRight'
import Footer from './components/footer/Footer'
import Routes from './Routes'


class App extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className="ui-header">
                    <Header />
                </div>
                <div className="ui-content container">
                    <div className="row">
                        <div className="col-md-8 order-md-1">
                            <div className="ui-content-left">
                                <Routes />
                            </div>
                        </div>
                        <div className="col-md-4 order-md-2 mb-4">
                            <SiderRight />
                        </div>
                    </div>
                </div>
                <div className="ui-footer">
                    <Footer />
                </div>
            </div>
        )
    }
}
export default App;