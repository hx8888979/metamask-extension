import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import SelectedAccount from '../../../components/app/selected-account/selected-account.component';
import { EVENT, EVENT_NAMES } from '../../../../shared/constants/metametrics';

import { useI18nContext } from '../../../hooks/useI18nContext';
import { MetaMetricsContext } from '../../../contexts/metametrics';
import AccountOptionsMenu from './account-options-menu';

function AccountListItem({ identity }) {
  const t = useI18nContext();
  const trackEvent = useContext(MetaMetricsContext);
  const [accountOptionsButtonElement, setAccountOptionsButtonElement] =
    useState(null);
  const [accountOptionsMenuOpen, setAccountOptionsMenuOpen] = useState(false);

  return (
    <div className="menu-bar">
      <SelectedAccount selectedIdentity={identity} />

      <button
        className="fas fa-ellipsis-v menu-bar__account-options"
        data-testid="account-options-menu-button"
        ref={setAccountOptionsButtonElement}
        title={t('accountOptions')}
        onClick={() => {
          trackEvent({
            event: EVENT_NAMES.NAV_ACCOUNT_MENU_OPENED,
            category: EVENT.CATEGORIES.NAVIGATION,
            properties: {
              location: 'Home',
            },
          });
          setAccountOptionsMenuOpen(true);
        }}
      />

      {accountOptionsMenuOpen && (
        <AccountOptionsMenu
          anchorElement={accountOptionsButtonElement}
          onClose={() => setAccountOptionsMenuOpen(false)}
          selectedIdentity={identity}
        />
      )}
    </div>
  );
}

AccountListItem.propTypes = {
  identity: PropTypes.object.isRequired,
};

export function AccountList({ identities }) {
  // const t = useI18nContext();
  // const trackEvent = useContext(MetaMetricsContext);
  // const [accountOptionsButtonElement, setAccountOptionsButtonElement] =
  //   useState(null);
  // const [accountOptionsMenuOpen, setAccountOptionsMenuOpen] = useState(false);
  //
  return (
    <div className="menu-bar">
      {identities?.map((identity) => (
        <AccountListItem key={identity.address} identity={identity} />
      ))}
    </div>
  );
}

AccountList.propTypes = {
  identities: PropTypes.array,
};

export default AccountList;
