import React from 'react'

function Course({ course }) {

    const { description, image, name } = course;
    return (
        <section className='course'>

            <style jsx="true">
                {
                    `
                        .course {
                            background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 /.7) ) ,url(${image.data[0].attributes.url});
                        }
                    `
                }
            </style>
            <div className="course-grid container">
                <div className="course__content">
                    <h2 className="heading">{name}</h2>
                    <p className="course__text">
                        {description}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Course