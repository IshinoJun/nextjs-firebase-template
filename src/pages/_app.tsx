import React from 'react';
import '../styles/globals.scss';
import '../lib/firebase';
import { AppProps } from 'next/app';
import { FirebaseApp } from '../components';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <FirebaseApp>
      <Component {...pageProps} />
    </FirebaseApp>
  );
};

export default MyApp;
