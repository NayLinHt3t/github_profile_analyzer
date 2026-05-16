import type { ProfileData } from "../types/github";
import { ProfileHeader } from "../components/ProfileHeader";
import { RepoCard } from "../components/RepoCard";
import { LanguageBar } from "../components/LanguageBar";
interface Props {
  profileData: ProfileData;
}

export function ProfilePage({ profileData }: Props) {
  return (
    <div className="space-y-6">
      <ProfileHeader user={profileData.user} />
      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-3">Top Repositories</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {profileData.topFiveRepos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-3">Language Breakdown</h2>
        <div className="space-y-3">
          {profileData.languages.map((lang) => (
            <LanguageBar key={lang.name} languageBreakdown={lang} />
          ))}
        </div>
      </div>
    </div>
  );
}
