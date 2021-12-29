import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.js";
import "./pages/homepage/homepage.styles.scss";
import ShopPage from "./pages/shop/shop.js";
import "./pages/shop/shop.styles.scss";
import Header from "./components/header.js";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import { auth, createUserProfileDocument } from "../firebase/firebase.utils.js";
import { onSnapshot } from "firebase/firestore";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // Now calls `onSnapshot` as a function; DocumentReference passed as first argument
        // and callback function is now the second argument
        onSnapshot(userRef, (snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      } else {
        // user is not signed in, so userAuth will be null
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/shop" element={<ShopPage />}></Route>
          <Route exact path="/sign%20in" element={<SignInAndSignUp />}></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
