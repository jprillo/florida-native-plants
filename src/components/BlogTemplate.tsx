"use client";

import React from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import "../styles/PlantTemplate.scss";

type BlogTemplateProps = {
  frontmatter: {
    title: string;
    author: string;
    description: string;
  };
  mdxSource: MDXRemoteSerializeResult;
};

const BlogTemplate: React.FC<BlogTemplateProps> = ({ frontmatter, mdxSource }) => {
  const {
    title,
    author,
    description,
  } = frontmatter;

  return (
    <div className="plant-container">
      {/* Title Section */}
      <h1 className="title" >{title}</h1>
      <h2 className="subtitle">{author}</h2>
      <p className="description">{description}</p>





      {/* Additional MDX Content */}
      <div className="additional-content">
        <MDXRemote {...mdxSource} />
      </div>
    </div>
  );
};

export default BlogTemplate;
