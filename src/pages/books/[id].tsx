import {useRouter} from 'next/router';
import React from 'react';
import {useGetBookQuery} from '~~/generated/graphql';

export function BookPage() {
  const router = useRouter();
  const {id} = router.query;

  const {data, loading} = useGetBookQuery({
    variables: {
      id: id as string,
    },
  });

  if (loading || !data) {
    return <p>Loading</p>;
  }

  return (
    !loading &&
    data && (
      <main>
        <p>{data.book.title}</p>
        {data.book.cover && <img src={data.book.cover} alt={data.book.title} />}
        {data.book.isbn && <p>{data.book.isbn}</p>}
      </main>
    )
  );
}
export default BookPage;
