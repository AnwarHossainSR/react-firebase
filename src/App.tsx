import {
  onAuthStateChanged,
  sendEmailVerification,
  signOut,
} from "firebase/auth";
import { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Header from "./components/header";
import { auth } from "./Firebase";
import pageRender from "./pageRender";
const App = () => {
  const history = useHistory();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        if (!user.emailVerified) {
          await sendEmailVerification(user);
          await signOut(auth);
          return history.push("/email_verified");
        }
      }
    });

    return unsubscribe;
  }, [history]);
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
