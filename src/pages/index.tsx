import React from 'react';
import {useFetchUser} from '~/lib/user';

export default function Home() {
  const {user, loading} = useFetchUser();

  return (
    <main>
      {loading && <p>Loading login info...</p>}
      {!loading && !user && (
        <p>
          To test the login click in <i>Login</i>
        </p>
      )}
      {!loading && user && (
        <>
          <p>Profile:</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )}
      <a href="/api/login">Login</a>
      <a href="/api/logout">Logout</a>
    </main>
  );
}
