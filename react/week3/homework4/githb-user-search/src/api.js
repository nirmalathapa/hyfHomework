
const URL = "https://api.github.com/search/users";

export async function getGithubUser(query) {
  try {
    await delay(1000);
    const response = await fetch(`${URL}?q=${query}`);
    const body = await response.json();
    return body.items;
  } catch (e) {
    console.log(e);
  }
}

function delay(time) {
  return new Promise(resolve => {
    setInterval(resolve, time);
  });
}
