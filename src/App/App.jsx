import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import Footer from "./Home/Footer";
import HomeContactUs from "./Home/HomeContactUs";
import HomeDocReqd from "./Home/HomeDocReqd";
import HomeGSTDesc from "./Home/HomeGSTDesc";
import HomeLandingArea from "./Home/HomeLandingArea";
import HomeNavBar from "./Home/HomeNavBar";
import HomeTaxTypes from "./Home/HomeTaxTypes";
// import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';

class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div>
                <HomeNavBar />
                <HomeLandingArea />
                <HomeGSTDesc />
                <HomeTaxTypes />
                <HomeDocReqd />
                <HomeContactUs />
                <Footer />
                <Router history={history}>
                            <div>
                                {/* <PrivateRoute exact path="/" component={HomePage} /> */}
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegisterPage} />
                            </div>
                </Router>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 