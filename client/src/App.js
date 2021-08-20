import { BrowserRouter, Link, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import SigninScreen from "./screens/SigninScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              test_dev
            </Link>
          </div>

          <div></div>
        </header>

        <main>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>

        <footer className="row center">All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
