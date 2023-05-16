const api = "https://reactnd-books-api.udacity.com";

let token = localStorage.token;

if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token,
};

export const get = (bookId) =>
  fetch(`${api}/books/${bookId}`, { headers })
    .then((res) => res.json())
    .then((data) => data.book);

export async function getAll() {
  let resp = await fetch(`${api}/books`, { headers });
  let jsonData = await resp.json();
  var result = { books: jsonData.books };
  return result;
}

export async function update(book, shelf) {
  let resp = await fetch(`${api}/books/${book.id}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ shelf }),
  });
  return await resp.json();
}

export async function search(query, maxResults) {
  let res = await fetch(`${api}/search`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, maxResults }),
  });
  let data = await res.json();
  return data.books;
}
