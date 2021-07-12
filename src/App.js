import "./App.css";
import { Provider } from "./Context/PostsContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./Components/Homepage";
import CardDetails from "./Components/CardDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Provider>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/Movies/:id" component={CardDetails} />
          </Switch>
        </Provider>
      </div>
    </Router>
  );
}

export default App;
