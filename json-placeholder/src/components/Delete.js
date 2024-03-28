import { useState } from "react";
import '../App.css';

export default function Delete() {
    const [deleteId, setDeleteId] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        fetch(`https://jsonplaceholder.typicode.com/posts/${deleteId}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao deletar o usuário');
            }
            return response.json();
        })
        .then(data => {
            console.log('Usuário deletado com sucesso:', data);
        })
        .catch(error => {
            console.log(`Erro ao deletar o usuário: ${error}`);
        });
    }

    return (
        <div className="App">
            <div>
                <h1>Deletar Usuário</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <input
                        className="inputs"
                        type="number"
                        placeholder="ID"
                        value={deleteId}
                        onChange={(event) => setDeleteId(event.target.value)}
                    />
                    <button className="button" type="submit">Deletar</button>
                </form>
            </div>
        </div>
    );
}