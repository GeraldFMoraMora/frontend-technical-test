const API_URL = "http://localhost:8080";

export async function signUp(name, 
                            password,
                            telephone,
                            age_range,
                            gender,
                            is_active) {
    if (gender === 'Men'){
        gender = 1;
    }else{
        gender = 0;
    }

    console.log(JSON.stringify({ name, 
                                    password, 
                                    telephone,
                                    age_range,
                                    gender,
                                    is_active }));
    const response = await fetch(`${API_URL}/customer/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, 
                            password, 
                            telephone,
                            age_range,
                            gender,
                            is_active }),
    });
    if (!response.ok){
        throw new Error('Error al registrar');
    }
    console.log(JSON.stringify({ name, 
        password, 
        telephone,
        age_range,
        gender,
        is_active }));

    const data = await response.json();
    console.log(data);
    return data;
}