export default class Server {
  private readonly SERVER_URL: string = 'http://localhost:3000';
  constructor() {}

  public async requestToServer(query, method, body = null) {
    try {
      const response = await fetch(`${this.SERVER_URL}${query}`, {
        method,
        body: body ? JSON.stringify(body) : null
      });
      if (!response.ok) throw new Error(response.statusText);
      return await response.json();
    } catch (error) {
      throw new Error(error);
    }
  }
}
