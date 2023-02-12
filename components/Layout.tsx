/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Footer from "./Footer";
import NavBar from "./NavBar";

type LayoutProps = {
  title?: string;
  children?: React.ReactNode;
};

export default function Layout({ title, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title ? title + " - Nocxa" : "Nocxa"}</title>
        <meta
          name="description"
          content="Nocxa is a student-run tech company providing web development, app development, and machine learning services to clients. Our team of talented developers offers creative and efficient solutions to meet clients' needs. Our goal is to help bring clients' visions to life through cutting-edge technology."
        />
        <meta
          name="keywords"
          content="Nocxa, Software Development, Exeter, London, United Kingdom, Web Development, App Development, Flutter"
        ></meta>
        <meta property="og:title" content="Nocxa"></meta>
        <meta
          property="og:description"
          content="Nocxa is a student-run tech company providing web development, app development, and machine learning services to clients. Our team of talented developers offers creative and efficient solutions to meet clients' needs. Our goal is to help bring clients' visions to life through cutting-edge technology."
        ></meta>
        <meta property="og:url" content="https://nocxa.com/"></meta>
        <meta property="og:site_name" content="Nocxa"></meta>
        <meta name="author" content="Nocxa LTD - https://nocxa.com"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta name="apple-mobile-web-app-title" content="Nocxa"></meta>
        <link
          rel="apple-touch-icon"
          href="/nocxa-website/logo/nocxa.png"
        ></link>
        <link rel="icon" href="/nocxa-website/logo/nocxa.svg" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between bg-[var(--grey)] scroll-smooth transition ease-in-out duration-500">
        {/* NAV BAR */}
        <header className="w-full z-20">
          <NavBar />
        </header>

        {/* BODY */}
        <main className="m-auto z-10">
          <div>{/* <Toaster /> */}</div>
          <div className="h-16"></div>
          {children}
        </main>

        {/* FOOTER */}
        <footer className="flex h-auto justify-center items-center bg-[var(--black)] text-white z-10 font-museo">
          <Footer />
        </footer>
      </div>
    </>
  );
}
