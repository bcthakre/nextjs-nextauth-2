import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { FcGoogle } from 'react-icons/fc';
import { signIn, signOut } from 'next-auth/react';

export default function Home() {
  return (
    <div className={styles.container}>
      <button onClick={signIn}>
        <FcGoogle fontSize={30} />
      </button>

      <span>Sign in with Google</span>
    </div>
  );
}
