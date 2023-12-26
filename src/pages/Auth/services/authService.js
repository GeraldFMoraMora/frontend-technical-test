const API_URL = "http://localhost:8080";

export async function login(name, password) {
    const response = await fetch(`${API_URL}/customer/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password }),
    });
    if (!response.ok){
        throw new Error('Error al autenticar');
    }
    console.log(JSON.stringify({ name, password }));

    const data = await response.json();
    console.log(data);
    return data;
}

