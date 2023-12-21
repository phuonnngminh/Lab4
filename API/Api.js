//Lê Phương Minh - 20521602

export const fetchProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  return await res.json();
};

export const fetchUserLogin = async ({ username, password }) => {
  const res = await fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
  return await res.json();
};

export const fetchUserData = async (id) => {
  const res = await fetch("https://fakestoreapi.com/users/" + id);
  return await res.json();
};

export const fetchUpdateUserData = async (userData, id) => {
  const res = await fetch("https://fakestoreapi.com/users/" + id, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(userData),
  });
  return await res.json();
};
