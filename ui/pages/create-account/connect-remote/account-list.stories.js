import React from 'react';
import { AccountList } from './account-list';

export default {
  title: 'Pages/CreateAccount/ConnectRemote/AccountList',
  id: __filename,
};

export const DefaultStory = (args) => <AccountList {...args} />;

DefaultStory.storyName = 'Default';
DefaultStory.args = {
  identities: {
    123456: { name: 'test account', address: '123456' },
    456789: { name: 'test account 2', address: '456789' },
  },
  accounts: ['123456', '456789'],
};
