const BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

class TodoService {
  #url = BASE_URL;

  // params: { method, body }
  async #request(url, params = {}) {
    const { method = 'GET', data } = params;

    const headers = {'accept': 'application/json'}
    const body = data ? JSON.stringify(data) : undefined,;

    if(data){
      headers['Content-Type'] = 'application/json' 
    }
    const response = await fetch(url, { method, headers, body: body});

    // handle specific codes like 401, 403, 404
    if(response.status === 404){
      throw new Error("not found", {cause: response})
    }

    // Good APIs return a valid json even for 400 / 500 Codes with a reason.
    // The Shape of the Error should be the same 
    const data = await response.json();
    
    if (!response.ok && data.error) {
      // throw an error if the response contains an error or if the response itself is not "valid"
      throw new Error(data.error.message, {cause: {error: data.error, response: response}});
    }
    if (!response.ok) {
      // fallback but should never occur
      throw new Error(`HTTP ${response.status} ${response.statusText}`, {cause: response});
    }

    return data;
  }

  async getTodos() {
    return this.#request(this.#url);
  }

  async getTodo(id) {
    return this.#request(`${this.#url}/${id}`);
  }

  async addTodo(todo) {
    return this.#request(this.#url, { method: 'POST', data: todo });
  }
}

export const todoService = new TodoService();
