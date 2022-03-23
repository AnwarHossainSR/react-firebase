import { Route, Switch } from "react-router-dom";
import pageRender from "./pageRender";
const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={pageRender} exact />
        <Route path="/:page" component={pageRender} exact />
        <Route path="/:page/:id" component={pageRender} exact />
      </Switch>
    </>
  );
};

export default App;
