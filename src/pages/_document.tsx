import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import KakaoMap from "@documents/KaKaoMap";
import GoogleIcon from "@documents/GoogleIcon";
import Title from "@components/documents/Title";
import Icon from "@components/documents/Icon";

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <GoogleIcon />
          <KakaoMap />
          <Icon />
          <Title />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
