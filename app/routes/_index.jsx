import { getProducts } from '~/api/products.server'
import { getPosts } from '~/api/posts.server'
import { getCourse } from '../api/course.server'
import { useLoaderData } from '@remix-run/react'
import ProductList from '~/components/productList'
import PostList from '../components/postList'
import Course from '../components/course'

import stylesProducts from '~/styles/shop.css'
import stylesPosts from '~/styles/blog.css'
import stylesCourse from '~/styles/course.css'


export function meta() {

}


export function links() {
    return (
        [
            {
                rel: 'stylesheet',
                href: stylesProducts
            },
            {
                rel: 'stylesheet',
                href: stylesPosts
            },
            {
                rel: 'stylesheet',
                href: stylesCourse
            }
        ]
    )
}

export async function loader() {
    const [products, posts, course] = await Promise.all(
        [
            getProducts(),
            getPosts(),
            getCourse()
        ]
    )

    return {
        products,
        posts,
        course
    }
}


function Index() {
    const { products, posts, course } = useLoaderData()
    return (
        <>
            <main className="container">
                <ProductList products={products} />
            </main>

            <Course course={course.attributes} />

            <section className='container'>
                <PostList posts={posts} />
            </section>
        </>
    )
}

export default Index