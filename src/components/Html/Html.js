/**
 * React Starter Kit for Firebase and GraphQL
 * https://github.com/kriasoft/react-firebase-starter
 * Copyright (c) 2015-present Kriasoft | MIT License
 */

/* @flow */

import React from 'react';

type Props = {
  title: string,
  assets: [string],
};

function Html({ title, assets }: Props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000" />
        <link
          rel="manifest"
          href={`${process.env.PUBLIC_URL || ''}/manifest.json`}
        />
        <link
          rel="shortcut icon"
          href={`${process.env.PUBLIC_URL || ''}/favicon.ico`}
        />
        {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"/> */}
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <title>React App</title>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900"
          rel="stylesheet"
        />
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root" />
        {assets
          .filter(x => x.endsWith('.js'))
          .map(x => <script key={x} src={x} />)}
      </body>
    </html>
  );
}

export default Html;
