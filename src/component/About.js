import { useEffect, useState } from "react";
import { API_URL, POST_ENDPOINT } from "../constants/constant";
const About = () => {

    const [posts, setPost] = useState([]);

    const fetchData = async () => {
        const json = await fetch(API_URL + '/' + POST_ENDPOINT);
        const data = await json.json();
        setPost(data);
    }

    useEffect(() => {
        fetchData();
    }, []);

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