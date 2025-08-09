import usePost from "../utils/usePosts";
const About = () => {
    const posts = usePost();

    return <>
        <p>This are the list of post</p>

        {posts.map(post => {
            return <p style={{
                margin: '20px',
                padding: '5px',
                border: '2px solid',
                borderRadius: '13px'
            }} key={post.id}>{post.title}</p>
        })}

    </>
}

export default About;