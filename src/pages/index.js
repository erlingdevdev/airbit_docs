import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
			<div className={styles.hero}>
          <h1>{siteConfig.title}</h1>
          <p>{siteConfig.tagline}</p>
      </div>
    </Layout>
  );
}
