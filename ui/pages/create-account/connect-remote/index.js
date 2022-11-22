import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../../../components/ui/button';
import TextField from '../../../components/ui/text-field';
import * as actions from '../../../store/actions';
import { getMetaMaskIdentities, getMetaMaskKeyrings } from '../../../selectors';
import AccountList from './account-list';

// function renderError() {
//   return this.state.error ? (
//     <span className="remote-connect__error">{this.state.error}</span>
//   ) : null;
// }

function ConnectRemoteForm({ addRemoteKeyring, keyRings, identities }) {
  const [serverAddr, setServerAddr] = useState();

  const connectedAccounts = useMemo(
    () =>
      keyRings
        .find((keyRing) => keyRing.type === 'Remote Key Pair')
        ?.accounts.map((account) => identities[account])
        ?.filter(Boolean),
    [keyRings, identities],
  );

  const onServerAddrChange = useCallback(
    (addr) => setServerAddr(addr),
    [setServerAddr],
  );

  return (
    <>
      {/* {this.renderError()} */}
      {connectedAccounts ? (
        <>
          <p>
            You already connected those account by Remote Keyring. to
            edit/connect Remote Keyring, please remove them first.
          </p>
          <AccountList identities={connectedAccounts} />
        </>
      ) : (
        <>
          <TextField
            label="Server Address"
            startAdornment="ws://"
            value={serverAddr}
            onChange={(event) => onServerAddrChange(event.target.value)}
          />
          <footer>
            <Button
              type="primary"
              onClick={() => addRemoteKeyring(`ws://${serverAddr}`)}
            >
              Connect
            </Button>
          </footer>
        </>
      )}
    </>
  );
}

ConnectRemoteForm.propTypes = {
  addRemoteKeyring: PropTypes.func,
  keyRings: PropTypes.array,
  identities: PropTypes.object,
};

const mapStateToProps = (state) => ({
  keyRings: getMetaMaskKeyrings(state),
  identities: getMetaMaskIdentities(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    addRemoteKeyring: (uri) => {
      return dispatch(actions.addRemoteKeyring(uri));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectRemoteForm);
