const URL = `https://pixabay.com/api`;
const API_KEY = `key=22260377-843feab13a68cee38d30608c2`;

function fetchPicture(name, page) {
  return fetch(
    `${URL}/?q=${name}&page=${page}&${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => response.json());
}

export default fetchPicture;
