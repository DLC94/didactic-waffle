import { useState } from "react";
import { useNavigate } from "react-router";
import Editor from "@monaco-editor/react";

export default function CreateFunctionScreen() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [runtime, setRuntime] = useState("python3.13");
  const [memory, setMemory] = useState("");
  const [cpuCores, setCpuCores] = useState("");
  const [timeout, setTimeout] = useState("");
  const [code, setCode] = useState("def handler(event):\n    return {'message': 'Hello World'}");

  const handleCreate = () => {
    console.log({
      name,
      description,
      runtime,
      memory,
      cpuCores,
      timeout,
      code,
    });
    alert("Function created successfully!");
    navigate("/functions");
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Create Function</h1>

      {/* Name */}
      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded-lg p-2"
          placeholder="Enter function name"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border rounded-lg p-2"
          placeholder="Enter function description"
        />
      </div>

      {/* Runtime */}
      <div>
        <label className="block text-sm font-medium mb-1">Runtime</label>
        <select
          value={runtime}
          onChange={(e) => setRuntime(e.target.value)}
          className="w-full border rounded-lg p-2"
        >
          <option value="python3.13">Python 3.13</option>
          <option value="python3.11">Python 3.11</option>
          <option value="nodejs20.x">Node.js 20.x</option>
        </select>
      </div>

      {/* Memory */}
      <div>
        <label className="block text-sm font-medium mb-1">Memory (MB)</label>
        <input
          type="number"
          value={memory}
          onChange={(e) => setMemory(e.target.value)}
          className="w-full border rounded-lg p-2"
          placeholder="e.g., 256"
        />
      </div>

      {/* CPU Cores */}
      <div>
        <label className="block text-sm font-medium mb-1">CPU Cores</label>
        <input
          type="number"
          value={cpuCores}
          onChange={(e) => setCpuCores(e.target.value)}
          className="w-full border rounded-lg p-2"
          placeholder="e.g., 1"
        />
      </div>

      {/* Timeout */}
      <div>
        <label className="block text-sm font-medium mb-1">Timeout (seconds)</label>
        <input
          type="number"
          value={timeout}
          onChange={(e) => setTimeout(e.target.value)}
          className="w-full border rounded-lg p-2"
          placeholder="e.g., 5"
        />
      </div>

      {/* Code Editor */}
      <div>
        <label className="block text-sm font-medium mb-2">Function Code</label>
        <div className="border rounded-lg overflow-hidden">
          <Editor
            height="200px"
            defaultLanguage="python"
            value={code}
            onChange={(val) => setCode(val || "")}
            theme="vs-dark"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={handleCreate}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Create
        </button>
        <button
          onClick={() => navigate("/functions")}
          className="px-4 py-2 bg-gray-300 rounded-lg"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
