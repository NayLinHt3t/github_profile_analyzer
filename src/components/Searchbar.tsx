import React, { useState } from "react";
interface Props {
  onSearch: (value: string) => void;
  isLoading: boolean;
}

export function Searchbar({ onSearch, isLoading }: Props) {
  const [input, setInput] = useState("");
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
    }
  }
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full max-w-md">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter GitHub username..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isLoading ? "Searching..." : "Search"}
      </button>
    </form>
  );
}
