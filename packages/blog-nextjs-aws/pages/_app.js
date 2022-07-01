import "../styles/globals.css";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import * as S from "../modules/layout/layout.styled";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Hamed Fatehi Tech Blog</title>
        <meta
          name="description"
          content="Tech dairy of a life-long developer."
        />
      </Head>
      <S.Wrapper>
        <S.Navigation>
          <Link href="./">
            <a>blog</a>
          </Link>
          <Link href="./resume">
            <a>resume</a>
          </Link>
          <Link href="https://github.com/Confrontend">
            <a target="_blank" rel="noreferrer" className="github">
              <Image
                src="/GitHub-Mark-Light-32px.png"
                alt="my github"
                width="32px"
                height="32px"
              />
            </a>
          </Link>
        </S.Navigation>
        <S.Main>
          <Component {...pageProps} />
        </S.Main>
      </S.Wrapper>
    </>
  );
}

export default MyApp;
