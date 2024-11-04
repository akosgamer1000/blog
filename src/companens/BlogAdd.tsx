import { useState } from "react";

export default function BlogAdd(){
    const [tilte,setTilte]=useState("")
    const[content,setContent]=useState("")
    const[author,setAuthor]=useState("")
    const[category,setCategory]=useState("")
    const [success, setSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
       
        const newBlog = {
            
            tiltle:tilte,
            content:content,
            author:author,
            category:category
        }
        try {
            const response = await fetch('http://localhost:3000/phones', {
                method: 'POST',
                headers: {
                     'Content-Type': 'application/json'
                },
                body: JSON.stringify(newBlog)
            })
            if (!response.ok){
                const errorData = await response.json();
               
                throw new Error(`Hiba történt: ${response.status}`)
            }

            setSuccess(true);
            setTilte(''); setContent(''); setAuthor('');setCategory('')
        } catch (err: any) {
            setError(err.message)
        } finally {

        }
    }
    
}