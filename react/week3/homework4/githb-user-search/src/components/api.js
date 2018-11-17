
const URL = "https://api.github.com/search/users";

export async function getGithubUser(query) {
    //await delay(2000);
    const response = await fetch(`${URL}?q=${query}`);
    const body = await response.json();
    return body.items;
}

const userURL = "https://api.github.com/user";

export async function getSingleGithubUser(user) {
    //await delay(2000);
    const response = await fetch(`${userURL}/${user}`);        
    console.log("this is body ", response)
    const body = await response.json();
    console.log("this is body ", body)
    return body;
}

