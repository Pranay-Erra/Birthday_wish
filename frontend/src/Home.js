import React from 'react';
import './nicepage.css'; // Import your CSS files
import './Home.css';
import './button';
import Button from './button';
const Home = () => {
  return (
    <html style={{ fontSize: '16px' }} lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta name="keywords" content="The Party Begins Here!" />
        <meta name="description" content="" />
        <title>Home</title>
        <link rel="stylesheet" href="nicepage.css" media="screen" />
        <link rel="stylesheet" href="Home.css" media="screen" />
        <script type="text/javascript" src="jquery.js" defer=""></script>
        <script type="text/javascript" src="nicepage.js" defer=""></script>
        <meta name="generator" content="Nicepage 5.21.3, nicepage.com" />
        <link
          id="u-theme-google-font"
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i"
        />
        <link id="u-page-google-font" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Paytone+One:400" />

        {/* <script type="application/ld+json">
          {{
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "",
          }}
        </script> */}
        <script type="application/ld+json">
  {JSON.stringify({
    "@context": "http://schema.org",
    "@type": "Organization",
    "name": "",
  })}
</script>
        <meta name="theme-color" content="#478ac9" />
        <meta property="og:title" content="Home" />
        <meta property="og:type" content="website" />
        <meta data-intl-tel-input-cdn-path="intlTelInput/" />
      </head>
      <body data-home-page="Home.html" data-home-page-title="Home" data-path-to-root="./" data-include-products="false" className="u-body u-xl-mode" data-lang="en">
        <section className="u-align-center u-clearfix u-image u-section-1" id="carousel_c4d1" data-image-width="1980" data-image-height="1320">
          <div className="u-clearfix u-sheet u-sheet-1">
            <h2 className="u-custom-font u-text u-text-default u-text-1"> The Party Begins Here!<br /></h2>
            <p className="u-large-text u-text u-text-palette-1-dark-2 u-text-variant u-text-2"> From The Invitations To The Party Favors, We Got You Covered!</p>
            {/* <a href="https://nicepage.com/website-builder" className="u-border-2 u-border-grey-75 u-btn u-button-style u-gradient u-none u-text-body-alt-color u-btn-1">Say hello</a> */}
            <Button/>
          </div>
        </section>
      </body>
    </html>
  );
};

export default Home;
