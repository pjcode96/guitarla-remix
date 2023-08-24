import { Link } from "@remix-run/react"
import { formatDate } from "~/utils/helpers"

function Post({ post }) {

    const { title, content, image, slug, publishedAt } = post.attributes
    return (
        <article className="post container">
            <img src={image.data.attributes.formats.small.url} alt={`Imagen del post ${title}`} />

            <div className="post__content">
                <h3 className="post__title">
                    {title}
                </h3>
                <p className="post__publish-date">{formatDate(publishedAt)}</p>
                <p className="post__resume">
                    {content}
                </p>
                <Link className="link" to={`/blog/${slug}`}>Leer post</Link>
            </div>
        </article>
    )
}

export default Post