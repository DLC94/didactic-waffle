import { useState } from "react";

export default function VmDetails() {
  const [showConnect, setShowConnect] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Example VM data (you can fetch this from API later)
  const [vm, setVm] = useState({
    id: "vm-123456",
    name: "My Test VM",
    description: "Ubuntu VM for testing",
    status: "running",
    createdAt: "2025-08-01",
    updatedAt: "2025-08-10",
    launchTime: "2025-08-10T12:00:00Z",
    owner: "carlos",
    uptime: "2h 45m",
    storage: 20,
    memory: 2048,
    cpuCores: 2,
    ip: "192.168.0.101",
    sshUser: "ubuntu",
  });

  const handleUpdate = () => {
    setIsEditing(false);
    alert("Configuration updated!");
  };

  return (
    <div className="p-6 flex flex-col gap-6">
      {/* Row 1: Action buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => setShowConnect(!showConnect)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Connect
        </button>
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700">
          Start
        </button>
        <button className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700">
          Stop
        </button>
      </div>

      {/* Show SSH connect info */}
      {showConnect && (
        <div className="p-4 border rounded-lg shadow">
          <p className="font-mono text-sm">
            ssh -i mykey.pem {vm.sshUser}@{vm.ip}
          </p>
        </div>
      )}

      {/* Row 2: Details section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left column: Overview Details */}
        <div className="shadow rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">VM ID: {vm.id}</h2>
          <hr className="mb-4" />
          <div className="space-y-2 text-sm">
            <p><span className="font-medium">Name:</span> {vm.name}</p>
            <p><span className="font-medium">Description:</span> {vm.description}</p>
            <p><span className="font-medium">Status:</span> {vm.status}</p>
            <p><span className="font-medium">Created At:</span> {vm.createdAt}</p>
            <p><span className="font-medium">Updated At:</span> {vm.updatedAt}</p>
            <p><span className="font-medium">Launch Time:</span> {vm.launchTime}</p>
            <p><span className="font-medium">Owner:</span> {vm.owner}</p>
            <p><span className="font-medium">Uptime:</span> {vm.uptime}</p>
          </div>
        </div>

        {/* Right column: Config Details */}
        <div className="shadow rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Configuration</h2>
          <hr className="mb-4" />

          {!isEditing ? (
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">Storage:</span> {vm.storage} GB</p>
              <p><span className="font-medium">Memory:</span> {vm.memory} MB</p>
              <p><span className="font-medium">CPU Cores:</span> {vm.cpuCores}</p>
              <button
                onClick={() => setIsEditing(true)}
                className="mt-3 px-4 py-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600"
              >
                Edit
              </button>
            </div>
          ) : (
            <div className="space-y-3 text-sm">
              <div>
                <label className="block text-sm font-medium">Storage (GB)</label>
                <input
                  type="number"
                  value={vm.storage}
                  onChange={(e) => setVm({ ...vm, storage: parseInt(e.target.value) })}
                  className="w-full border rounded-lg p-2 mt-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Memory (MB)</label>
                <input
                  type="number"
                  value={vm.memory}
                  onChange={(e) => setVm({ ...vm, memory: parseInt(e.target.value) })}
                  className="w-full border rounded-lg p-2 mt-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">CPU Cores</label>
                <input
                  type="number"
                  value={vm.cpuCores}
                  onChange={(e) => setVm({ ...vm, cpuCores: parseInt(e.target.value) })}
                  className="w-full border rounded-lg p-2 mt-1"
                />
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleUpdate}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
                >
                  Update
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 bg-gray-400 text-white rounded-lg shadow hover:bg-gray-500"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
