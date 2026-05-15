export interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  blog: string;
  company: string | null;
  followers: number;
  following: number;
  public_repos: number;
}

export interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  fork: boolean;
  created_at: string;
  updated_at: string;
}

export interface LanguageBreakdown {
  name: string;
  repos: number;
  percentage: number;
}

export interface ProfileData {
  user: GitHubUser;
  repos: GitHubRepo[];
  topFiveRepos: GitHubRepo[];
  languages: LanguageBreakdown[];
}
