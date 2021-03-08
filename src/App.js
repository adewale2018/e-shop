import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import CheckoutPage from './pages/checkout/CheckoutPage';
import Header from "./components/header/Header";
import Homepage from "./pages/Homepage/Homepage";
import ShopPage from "./pages/shop/ShopPage";
import SigninAndSignup from "./pages/sign-in-and-sign-up/SigninAndSignup";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selectors';
import { setCurrentUser } from "./redux/user/user.actions";

class App extends Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="px-5 py-10">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SigninAndSignup />
            }
          />
        </Switch>
      </div>
    );
  }
}

/* 
const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state)
});
*/

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
