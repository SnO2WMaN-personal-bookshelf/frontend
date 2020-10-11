import React from 'react';
import {useFetchUser} from '~/lib/user';

export default function Home() {
  const {user, loading} = useFetchUser();

  return <main />;
}
