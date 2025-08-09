import { useEffect, useState } from "react";
import  {API_URL,POST_ENDPOINT} from '../constants/constant'

const usePost = ()=>{

     const [posts, setPost] = useState([]);

    const fetchData = async () => {
        const json = await fetch(API_URL + '/' + POST_ENDPOINT);
        const data = await json.json();
        setPost(data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return posts;
}

export default usePost;