export const getApiData: any = () => {
    const category:string = 'general'
    const limit:number = 20
    const apiKey:string = 'Tlpiy7d9s9RpAkcN1ZI/mw==w80MkFur50vVZGkJ'

    return fetch(`https://api.api-ninjas.com/v1/trivia?category=${category}&limit=${limit}`, {
    headers: {
        'X-Api-Key': apiKey,
        'Content-Type': 'application/json'
    }
    })
    .then(response => {
        if(!response.ok) {
            throw new Error('Network response is not working')
        } else {
            return response.json()
        }
    })
}

