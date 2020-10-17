import {useRouter} from 'next/router';
import React from 'react';
import {Bookshelf} from '~/components/Bookshelf/Bookshelf';
import {Layout} from '~/components/Layout/DefaultLayout';

export function OutBookshelfPage() {
  const router = useRouter();
  const {id} = router.query;

  if (id && typeof id === 'string')
    return (
      <Layout>
        <Bookshelf id={id} />
      </Layout>
    );
  return <p>LOADING?</p>;
}

export default OutBookshelfPage;
