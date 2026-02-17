export async function fetchAPI(url: string) {
  const res = await fetch(url);
  return res.json();
}