import * as React from "react";
import {connect} from "react-redux";
import PostList from "../../components/posts/posts-list";
import getPostsByUserId from "../../redux/actions/posts";

class PostsListContainer extends React.Component<any, any> {
    constructor (props) {
        super (props);
    }

    componentDidMount () {
        this.props.getPostsByUserId(10);
    }

    render () {
        const {posts} = this.props;

        return <PostList posts={posts} />;
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    };
};

const actionCreators = {
    getPostsByUserId
};

export default connect(mapStateToProps, actionCreators)(PostsListContainer);
