const API_URL = "http://localhost:8080";

export async function TaskLoadService(user) {
    const response = await fetch(`${API_URL}/task/getListTask/${user}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer nL0SIQ38zFNfe1ggUJ66JYklQLgMt0sHmmRYMon7GaY',
        },
    });
    if (!response.ok){
        throw new Error('Error al extraer las tareas');
    }

    const data = await response.json();
    return data;
};