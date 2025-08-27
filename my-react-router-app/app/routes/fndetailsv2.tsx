import { useState } from "react";
import Editor from "@monaco-editor/react";

export default function FunctionVmDetails() {
  const [description, setDescription] = useState("My serverless function");
  const [memory, setMemory] = useState("128");
  const [timeout, setTimeout] = useState("30");
  const [cpu, setCpu] = useState("1");
  const [editing, setEditing] = useState(false);

  return (
    <div className="p-6 flex flex-col gap-6">
      {/* Row 1 - Overview & Config */}
      <div className="grid grid-cols-2 gap-6">
        {/* Overview */}
        <div className="shadow rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-2">Overview</h2>
          <hr className="mb-4" />
          <div className="space-y-2 text-sm">
            <p><span className="font-semibold">Name:</span> MyFunction</p>
            <p><span className="font-semibold">Description:</span> {description}</p>
            <p><span className="font-semibold">Runtime:</span> python3.13</p>
            <p><span className="font-semibold">Created At:</span> 2025-08-25</p>
            <p><span className="font-semibold">Updated At:</span> 2025-08-25</p>
          </div>
        </div>

        {/* Config - Editable */}
        <div className="shadow rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-2">General Configuration</h2>
          <hr className="mb-4" />
          <div className="space-y-4 text-sm">
            <div>
              <label className="block text-gray-600">Description</label>
              <input
                disabled={!editing}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border rounded px-2 py-1"
              />
            </div>
            <div>
              <label className="block text-gray-600">Memory (MB)</label>
              <input
                disabled={!editing}
                value={memory}
                onChange={(e) => setMemory(e.target.value)}
                className="w-full border rounded px-2 py-1"
              />
            </div>
            <div>
              <label className="block text-gray-600">Timeout (s)</label>
              <input
                disabled={!editing}
                value={timeout}
                onChange={(e) => setTimeout(e.target.value)}
                className="w-full border rounded px-2 py-1"
              />
            </div>
            <div>
              <label className="block text-gray-600">CPU Cores</label>
              <input
                disabled={!editing}
                value={cpu}
                onChange={(e) => setCpu(e.target.value)}
                className="w-full border rounded px-2 py-1"
              />
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            {!editing ? (
              <button
                onClick={() => setEditing(true)}
                className="bg-blue-600 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
            ) : (
              <>
                <button
                  onClick={() => setEditing(false)}
                  className="bg-green-600 text-white px-3 py-1 rounded"
                >
                  Update
                </button>
                <button
                  onClick={() => setEditing(false)}
                  className="bg-gray-400 text-white px-3 py-1 rounded"
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Row 2 - Editors */}
      <div className="grid grid-cols-2 gap-6">
        <div className="shadow rounded-2xl p-4">
          <h3 className="text-lg font-semibold mb-2">Code</h3>
          <Editor
            height="300px"
            defaultLanguage="python"
            defaultValue={`def handler(event, context):\n    return {"message": "Hello from function"}`}
            theme="vs-dark"
          />
        </div>
        <div className="shadow rounded-2xl p-4">
          <h3 className="text-lg font-semibold mb-2">Event</h3>
          <Editor
            height="300px"
            defaultLanguage="json"
            defaultValue={`{\n  "key": "value"\n}`}
            theme="vs-dark"
          />
        </div>
      </div>

      {/* Row 3 - Buttons */}
      <div className="flex gap-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded shadow">
          Save
        </button>
        <button className="bg-green-600 text-white px-4 py-2 rounded shadow">
          Invoke
        </button>
      </div>

      {/* Row 4 - Logs */}
      <div className="shadow rounded-2xl p-4">
        <h3 className="text-lg font-semibold mb-2">Logs</h3>
        <div className="bg-gray-900 text-green-400 text-sm font-mono rounded p-3 h-48 overflow-auto">
          <p>[2025-08-25 12:00:00] Function invoked successfully</p>
          <p>[2025-08-25 12:00:01] Response: {"message: Hello from function"}</p>
        </div>
      </div>
    </div>
  );
}
