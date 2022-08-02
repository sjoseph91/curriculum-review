import React from "react";

export default function BlogPost({data}){
    const {title, subTitle, author, date} = data;
    return (
        <div className="post">
           <div className="title">{title}</div>
           <div className="subTitle">{subTitle}</div>
           <p>Posted by {author} on {date}</p>
        </div>
    )
}