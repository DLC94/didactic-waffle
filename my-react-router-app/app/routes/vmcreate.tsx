// screens/ComputeCreate.tsx
import { useState } from "react";

type Props = { goTo: (s: any) => void };

export default function ComputeCreate({ goTo }: Props) {
  const [name, setName] = useState("");
  const [cpu, setCpu] = useState(2);
  const [memory, setMemory] = useState(2048);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create VM</h1>
      <form className="space-y-4 p-4 rounded shadow">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="VM Name"
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          value={cpu}
          onChange={(e) => setCpu(Number(e.target.value))}
          placeholder="CPU Cores"
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          value={memory}
          onChange={(e) => setMemory(Number(e.target.value))}
          placeholder="Memory (MB)"
          className="w-full p-2 border rounded"
        />
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => goTo("compute-main")}
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
