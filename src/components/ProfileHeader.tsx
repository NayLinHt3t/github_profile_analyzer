import type { GitHubUser } from "../types/github";
interface Props {
  user: GitHubUser;
}

export function ProfileHeader({ user }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <div className="flex items-center gap-4">
        <img
          src={user.avatar_url}
          alt={`${user.login}'s avatar`}
          className="w-20 h-20 rounded-full ring-2 ring-gray-200"
        />
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-bold text-gray-900">{user.name || user.login}</h2>
          <p className="text-gray-400 text-sm">@{user.login}</p>
          {user.bio && <p className="text-gray-600 text-sm">{user.bio}</p>}
          {user.company && <p className="text-gray-500 text-sm">{user.company}</p>}
          {user.blog && (
            <a
              href={
                user.blog.startsWith("http")
                  ? user.blog
                  : `https://${user.blog}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-sm"
            >
              {user.blog}
            </a>
          )}
        </div>
      </div>
      <div className="flex gap-8 mt-4 pt-4 border-t border-gray-100">
        <div className="text-center">
          <p className="font-bold text-gray-900">{user.followers}</p>
          <p className="text-gray-500 text-xs">Followers</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-gray-900">{user.following}</p>
          <p className="text-gray-500 text-xs">Following</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-gray-900">{user.public_repos}</p>
          <p className="text-gray-500 text-xs">Repos</p>
        </div>
      </div>
    </div>
  );
}
