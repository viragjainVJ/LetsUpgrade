const fetchResponse = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos');
    if(response.status === 200){
        let data = await response.json()
        console.table(data)
    } else {
        console.error('Fetch Call Failed with status:', response.status)
    }
}

fetchResponse();