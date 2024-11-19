import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import SyllabusPage from "./_syllabus-page.mdx";
import MDXContent from "@theme/MDXContent";

export function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container" style={{ zIndex: 100 }}>
        <div className={"row"}>
          <div className={"col"}>
            <h1 className="hero__title">
              {siteConfig.customFields.course_number} <br />
              {siteConfig.title}
            </h1>
            <p className="hero__subtitle">
              {siteConfig.customFields.semester} {siteConfig.tagline}
            </p>
            <div className={"col button_group"}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro"
              >
                Courses 📆
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro"
              >
                Office Hours 🕰️
              </Link>
            </div>
          </div>

          {/*{docusaurusConfig.customFields.is_pdf ? <></> : <WatchLiveDemo/>}*/}
        </div>
      </div>
      {/*<BrowserOnly  fallback={<div>Loading...</div>} >*/}
      {/*    {() => {*/}
      {/*        const AnimatedBackground =*/}
      {/*            require('../components/AnimatedBackground/index').AnimatedBackground;*/}
      {/*        return <AnimatedBackground/>;*/}
      {/*    }}*/}
      {/*</BrowserOnly>*/}
      <div className="air air1" />
      <div className="air air2" />
      <div className="air air3" />
      <div className="air air4" />
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <Layout title={`Syllabus`} description="Professor Thanh's Syllabus.">
        <HomepageHeader />
        <main>
          <div style={{ zIndex: 100000 }}>
            <MDXContent>
              <SyllabusPage />
            </MDXContent>
          </div>
        </main>
      </Layout>
    </>
  );
}
