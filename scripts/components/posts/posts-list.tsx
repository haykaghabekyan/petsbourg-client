import * as React from "react";
import PostsListItem from "../../components/posts/post";

export default ({posts}) => {
    return (
        <ul>
            {
                posts.map((post, key) => {
                    return <PostsListItem key={key} {...post} />;
                })
            }
        </ul>
    );
};
