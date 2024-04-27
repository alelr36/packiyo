class Api {
    private headers;

    constructor(private readonly token: string) {
        this.headers = {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/vnd.api+json',
            'Content-Type': 'application/vnd.api+json'
        };
    }

    public async get(url: string) {
        const request = await fetch(url, {
            method: 'GET',
            headers: this.headers
        });

        return request;
    }

    public async post (url: string, body: unknown) {
        const request = await fetch(url, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(body)
        });

        return request;
    }

    public async patch (url: string, body: unknown) {
        const request = await fetch(url, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify(body)
        });

        return request;
    }

    public async delete (url: string) {
        await fetch(url, {
            method: 'DELETE',
            headers: this.headers,
        });
    }
}

const apiClientSingleton = () => new Api(process.env.API_TOKEN as string);

type ApiClientSingleton = ReturnType<typeof apiClientSingleton>;

const globalApi = globalThis as unknown as {
	api: ApiClientSingleton | undefined;
};

const api = globalApi.api ?? apiClientSingleton();

export default api;