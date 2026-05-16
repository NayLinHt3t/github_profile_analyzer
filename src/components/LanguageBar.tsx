import type { LanguageBreakdown } from "../types/github";
interface Props {
  languageBreakdown: LanguageBreakdown;
}

export function LanguageBar({ languageBreakdown }: Props) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-gray-700">{languageBreakdown.name}</span>
        <span className="text-gray-500">
          {languageBreakdown.percentage.toFixed(1)}% · {languageBreakdown.repos} repos
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="h-2.5 rounded-full bg-blue-500"
          style={{ width: `${languageBreakdown.percentage}%` }}
        />
      </div>
    </div>
  );
}
