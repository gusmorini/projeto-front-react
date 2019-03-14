import axios from 'axios';

let BASEURL = 'http://127.0.0.1:1200/api';

export const clientFind = (search) => {
    return axios.get(`${BASEURL}/client?search=${search}`);
}

export const clienFindById = (id) => {
    return axios.get(`${BASEURL}/client/${id}`);
}

export const clientRegister = (data) => {
    return axios.post(`${BASEURL}/client`, data);
}

export const recordFindByClientId = (id) => {
    return axios.get(`${BASEURL}/record/${id}`);
}

export const recordAdd = (i) => {
    return axios.post(`${BASEURL}/record`, i);
}

export const recordFindById = (id) => {
    return axios.get(`${BASEURL}/record/detail/${id}`);
}

// export const login = (data) => {
//     return axios.post (`${BASEURL}/usuarios/login`, data);
// }

// export const getTarefas = () => {
//     return axios.get (`${BASEURL}/tarefas`, myConf());
// }

// export const buscaTarefas = (titulo) => {
//     return axios.get (`${BASEURL}/tarefas?titulo=${titulo}`, myConf());
// }

// export const  getUsuario = (id) => {
//     return axios.get ( `${BASEURL}/usuarios/${id}`, myConf() );
// }

// export const cadUsuario = (data) => {
//     return axios.post (`${BASEURL}/usuarios`, data)
// }

// export const editarUsuario = (data) => {
//     let {id, nome, nascimento, cpf, email, senha} = data;
//     return axios.put (`${BASEURL}/usuarios/${id}`, {nome, email, nascimento, cpf, senha}, myConf());
//     //.then( res => { localStorage.setItem('userData', JSON.stringify(res.data)) })
// }

// export const cadTarefa = (data) => {
//     return axios.post (`${BASEURL}/tarefas`, data, myConf())
// }

// export const delTarefa = (id) => {
//     return axios.delete(`${BASEURL}/tarefas/${id}`, myConf());
// }

// export const concluiTarefa = (id) => {
//     return axios.put(`${BASEURL}/tarefas/${id}/concluida`, id, myConf());
// }

// export const desconcluiTarefa = (id) => {
//     return axios.delete(`${BASEURL}/tarefas/${id}/concluida`, myConf());
// }

// export const editaTarefa = (id, dados) => {
//     return axios.put(`${BASEURL}/tarefas/${id}`, dados, myConf());
// }