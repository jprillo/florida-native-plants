"use client";

import React, { useState } from "react";
import Link from "next/link";

type BlogPost = {
  id: string;
  title: string;
  author: string;
  description: string;
  featuredImage: string;
  color1: string;
};

type BlogListProps = {
  posts: BlogPost[];
};

export default function BlogList({ posts }: BlogListProps) {
  const [filter, setFilter] = useState("");

  // Filter blog posts based on the search input (filtering by title here)
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search blog posts..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{
          display: "block",
          margin: "0 auto 20px",
          padding: "10px",
          width: "90%",
          maxWidth: "600px",
        }}
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          paddingTop: "20px",
          paddingBottom: "50px",
          gap: "20px",
        }}
      >
        {filteredPosts.map((post) => (
          <Link
          key={post.id}
          href={`/blog/${post.id}`}
          aria-label={`Read blog post: ${post.title}`}
          style={{
            color: post.color1,
            borderColor: post.color1,
            backgroundImage: `url(${post.featuredImage})`,
            borderRadius: "25px",
            backgroundPosition: "center",
        backgroundSize: "cover",
            height: "365px",

            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "10px",
            textDecoration: "none",
            textAlign: "center",
          }}
          >
            <div

            >
              <h3>{post.title}</h3>
              <p>By {post.author}</p>

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
