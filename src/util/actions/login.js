export default async function login(username, password, state) {
  let res = await fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  res = await res.json();

  if (res.error) {
    return { error: true, error_message: "failed to log in" };
  } else {
    return { success: true, success_message: "successfully logged in" };
  }
}
