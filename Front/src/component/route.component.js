import React from "react";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import routes from '../routes';

export default function RouteConfigExample() {
    return (
        <div>
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
          <Route exact strict path="/">
            <Redirect to="/home" />
          </Route>

        </div>
    );
}

function RouteWithSubRoutes(route) {
    return (
      <Route
      exact 
        path={route.path}
        render={props => (
          <route.component {...props} routes={route.routes} />
        )}
      />
    );
}