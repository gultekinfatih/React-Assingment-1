import axios from "axios";

async function getData(Number) {
  const { data: users } = await axios(
    "https://jsonplaceholder.typicode.com/users/" + Number
  );

  const { data: posts } = await axios(
    "https://jsonplaceholder.typicode.com/posts?id=" + Number
  );

  // console.log("users", users);
  // console.log("post1", post1);

  return { users, posts };
}

export default getData;
