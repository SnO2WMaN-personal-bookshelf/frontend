import {useAuth0} from '@auth0/auth0-react';
import clsx from 'clsx';
import {NextPage} from 'next';
import React from 'react';
import {useEffectOnce} from 'react-use';
import {LayoutDefault} from '~/components/LayoutDefault';

export const LogoutPage: NextPage = ({children}) => {
  const {logout} = useAuth0();

  useEffectOnce(() => {
    logout();
  });

  return <LayoutDefault className={clsx()} />;
};

export default LogoutPage;
