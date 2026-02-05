export interface ApiClientOptions {
  baseUrl: string;
  getToken?: () => string | null;
}

async function request<T>(
  method: string,
  url: string,
  body?: unknown,
  token?: string | null
): Promise<T> {
  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export function createApiClient(options: ApiClientOptions) {
  const { baseUrl, getToken } = options;

  return {
    get: <T>(path: string) => request<T>("GET", `${baseUrl}${path}`, undefined, getToken?.()),
    post: <T>(path: string, body?: unknown) =>
      request<T>("POST", `${baseUrl}${path}`, body, getToken?.()),
    patch: <T>(path: string, body?: unknown) =>
      request<T>("PATCH", `${baseUrl}${path}`, body, getToken?.()),
    del: <T>(path: string) => request<T>("DELETE", `${baseUrl}${path}`, undefined, getToken?.()),
  };
}
