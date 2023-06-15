'use client';

import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react';
import { getLandingPage } from './common/services/contentful.service';
import { LandingPage } from './common/types/landingPage.model';
import Header from './common/components/header';

export default function Home() {
  const [page, setPage] = useState<LandingPage>({} as LandingPage);

  useEffect(() => {
    getLandingPage().then(({ data, errors }) => {
      if (errors) {
        console.error(errors);
      }

      setPage(data.landingPage);
    });
  }, []);

  return (
    <main className={styles.main}>
      <Header />
      <div className='landing-content'>
        <div>
          <h1>{page.title}</h1>
          <p>{page.subTitle}</p>
        </div>
        <div></div>
      </div>
    </main>
  )
}
