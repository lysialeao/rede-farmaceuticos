const apagaMedicamento = async (id) =>{
    const data = await axios.post(`/medicamentos/${id}?_method=DELETE`);
}

const apagaUsuario = async (id) =>{
    const data = await axios.post(`/usuario/${id}?_method=DELETE`);
}

