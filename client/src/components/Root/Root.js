import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from 'components/Layout';
import StartMenu from 'routes/StartMenu';
import LevelsMenu from 'routes/LevelsMenu';
import LevelCreator from 'routes/LevelCreator';

const Root = () => (
  <Layout>
    <Switch>
      <Route path="/" component={StartMenu} exact />
      <Route path="/levels" component={LevelsMenu} exact />
      <Route path="/level-creator" component={LevelCreator} exact />
      <Redirect to="/" />
    </Switch>
  </Layout>
);

export default Root;