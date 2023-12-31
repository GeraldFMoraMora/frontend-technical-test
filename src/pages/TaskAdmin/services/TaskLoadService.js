const API_URL = "http://localhost:8080";

export async function TaskLoadService(user, token) {
    const response = await fetch(`${API_URL}/task/getListTask/${user}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });
    if (!response.ok){
        throw new Error('Error al extraer las tareas');
    }
    const data = await response.json();

    if(data.error){
        throw new Error(data.message);
    }
    console.log(data);

    return data;
};
export async function TaskDeleteService(user, id, token) {
    const response = await fetch(`${API_URL}/task/deleteTask/${id}/${user}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });
    if (!response.ok){
        throw new Error('Error al extraer las tareas');
    }

    const data = await response.json();
    return data;
};
export async function TaskAddService(description, state, image_url, is_active, customer_id, token) {
    console.log(JSON.stringify({ description, state, image_url, is_active, customer_id, token }));
    const response = await fetch(`${API_URL}/task/addTask`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ description, state, image_url, is_active, customer_id }),
    });
    if (!response.ok){
        throw new Error('Error al registrar tarea');
    }
    console.log(JSON.stringify({ description, state, image_url, is_active, customer_id }));

    const data = await response.json();
    console.log(data);
    return data;
};
export async function TaskUpdateService(description, state, image_url, is_active, customer_id, token) {
    console.log(JSON.stringify({ description, state, image_url, is_active, customer_id }));
    const response = await fetch(`${API_URL}/task/updateTask`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ description, state, image_url, is_active, customer_id }),
    });
    if (!response.ok){
        throw new Error('Error al registrar tarea');
    }
    console.log(JSON.stringify({ description, state, image_url, is_active, customer_id }));

    const data = await response.json();
    console.log(data);
    return data;
};