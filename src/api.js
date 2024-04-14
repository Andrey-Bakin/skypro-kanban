export async function getTasks({token}) {
    const response = await fetch("https://wedev-api.sky.pro/api/kanban", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method: "GET",
    });

    if (!response.ok) {
        throw new Error("Ошибка сервера");
    }

    const data = await response.json();
    return data;
}

export async function loginTasks( login, password ) {
    const response = await fetch("https://wedev-api.sky.pro/api/user/login", {
        method: "POST",
        body: JSON.stringify({
            login,
            password,
        }),
    });

    if (response.status === 400) {
        throw new Error("Неправильный логин или пароль");
    }

    const data = await response.json();
    return data;
}

export async function regTasks( name, login, password ) {
    const response = await fetch("https://wedev-api.sky.pro/api/user", {
        method: "POST",
        body: JSON.stringify({
            name,
            login,
            password,
        }),
    });

    if (response.status === 400) {
        throw new Error("Пользователь с таким логином уже сущетсвует");
    }

    const data = await response.json();
    return data;
}