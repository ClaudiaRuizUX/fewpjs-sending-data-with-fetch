// Add your code here
document.querySelector('button').addEventListener('click', () => {
    submitData('Andre', 'test@test.com')
})


function submitData(name, email){
    return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        name,
        eamil
    })
})
    .then(res => res.json())
    .then(json => {
        document.body.innerHTML = json['id']
    })
    .catch((error) => {
        document.body.innerHTML = error.message;
    })
}