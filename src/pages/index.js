import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <img
          className={clsx(styles.heroBannerLogo, "margin-vert--md")}
          src={useBaseUrl("img/logo.png")}
        />
        <h1 className="hero__title">Mono<span className={clsx(styles.gameOrange)}>Game</span>.Aseprite</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p>⚠️ Documentation is currently a work in progress</p>
        <div className={styles.buttons}>
          <Link
            className={clsx(
              "button button--primary button--lg",
              styles.getStarted
            )}
            to={useBaseUrl("docs/")}
          >
            Get Started&nbsp;&nbsp;→
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
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <HomepageHeader />
    </Layout>
  );
}
