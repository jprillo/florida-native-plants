"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import React from "react";

type MDXContentProps = {
  source: MDXRemoteSerializeResult;
};

const MDXContent: React.FC<MDXContentProps> = ({ source }) => {
  return <MDXRemote {...source} />;
};

export default MDXContent;