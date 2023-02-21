import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import InstallCommands from "@site/src/components/InstallCommands";

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
        <h1 className="hero__title">
          Mono<span className={clsx(styles.gameOrange)}>Game</span>.Aseprite
        </h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
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
          <Link
            className={clsx("button button--primary button--lg")}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1em",
              backgroundColor: "#29abe0",
            }}
            to="https://ko-fi.com/aristurtledev"
          >
            <i className={styles.kofiIcon}></i>Support Me on Ko-Fi
          </Link>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className={styles.installCommandsContainer}>
            <InstallCommands />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
    </Layout>
  );
}
