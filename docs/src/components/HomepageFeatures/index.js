import clsx from "clsx";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Github",
    link: "https://github.com/MoranggNormal",
  },
  {
    title: "Website",
    link: "https://www.epeixoto.dev/en",
  },
  {
    title: "Linkedin",
    link: "https://br.linkedin.com/in/euller-peixoto",
  },
];

function Feature({ title, link }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <Link className="button button--secondary button--lg" to={link}>{link}</Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
