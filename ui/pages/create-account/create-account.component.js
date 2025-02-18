import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  NEW_ACCOUNT_ROUTE,
  IMPORT_ACCOUNT_ROUTE,
  CONNECT_HARDWARE_ROUTE,
  CONNECT_REMOTE_ROUTE
} from '../../helpers/constants/routes';
import NewAccountCreateForm from './new-account.container';
import NewAccountImportForm from './import-account';
import ConnectHardwareForm from './connect-hardware';
import ConnectRemoteForm from './connect-remote';

export default class CreateAccountPage extends Component {
  render() {
    return (
      <div className="new-account">
        <div className="new-account__form">
          <Switch>
            <Route
              exact
              path={NEW_ACCOUNT_ROUTE}
              component={NewAccountCreateForm}
            />
            <Route
              exact
              path={IMPORT_ACCOUNT_ROUTE}
              component={NewAccountImportForm}
            />
            <Route
              exact
              path={CONNECT_HARDWARE_ROUTE}
              component={ConnectHardwareForm}
            />
            <Route
              exact
              path={CONNECT_REMOTE_ROUTE}
              component={ConnectRemoteForm}
            />
          </Switch>
        </div>
      </div>
    );
  }
}
