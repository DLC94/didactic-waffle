// screens/FunctionCreate.tsx
import { useState } from "react";

type Props = { goTo: (s: any) => void };

export default function FunctionCreate({ goTo }: Props) {
  const [name, setName] = useState("");
  const [runtime, setRuntime] = useState("python3.13");

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create Function</h1>
      <form className="space-y-4 p-4 rounded shadow">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Function Name"
          className="w-full p-2 border rounded"
        />
        <select
          value={runtime}
          onChange={(e) => setRuntime(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="python3.13">Python 3.13</option>
          <option value="nodejs20">Node.js 20</option>
        </select>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => goTo("function-main")}
            className="px-4 py-2 bg-gray-400 text-white rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
