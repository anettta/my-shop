import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.js";
import "./pages/homepage/homepage.styles.scss";
import ShopPage from "./pages/shop/shop.js";
import "./pages/shop/shop.styles.scss";
import Header from "./components/header.js";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import { auth, createUserProfileDocument } from "../firebase/firebase.utils.js";
import { onSnapshot } from "firebase/firestore";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user-actions.js";

class App extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     currentUser: null,
  //   };
  // }
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // Now calls `onSnapshot` as a function; DocumentReference passed as first argument
        // and callback function is now the second argument
        onSnapshot(userRef, (snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        // user is not signed in, so userAuth will be null
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/shop" element={<ShopPage />}></Route>
          <Route
            path="/sign%20in"
            element={
              this.props.currentUser ? (
                <Navigate replace to="/" />
              ) : (
                <SignInAndSignUp />
              )
            }
          ></Route>
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
