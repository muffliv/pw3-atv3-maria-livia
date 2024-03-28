import { useEffect, useState } from "react";
import '../App.css';

export default function Listing() {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="App">
            {users.map(user => (
                <div className="cardUser" key={user.id}>
                    <h1>{user.id}</h1>
                    <h3>{user.title}</h3>
                    <p>{user.body}</p>
                </div>
            ))}
        </div>
    );
}