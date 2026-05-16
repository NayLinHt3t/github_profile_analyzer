import { useState } from "react";
import { fetchUser, fetchRepos } from "../lib/github";
import type { ProfileData } from "../types/github";
import { buildProfileData } from "../lib/transforms";
type State =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "success"; data: ProfileData };
export function useGithubProfile() {
  const [state, setState] = useState<State>({ status: "idle" });
  async function fetchProfile(username: string) {
    setState({ status: "loading" });
    try {
      const [user, repos] = await Promise.all([
        fetchUser(username),
        fetchRepos(username),
      ]);
      setState({
        status: "success",
        data: buildProfileData(user, repos),
      });
    } catch (error) {
      setState({ status: "error", message: (error as Error).message });
    }
  }
  return { state, fetchProfile };
}
