export async function getAnimals(
  token: string,
  page: number,
  limit: number = 30
) {
  const response = await fetch(
    `https://api.petfinder.com/v2/animals?limit=${limit}&page=${page}`,
    {
      cache: "no-store",
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  const data = await response.json();
  return data;
}

export async function getAnimal(token: string, id: number) {
  const response = await fetch(`https://api.petfinder.com/v2/animals/${id}`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  const data = await response.json();
  return data;
}
