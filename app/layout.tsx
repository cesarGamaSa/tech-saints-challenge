'use client';

import Header from './common/components/header';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Inter } from 'next/font/google';
import { store } from './store/store';
import { Provider } from 'react-redux';

const inter = Inter({ subsets: ['latin'] }); 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
      </head>
      <body className={inter.className}>
        <Provider store={store}>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  )
}
