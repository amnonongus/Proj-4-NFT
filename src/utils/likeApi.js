import tokenService from "./tokenService"

const BASE_URL = '/api'

export function create(postId){
	return fetch(`${BASE_URL}/posts/${postId}/likes`, {
		method: 'POST',
		headers: {
			'Authorization': 'Bearer ' + tokenService.getToken()
		  }
	}).then(res => {
		if(res.ok) return res.json()
		throw new Error('Not logged In! Check Express terminal')
	})
}

