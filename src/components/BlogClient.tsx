"use client";

import React from "react";
import Link from "next/link";
import  "../../styles/BlogTemplate.scss"; // Import your SCSS module

type Blog = {
  id: string;
  title: string;
  description: string;
  author: string;
  featuredimage: string;
};

type BlogListProps = {
  blog: Blog[];
};

export default function BlogClient({ blog }: BlogListProps) {
  return (
    <div className="blog-container ">
      {blog.map((item) => (
        <Link
          key={item.id}
          href={`/blog/${item.id}`}
          // Dynamically set background image

          className="flower-container" style={{ backgroundImage: `url(${item.featuredimage})`, backgroundSize: "cover" }}
        >
          <div  >
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <small>By {item.author}</small>
          </div>
        </Link>
      ))}
    </div>
  );
}
