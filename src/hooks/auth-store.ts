import { Store } from "@tauri-apps/plugin-store";

let store: Store | null = null;

async function getStore(): Promise<Store> {
  if (!store) {
    store = await Store.load(".auth.json");
  }
  return store;
}

export async function saveToken(token: string) {
  const store = await getStore();
  await store.set("token", token);
  await store.save();
}

export async function getToken(): Promise<string | null> {
  const store = await getStore();
  return (await store.get<string>("token")) ?? null;
}

export async function clearToken() {
  const store = await getStore();
  await store.delete("token");
  await store.save();
}
