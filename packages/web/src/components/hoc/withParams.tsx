import React from 'react';
import { useParams } from 'next/navigation';
import type { Params } from 'next/dist/server/request/params';

function withParams<P>(Component: React.FC<P>) {
  // eslint-disable-next-line react/display-name
  return function (props: P & Params) {
    const params = useParams();
    return <Component {...props} {...params}  />;
  };
}

export default withParams;
