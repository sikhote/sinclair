import React from 'react';

const Favicons = () => (
  <React.Fragment>
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/static/img/favicons/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/static/img/favicons/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/static/img/favicons/favicon-16x16.png"
    />
    <link rel="manifest" href="/static/img/favicons/site.webmanifest" />
    <link
      rel="mask-icon"
      href="/static/img/favicons/safari-pinned-tab.svg"
      color="#5bbad5"
    />
    <link rel="shortcut icon" href="/static/img/favicons/favicon.ico" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta
      name="msapplication-config"
      content="/static/img/favicons/browserconfig.xml"
    />
    <meta name="theme-color" content="#ffffff" />
  </React.Fragment>
);

export default Favicons;
