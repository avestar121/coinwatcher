import React from 'react';
import Header from '../../components/Header';

const styles = {
  info: 'min-h-screen',
  main: 'text-white sm:mx-20 mx-5 max-w-screen-2xl',
  centered: 'flex flex-col items-center justify-center h-full',
  boldText: 'font-bold',
};

function ErrorPage() {
  return (
    <div className={styles.info}>
      <Header />
      <main className={styles.main}>
        <div className={styles.centered}>
          <h1 className={styles.boldText}>Uh Oh... Something went wrong</h1>
        </div>
      </main>
    </div>
  );
}

export default ErrorPage;
