const token = "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck";

export async function getTasks() {
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