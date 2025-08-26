// screens/FunctionMain.tsx
type Props = { goTo: (s: any) => void };

export default function FunctionMain({ goTo }: Props) {
  const functions = [
    { id: "fn-1", name: "ImageProcessor", runtime: "python3.13" },
    { id: "fn-2", name: "DataCleaner", runtime: "nodejs20" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Functions</h1>
      <button
        onClick={() => goTo("function-create")}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        + Create Function
      </button>

      <ul className="space-y-2">
        {functions.map((fn) => (
          <li
            key={fn.id}
            onClick={() => goTo("function-code")}
            className="cursor-pointer p-4 bg-white shadow rounded hover:bg-gray-100"
          >
            <p className="font-semibold">{fn.name}</p>
            <p className="text-sm text-gray-600">{fn.runtime}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
