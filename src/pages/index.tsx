import firebase from 'firebase/app';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import Head from 'next/head';
import React, { useContext } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { FirebaseContext, UserContext } from '../contexts';
import styles from './index.module.scss';

const IndexPage: NextPage = () => {
  const { user } = useContext(UserContext);
  const { auth } = useContext(FirebaseContext);
  const { setCredential } = useContext(UserContext);
  const router = useRouter();

  const uiConfig: firebaseui.auth.Config = {
    signInFlow: 'redirect',
    signInOptions: [
      {
        provider: firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        customParameters: { lang: 'ja' },
      },
    ],
    callbacks: {
      signInSuccessWithAuthResult: (authResult, redirectUrl) => {
        setCredential(authResult as firebase.auth.UserCredential);
        const dest = redirectUrl ?? '/';
        void router.push(dest);

        return false;
      },
    },
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <p>{user?.screenName || '未ログイン'}</p>

        <div className={styles.grid}>
          {!user && (
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
          )}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
};

export default IndexPage;
