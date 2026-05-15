import type {
  GitHubRepo,
  GitHubUser,
  LanguageBreakdown,
  ProfileData,
} from "../types/github";
export function getTopRepos(repos: GitHubRepo[]): GitHubRepo[] {
  const sortedRepos = [...repos]
    .filter((repo) => !repo.fork)
    .sort((a, b) => b.stargazers_count - a.stargazers_count);
  return sortedRepos.slice(0, 5);
}

export function getLanguageBreakdown(repos: GitHubRepo[]): LanguageBreakdown[] {
  const counts: Record<string, number> = {};
  let total = 0;
  repos.forEach((repo) => {
    if (repo.language && repo.language !== "null") {
      counts[repo.language] = counts[repo.language]
        ? counts[repo.language] + 1
        : 1;
      total++;
    }
  });

  return Object.entries(counts)
    .map(([name, repos]) => ({
      name,
      repos,
      percentage: total > 0 ? (repos / total) * 100 : 0,
    }))
    .sort((a, b) => b.repos - a.repos);
}

export function buildProfileData(
  user: GitHubUser,
  repos: GitHubRepo[],
): ProfileData {
  return {
    user,
    repos,
    topFiveRepos: getTopRepos(repos),
    languages: getLanguageBreakdown(repos),
  };
}
