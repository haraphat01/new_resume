import Head from 'next/head';


export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title></title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <main className="flex-grow">{children}</main>
     
    </div>
  );
}