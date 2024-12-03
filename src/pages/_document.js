// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Ionicons CDN */}
          <script
            src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
            type="module"
          ></script>
          <script
            src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
            nomodule
          ></script>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300;400;500;600;700&family=Jost:ital,wght@0,100..900;1,100..900&family=Outfit:wght@100..900&family=Permanent+Marker&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
