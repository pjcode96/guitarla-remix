export async function getCourse() {
    const response = await fetch(`${process.env.API_URL}/course?populate=image`)
    const course = await response.json()
    return course?.data
}