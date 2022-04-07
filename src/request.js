const API_END_POINT = "http://localhost:3000/todos";

const request = async ({ url, options = {} }) => {
  try {
    const fullUrl = `${API_END_POINT}${url}`;
    const response = await fetch(fullUrl, options);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export { request };
