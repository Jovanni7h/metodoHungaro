import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Layout from "./components/Layout";
import Hungaro from "./components/Hungaro";



function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/hungaro" component={Hungaro} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
