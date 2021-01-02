import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import EmailList from "./Components/EmailList/EmailList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mail from "./Components/Mail/Mail";
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app_body">
          <Sidebar />
          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>
            <Route path="/" exact>
              <EmailList />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
