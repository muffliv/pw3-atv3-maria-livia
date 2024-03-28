import { useState } from "react";
import '../App.css';

export default function Getting() {
    const [userId, setUserId] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao obter o usuário');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(`Erro na obtenção do usuário: ${error}`);
        });
    }

    return (
        <div className="App">
            <div>
                <h1>Procurar Usuário</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <input
                        className="inputs"
                        type="number"
                        placeholder="ID"
                        value={userId}
                        onChange={(event) => setUserId(event.target.value)}
                    />
                    <button className="button" type="submit">Procurar</button>
                </form>
            </div>
        </div>
    );
}