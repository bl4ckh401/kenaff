import Image from "next/image";
import React from "react";

export const BlogCard = ({ title, body, image }) => {
    return (
        <div className="p-4 w-full border">
            {image && <Image width={400} height={400}
                className="w-full h-64 object-cover rounded-lg"
                src={{ uri:`${image}` }}
                alt={title}
            /> } 
            <h2 className="text-xl font-medium mt-4">{title}</h2>
            <p className="text-gray-700 mt-2">{body}</p>
        </div>
    );
};

export const BlogList = ({ posts, image }) => {
    console.log(posts)
    return (
        <div className="flex w-full flex-col top-60 relative justify-center items-center">
            <h1 className="text-6xl font-bold">Latest News</h1>
        <div className="grid grid-cols-1 w-3/4 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {posts.map(post => (
                <BlogCard
                    key={post.id}
                    title={post.title}
                    body={post.body}
                    image={post.image}
                />
            ))}
            </div></div>
    );
};

export default BlogList