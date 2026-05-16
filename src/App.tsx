import { useGithubProfile } from "./hooks/useGithubProfile";
import { ProfilePage } from "./pages/ProfilePage";
import { ErrorMessage } from "./components/ErrorMessage";
import { SearchPage } from "./pages/SearchPage";
export default function App() {
  const { state, fetchProfile } = useGithubProfile();
  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {state.status === "error" && <ErrorMessage message={state.message} />}
        {state.status === "success" && <ProfilePage profileData={state.data} />}
        {(state.status === "idle" || state.status === "loading") && (
          <SearchPage
            onSearch={fetchProfile}
            isLoading={state.status === "loading"}
          />
        )}
      </div>
    </div>
  );
}
