const baseUrl = "https://wedev-api.sky.pro/api";
const getTasksUrl = "/kanban";
const loginTasksUrl = "/user/login";
const regTasksUrl = "/user";

export async function getTasks({ token }) {
  const response = await fetch(baseUrl + getTasksUrl, {
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

export async function postTasks({ title, topic, description, date, token }) {
  const response = await fetch(baseUrl + getTasksUrl, {
    method: "POST",
    body: JSON.stringify({
      title,
      topic,
      description,
      date,
    }),
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error);
  }
  const data = await response.json();
  return data;
}

export async function loginTasks(login, password) {
  const response = await fetch(baseUrl + loginTasksUrl, {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error)
  }

  const data = await response.json();
  return data;
}

export async function regTasks(name, login, password) {
  const response = await fetch(baseUrl + regTasksUrl, {
    method: "POST",
    body: JSON.stringify({
      name,
      login,
      password,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error)
  }

  const data = await response.json();
  return data;
}
