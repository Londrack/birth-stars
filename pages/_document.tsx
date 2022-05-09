import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/** FavIcon */}
          {/** WebFont */}
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
          <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"></link>
          {/** stylesheets */}
          {/** scripts */}
          {/* tags */}
          <title>BirthStars</title>
          <meta property="og:title" content="BirthStars" key="BirthStars" />
          <meta name="keywords" content="horoscopes, horóscopos, birth stars, signos zodiacales" />
          <meta name="author" content="Alejandro Mejia @Londrack" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="Your birth stars have something to tell you. Get to know your sign in some of the world's most popular horoscopes." />
        </Head>
        <body className="my-body-class">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
