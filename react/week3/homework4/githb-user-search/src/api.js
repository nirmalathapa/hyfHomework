//const token = '9595d7497182088f0ba43b23092a9c6d40eab303';

const URL = "https://api.github.com/search/users";

export async function getGithubUser(query) {
  await delay(1000);
  const response = await fetch(`${URL}?q=${query}`);
  const body = await response.json();
  return body.items;
}


function delay(time){
  return new Promise((resolve) => {
    setInterval(resolve, time)
  });
}

