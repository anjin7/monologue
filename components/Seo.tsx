import Head from "next/head";

interface Ititle {
title?: string
children?: React.ReactNode
}
export default function Seo({ title }:Ititle) {
  return (
    <Head>
      <title>{title} | Monologue</title>
    </Head>
  );
}