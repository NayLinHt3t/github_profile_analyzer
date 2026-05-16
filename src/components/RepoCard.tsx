import type { GitHubRepo } from "../types/github";
import { formatDate } from "../lib/utils";
interface Props {
  repo: GitHubRepo;
}
export function RepoCard({ repo }: Props) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 hover:shadow-md transition-shadow">
      <a
        href={repo.html_url}
        className="text-lg font-bold text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {repo.name}
      </a>
      {repo.description && (
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{repo.description}</p>
      )}
      <div className="flex flex-wrap gap-3 mt-3 text-sm text-gray-500">
        <span>⭐ {repo.stargazers_count}</span>
        <span>🍴 {repo.forks_count}</span>
        {repo.language && <span>📝 {repo.language}</span>}
        <span>📅 {formatDate(repo.updated_at)}</span>
      </div>
    </div>
  );
}
