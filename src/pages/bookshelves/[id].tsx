import {useRouter} from 'next/router';
import React from 'react';
import {Container} from '~/components/Bookshelf/Bookshelf';
import {LayoutDefault} from '~/components/LayoutDefault';

export function OutBookshelfPage() {
  const router = useRouter();
  const {id} = router.query;

  if (id && typeof id === 'string')
    return (
      <LayoutDefault>
        <Container id={id} />
      </LayoutDefault>
    );
  return <p>LOADING?</p>;
}

export default OutBookshelfPage;
