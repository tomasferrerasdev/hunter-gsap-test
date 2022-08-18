import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Transition, TransitionGroup } from "react-transition-group";
import { play, exit } from "./gsapAnimation/pageAnimation";

// Pages
import Home from "./pages/home";
import Historia from "./pages/historia";
import NotFound from "./pages/404";
import About from "./pages/about";

function App() {
  return (
    <Router>
      <div className="container">
        <Route
          render={({ location }) => {
            const { pathname, key } = location;

            return (
              <>
                <TransitionGroup component={null}>
                  <Transition
                    key={key}
                    appear={true}
                    onEnter={(node, appears) => play(pathname, node, appears)}
                    onExited={(node, appears) => exit(node, appears)}
                    timeout={{ enter: 1750, exit: 100 }}
                  >
                    <Switch location={location}>
                      <Route exact path="/" component={Home} />
                      {/*<Route path="/historia" component={Historia} />*/}

                      <Route path="/nosotros" component={About} />
                      <Route path="/404" component={NotFound} />
                      <Redirect to="/404" />
                    </Switch>
                  </Transition>
                </TransitionGroup>
              </>
            );
          }}
        />
      </div>
    </Router>
  );
}

export default App;
