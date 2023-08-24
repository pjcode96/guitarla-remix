import { useLoaderData } from "@remix-run/react"
import { getPosts } from "../api/posts.server"
import PostList from "../components/postList"


export function meta() {
    return (
        [
            {
                title: 'GuitarLA - Nuestro Blog',
            },
            {
                description: 'GuitarLA, Blog de música y venta de guitarras'
            }
        ]
    )
}

export async function loader() {
    const posts = await getPosts()
    return posts
}


function Blog() {
    const posts = useLoaderData()
    return (
        <PostList posts={posts} />
    )
}

export default Blog