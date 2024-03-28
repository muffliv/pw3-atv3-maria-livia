import { useState } from "react";
import '../App.css';

export default function Update() {
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [userId, setUserId] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        const requestData = {
            id: id,
            title: title,
            body: body,
            userId: userId
        };

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro no update');
            }
            return response.json();
        })
        .then(data => {
            console.log('Usuário atualizado com sucesso:', data);
        })
        .catch(error => {
            console.log(`Erro no update: ${error}`);
        });
    }

    return (
        <div className="App">
            <div>
                <h1>Atualizar Usuário</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <input
                        className="inputs"
                        type="text"
                        placeholder="ID"
                        value={id}
                        onChange={(event) => setId(event.target.value)}
                    />
                    <input
                        className="inputs"
                        type="number"
                        placeholder="ID do Usuário"
                        value={userId}
                        onChange={(event) => setUserId(event.target.value)}
                    />
                    <input
                        className="inputs"
                        type="text"
                        placeholder="Título"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                    <input
                        className="inputs"
                        type="text"
                        placeholder="Corpo"
                        value={body}
                        onChange={(event) => setBody(event.target.value)}
                    />
                    <button className="button" type="submit">Atualizar</button>
                </form>
            </div>
        </div>
    );
}