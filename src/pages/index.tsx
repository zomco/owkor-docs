import clsx from "clsx";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import Heading from "@theme/Heading";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="hero hero--primary text-center">
      <div className="container">
        <h1 className="hero__title">
          <img
            alt="Owkor Logo"
            className="header__logo py-8"
            src={useBaseUrl("design/typelogo/typelogo.svg")}
          />
        </h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className="indexCtas">
          <Link className="button button--lg" to="/docs/about">
            Learn More
          </Link>
          <Link className="button button--lg" to="/docs/about">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Head>
        <meta property="og:title" content="Owkor" />
        <meta
          property="og:image"
          content={useBaseUrl("design/web/social-preview-1200x630.png")}
        />
        <meta
          property="og:description"
          content="smart home, mmwave radar"
        />
        <meta property="og:url" content="https://owkor.com/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <HomepageHeader />
      <main className="flex flex-col gap-4">
        <div className="container mx-auto flex w-auto flex-col">
          <h2 className="mb-2 text-xl font-medium">
            Getting started with Meshtastic is as easy as 1, 2, 3!
          </h2>
          <ul
            className="mx-auto relative grid gap-6"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            }}
          >
            <div className="card">
              <div className="card__header flex justify-between">
                <h3>1. Purchase Supported Hardware</h3>
              </div>
              <div className="card__body flex justify-center">
                <p>
                  Hardware you will want to consider:
                  <ul>
                    <li>Radio</li>
                    <li>Battery</li>
                    <li>Case</li>
                    <li>
                      Antenna (most devices include an antenna, but the quality
                      can be a bit of a mixed bag from some suppliers on stock
                      antennas)
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card__header flex justify-between">
                <h3>2. Flash & Configure Node</h3>
              </div>
              <div className="card__body flex justify-center">
                <p>
                  The Meshtastic Web-Based Flasher & Clients can assist you in
                  flashing the firmware and configuring settings.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card__header flex justify-between">
                <h3>3. Connect to Node</h3>
              </div>
              <div className="card__body flex justify-center">
                <p>
                  Applications are available for the following systems:
                  <ul>
                    <li>Android</li>
                    <li>iOS</li>
                    <li>Mac</li>
                    <li>Web Browser</li>
                  </ul>
                </p>
              </div>
            </div>
          </ul>
        </div>
        <br />
      </main>
    </Layout>
  );
}
