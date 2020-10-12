import {withAuthenticationRequired} from '@auth0/auth0-react';
import React from 'react';

export function ProfilePage() {
  return <main />;
}

export default withAuthenticationRequired(ProfilePage);
