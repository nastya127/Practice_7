const baseUrl = "https://jsonplaceholder.typicode.com";

async function getAlbum(id) {
  const response = await fetch(`${baseUrl}/albums/${id}`);
  const album = await response.json();
  return album;
}

async function getSpecifiedAlbums(ids = []) {
  const promises = ids.map(id => getAlbum(id));
  const albums = await Promise.all(promises);
  return albums;
}

getSpecifiedAlbums([1, 15])
  .then((results) => {
    console.log("Results: ", results);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
