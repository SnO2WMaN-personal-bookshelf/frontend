import {withAuthenticationRequired} from '@auth0/auth0-react';
import React from 'react';

export function SettingsPage() {
  return <main />;
}

export default withAuthenticationRequired(SettingsPage);
