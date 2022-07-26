import axios from 'axios'

const usuarios = {}

usuarios.find = (params) => {
	const filters = {
		quantidade: params && params.quantidade ? params.quantidade : 20,
		ordenarPor: params && params.ordenarPor ? params.ordenarPor : 'Nome',
		ordem: params && params.ordem ? params.ordem : 'asc',
		skip: params && params.skip ? params.skip : 0
	}

	if (params && params.nome && params.nome !== '') filters.nome = params.nome
	if (params && params.perfil && params.perfil !== '') filters.perfil = params.perfil
	if (params && params.curadoriaId && params.curadoriaId !== '') filters.curadoriaId = params.curadoriaId

	return axios.get('/usuarios', { params: filters })
}

usuarios.obterTotal = (params) => {
	const filters = {}

	if (params && params.nome) filters.nome = params.nome
	if (params && params.perfil) filters.perfil = params.perfil

	return axios.get('/usuarios/obter_total', { params: filters })
}

usuarios.findById = id => axios.get(`/usuarios/${id}`)
usuarios.create = data => axios.post('/usuarios', data)
usuarios.update = (id, data) => axios.put(`/usuarios/${id}`, data)
usuarios.delete = id => axios.delete(`/usuarios/${id}`)

usuarios.findPerfis = () => axios.get('/usuarios/obter_perfis')
usuarios.findByPerfil = id => axios.get(`/usuarios/perfil/${id}`)
usuarios.recoverPassword = email => axios.get(`/usuarios/recuperar_senha/${email}`)
usuarios.updatePassword = data => axios.post('/usuarios/alterar_senha', data)
usuarios.findAllObjectsOwners = data => axios.get('/usuarios/obter_todos_donos')

export { usuarios }
