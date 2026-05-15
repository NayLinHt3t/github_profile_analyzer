import type { GitHubRepo, GitHubUser } from "../types/github";
const GITHUB_API_BASE = "https://api.github.com";

export async function fetchUser(username: string): Promise<GitHubUser> {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${username}`);
    if (!response.ok) {
      throw new Error(`User ${username} not found`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching user ${username}:`, error);
    throw error;
  }
}

export async function fetchRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${username}/repos?per_page=100&sort=stars`,
    );
    if (!response.ok) {
      throw new Error(`User ${username} not found or no repos available`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching repos for user ${username}:`, error);
    throw error;
  }
}
