//const token = '9595d7497182088f0ba43b23092a9c6d40eab303';

const URL = "https://api.github.com/search/users";

export async function getGithubUser(query) {
  const response = await fetch(`${URL}?q=${query}`);
  const body = await response.json();
  return body.items;
}
