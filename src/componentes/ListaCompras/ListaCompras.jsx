import React from "react";
import './ListaCompras.css'

const ListaCompras = () => {

    const [listaCompras, setListaCompras] = React.useState([]);
    const [descricao, setDescricao] = React.useState('');

    const adicionarNaLista = () => {

        if (descricao) {
            //adiciona na lista
            listaCompras.push(descricao);
             //atualiza a lista para aparecer em tela
            setListaCompras([...listaCompras]);
            // limpa input
            setDescricao('');
        } else {
            alert('Descrição obrigatória!');
        }

    }

    const removerDaLista = (index) => {
        //remove da lista
        listaCompras.splice(index, 1);
        //atualiza a lista para aparecer em tela
        setListaCompras([...listaCompras]);
    };

    return (
        <div>
            <h1>Lista de Compras</h1>
            <br />

            <input type="text" placeholder="Descrição" value={descricao} onChange={
                
                (event) => setDescricao(event.target.value)}
                
                />
            <button onClick={adicionarNaLista}>Adicionar</button>
            <br />
            <br />

            <ul>
                {listaCompras.map((item, index) => {
                    return <li key={index}>
                        {item}
                        <button onClick={() => removerDaLista(index)}>Remover</button>
                    </li>;
                })}
            </ul>
        </div>
    );
};

export default ListaCompras;