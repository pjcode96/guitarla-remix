import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/api/posts.server"
import { formatDate } from '~/utils/helpers.js'

export async function loader({ params }) {
    const post = await getPost(params.postUrl);

    if (post.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Entrada de blog no encontrada'

        })
    }
    return post
}

export function meta({ data }) {

    return (
        [
            {
                title: 'GuitarLA - Nuestro blog'
            },
            {
                description: 'GuitarLa, Blog de música y tienda de guitarras'
            }
        ]
    )
}

function Post() {

    const post = useLoaderData();

    const { title, image, content, publishedAt } = post?.data[0]?.attributes
    return (
        <div className="post">
            <img src={image.data.attributes.url} alt={`Imagen del post ${title}`} />

            <div className="post__content">
                <h3 className="post__title">
                    {title}
                </h3>
                <p className="post__publish-date">{formatDate(publishedAt)}</p>
                <p className="post__text">
                    {content}
                </p>
            </div>
        </div>
    )
}

export default Post