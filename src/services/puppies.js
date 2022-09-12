const BASE_URL = '/api/puppies'

function create(puppy) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(puppy)
    })
    .then(res => res.json())
    .catch(err => console.log(err))

    
}

function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json())
}

function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {method: 'DELETE'})
    .then(res => res.json())
}

export {
    create,
    getAll, 
    deleteOne
}