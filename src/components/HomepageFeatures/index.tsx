import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: React.ReactNode; // Changed to ReactNode to allow links
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: (
      <Link to="https://www.utfpr.edu.br">
        Universidade Tecnológica Federal do Paraná (UTFPR)
      </Link>
    ),
    Svg: require("@site/static/img/UTFPR_logo.svg").default,
    description: (
      <>
        UTFPR is one of the most renowned Universities in Brazil. Their teaching
        pattern is inspired by the European polytechnic university model. It
        specializes in natural sciences and engineering.
      </>
    ),
  }, // https://ufsc.br/
  {
    title: (
      <Link to="https://ufsc.br/">
        Universidade Federal de Santa Catarina (UFSC)
      </Link>
    ),
    Svg: require("@site/static/img/brasao_UFSC_vertical_extenso.svg").default,
    description: (
      <>
        The history of the Federal University of Santa Catarina has its roots in
        the Polytechnic Institute of Florianópolis founded on 13 March of 1917
        by José Arthur Boiteux.
      </>
    ),
  },
  {
    title: (
      <Link to="https://utfpr.curitiba.br/daelt/">
        Departamento Acadêmico de Eletrotécnica (DAELT)
      </Link>
    ),
    Svg: require("@site/static/img/LogoDAELT.svg").default,
    description: (
      <>
        Academic Department of Electrotechnics at the Curitiba Campus of UTFPR
        is responsible for organizing teaching, research, and extension
        activities in the field of Electrical and Control Engineering.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
