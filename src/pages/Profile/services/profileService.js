const API_URL = "http://localhost:8080";

export async function findByName(name) {
    const response = await fetch(`${API_URL}/customer/findByName/${name}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok){
        throw new Error('Error al obtener el usuario solicitado');
    }

    const data = await response.json();
    console.log(data);
    return data;
}