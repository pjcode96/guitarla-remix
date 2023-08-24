import Post from "./post"

function PostList({ posts }) {
    return (
        <>
            <h2 className="heading">Blog</h2>
            <div className="blog">
                {posts.length > 0 &&

                    posts.map(
                        (post) => (
                            <Post
                                key={post.id}
                                post={post}
                            />
                        )
                    )
                }
            </div>
        </>
    )
}

export default PostList