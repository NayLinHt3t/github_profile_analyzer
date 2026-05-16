import { Searchbar } from "../components/Searchbar";
interface Props {
  onSearch: (value: string) => void;
  isLoading: boolean;
}
export function SearchPage({ onSearch, isLoading }: Props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center">
      <h1 className="text-4xl font-bold text-gray-800">
        Search for a GitHub Profile
      </h1>
      <p className="text-gray-500 text-lg">
        Enter a username to explore their repositories and language stats
      </p>
      <Searchbar onSearch={onSearch} isLoading={isLoading} />
    </div>
  );
}
