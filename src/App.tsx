import { Route, Switch } from "react-router-dom";
import pageRender from "./pageRender";
import Home from "./pages";
const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/:page" component={pageRender} exact />
        <Route path="/:page/:id" component={pageRender} exact />
      </Switch>
    </>
  );
};

export default App;
