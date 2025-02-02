import React from "react";
import Link from "next/link";

type Blog = {
  id: string;
  title: string;
  description: string;
  author: string;
  featuredimage: string;
};

type BlogListProps = {
  blogs: Blog[];
};

export default function BlogList({ blogs }: BlogListProps) {
  return (
    <ul
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        paddingTop: "20px",
        paddingBottom: "50px",
        gap: "20px",
      }}
    >
      {blogs.map((blog) => (
        <Link
          key={blog.id}
          className="blog-container"
          style={{
            color: "#333", // You can choose a specific color or use dynamic styles based on content
            borderColor: "#ccc",
            backgroundImage: `url(${blog.featuredimage})`,
            borderRadius: "25px",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "265px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "10px",
            textDecoration: "none",
            textAlign: "center",
          }}
          href={`/blog/${blog.id}`}
        >
          <div>
            <h3>{blog.title}</h3>
            <p>{blog.author}</p>
            <p>{blog.description}</p>
          </div>
        </Link>
      ))}
    </ul>
  );
}
