import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            href="http://lattes.cnpq.br/7738648597170048"
          >
            Lattes 📝
          </Link>
          <Link
            className="button button--secondary button--lg"
            href="https://repositorio.ufsc.br/handle/123456789/95122"
          >
            Master's 📜
          </Link>
          <Link
            className="button button--secondary button--lg"
            href="https://repositorio.ufsc.br/handle/123456789/173824"
          >
            Thesis 📜
          </Link>
          <Link className="button button--secondary button--lg" to="/blog">
            Blog 🏢
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Prof. Adriano Ruseler, Dr. Eng."
      description="Doutor em Eletrônica de Potência, Professor de Engenharia Elétrica e Computação, com experiência em Sistemas Embarcados, Eletrônica de Potência, Energia Solar Fotovoltaica e Ensino a Distância."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
