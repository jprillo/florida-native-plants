"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

interface ClientMDXRemoteProps {
  mdxSource: MDXRemoteSerializeResult;
}

export default function ClientMDXRemote({ mdxSource }: ClientMDXRemoteProps) {
  return <MDXRemote {...mdxSource} />;
}