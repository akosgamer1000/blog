import { useEffect, useState } from "react"

export default function Bloglist(){
    interface blog{
        id:number,
        title:string,
        content:string,
        author:string,
        post_date:Date,
        category:string
    }
    const [blog,setBlog]=useState<blog[]>([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(()=>{

        async function load(){
            fetch('http://localhost:3000/posts')
            .then((response) => {
                
                return response.json();
            })
            .then((data) => {
                setBlog(data);
                setLoading(false);
            })
            .catch((error) => {
                
                setLoading(false);
            });
        }
        load()
    })
    if (loading) {
        return <p>Loading...</p>;
    }
    return<>
        <h1>Blogok</h1>
        <ul>
            {blog.map(blog=><li>
                <h2>{blog.title}</h2>
                <p>{blog.content}</p>
                <p>{blog.post_date.toString()}</p>
                <p>{blog.category}</p>
                <p>{blog.author}</p>
            </li>)}
        </ul>
    </>
}