// CRUD para cadastrar algum animal na Animals API de http://cafepradev.com.br:21020

// exibir lista
const listagem = () => {
    fetch("http://cafepradev.com.br:21020/animals/list", (res) => {

        let estrutura = `
    <tr>
    <td>{"name": "${lista.body.name}"}</td>
    <td>
        <button onclick="editar()" class="btn btn-warning">EDITAR</button>
    </td>
    <td>
        <button onclick="deletar()" class="btn btn-danger">DELETAR</button>
    </td>
    </tr>
    `
        for (item in lista) {
            estrutura += estrutura
        }

        return estrutura
    }).then(res => res.json())
}

// adicionar itens à lista
const incluir = () => {
    fetch("http://cafepradev.com.br:21020/animals/insert", (res) => {
        method = "POST",

            headers = {
                "Content-type": "application/json; charset=UTF-8"
            },

            body = {
                "name": "${lista.body.name}",
            }
    }).then(res => res.json()).then(
        res =>{
            return lista.push(res)
        }
    )
}

// editar item contido na lista
const editar = () => {
    fetch("http://cafepradev.com.br:21020/animals/update", (res) => {
        method = "PUT",

            headers = {
                "Content-type": "application/json; charset=UTF-8"
            },

            body = {
                "name": `"${lista.body.name}"`
            }
    }).then(res => res.json()).then(
        (res) =>{
            return lista.splice(indexOf(`${lista.body.name})`, 1, `${lista.body.name}`)
        }
    )
}

// deletar  item contido na lista
const deletar = () => {
    fetch("http://cafepradev.com.br:21020/animals/delete", (res) => {
        method = "DELETE",

            headers = {
                "Content-type": "application/json; charset=UTF-8"
            },

            body = {
                "id": `"${lista.body.id}"`
            }
    }).then(res => res.json()).then(
        (res) =>{
            return lista.splice(indexOf(`${lista.body.name})`, 1)
        }
    )
}