import * as React from 'react';
import { Helmet } from 'react-helmet'

import { graphql, useStaticQuery } from 'gatsby';

const SEO = ({ children, description, location, title }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  return (
    <>
      <Helmet titleTemplate={`%s | ${site.siteMetadata.title}`}>
        <html lang='en' />
        <title>{title}</title>

        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png" />
        <link rel="manifest" href="./site.webmanifest" />

        <link rel="alternate icon" href="https://avatars.githubusercontent.com/u/51687055?v=4" />

        {/* Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet='utf-8' />
        <meta name="description" content={site.siteMetadata.description} />

        {/* Open Graph */}
        {location && <meta property='og:url' content={location.href} />}
        <meta property='og:title' content={title} key='ogtitle' />
        <meta property='og:site_name' content={site.siteMetadata.title} key='ogsitename' />
        <meta property='og:description' content={site.siteMetadata.description} key='ogdesc' />
        {children}
      </Helmet>
    </>
  )
}

export default SEO