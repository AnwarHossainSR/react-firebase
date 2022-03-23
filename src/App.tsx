import { Route, Switch } from "react-router-dom";
import Header from "./components/header";
import pageRender from "./pageRender";
const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={pageRender} exact />
        <Route path="/:page" component={pageRender} exact />
        <Route path="/:page/:id" component={pageRender} exact />
      </Switch>
    </>
  );
};

export default App;
