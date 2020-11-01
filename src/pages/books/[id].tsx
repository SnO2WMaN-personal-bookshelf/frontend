import {GetStaticPaths, GetStaticProps, NextPage} from 'next';
import React from 'react';
import {BookPage, BookPageProps} from '~/components/Page/BookPage';
import {SdkForPageQueries} from '~/lib/graphql-request';

export type PageProps = BookPageProps;
export const Page: NextPage<PageProps> = ({children, ...rest}) => {
  return <BookPage {...rest} />;
};

export type UrlQuery = {id: string};
export const getStaticProps: GetStaticProps<PageProps, UrlQuery> = async ({
  params,
}) => {
  if (!params?.id) throw new Error('');

  const {book} = await SdkForPageQueries.GetBook({id: params.id});

  const series: PageProps['series'] = book.series.map(({books, ...rest}) => ({
    ...rest,
    books: books.edges.map(({node}) => ({...node.book})),
    booksTotal: books.aggregate.count,
  }));
  const authors: PageProps['authors'] = book.authors.map(
    ({author: {books, ...rest}}) => ({
      ...rest,
      books: books.edges.map(({node}) => ({...node})),
    }),
  );

  return {
    props: {
      ...book,
      series,
      authors,
    },
  };
};

export const getStaticPaths: GetStaticPaths<UrlQuery> = async () => {
  const {allBooks} = await SdkForPageQueries.GetAllBookIDs();

  return {
    paths: allBooks.map(({id}) => ({
      params: {id},
    })),
    fallback: true,
  };
};

export default Page;
