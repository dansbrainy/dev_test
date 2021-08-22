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
              <img
                src="images/Betway_White.webp"
                className="small"
                alt="brand"
              />
            </Link>
          </div>

          <div>
            <Link className="button" to="/">
              <button className="signin">Login</button>
            </Link>
            <Link className="button" to="/">
              <button className="signup">Sign up</button>
            </Link>
          </div>
        </header>

        <main>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>

        <footer className="row center"></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
