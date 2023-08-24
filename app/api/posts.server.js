export async function getPosts() {
    const response = await fetch(`${process.env.API_URL}/posts?populate=image`)
    const posts = await response.json()
    return posts.data
}

export async function getPost(url) {
    const response = await fetch(`${process.env.API_URL}/posts?filters[slug][$eq]=${url}&populate=image`)
    const post = await response.json()
    return post
}