import React from "react";
import {data} from "../data";
import BlogPost from "./BlogPost";

const blogs = data.map(article => (
    <BlogPost 
        key={article.title}
        data={article}
    />
))

export default function BlogList(){
    return (
        <div className="list">
            {blogs}
        </div>
    )
}