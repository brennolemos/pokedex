export const capitalize = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const getAllPokemon = <T>(url: string) => {
  return new Promise<T>(async (resolve) => {
    const response = await fetch(url);
    const data = await response.json();
    resolve(data);
  });
};

export const getPokemon = <T>(url: string) => {
  return new Promise<T>(async (resolve) => {
    const response = await fetch(url);
    const data = await response.json();
    resolve(data);
  });
};
