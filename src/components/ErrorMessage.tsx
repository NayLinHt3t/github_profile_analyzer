interface Props {
  message: string;
}
export function ErrorMessage({ message }: Props) {
  return (
    <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 mb-4">
      <p className="font-medium">{message}</p>
    </div>
  );
}
