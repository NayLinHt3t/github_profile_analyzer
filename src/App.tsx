import { fetchUser, fetchRepos } from "./lib/github";
import { buildProfileData } from "./lib/transforms";

const user = await fetchUser("naylinht3t");
const repos = await fetchRepos("naylinht3t");
const profile = buildProfileData(user, repos);
console.log(profile);

export default function App() {
  return <div>hello</div>;
}
