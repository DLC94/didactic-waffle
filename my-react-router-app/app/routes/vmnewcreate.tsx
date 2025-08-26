import { useState } from "react";
import { useNavigate } from "react-router";

export default function CreateVM() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    image: "ubuntu-22.04",
    cpuCores: 1,
    memory: 1024,
    disk: 20,
  });

  const [creating, setCreating] = useState(false);
  const [sshKey, setSshKey] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleCreate = async () => {
    setCreating(true);

    // Simulate API call to create VM
    setTimeout(() => {
      setSshKey(
        "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqh...\n-----END PRIVATE KEY-----"
      );
      setCreating(false);
    }, 1500);
  };

  const handleCancel = () => {
    navigate("/vms");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Create Virtual Machine</h2>

      {!sshKey ? (
        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-lg border p-2"
              placeholder="my-vm"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <input
              type="text"
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full rounded-lg border p-2"
              placeholder="Optional description"
            />
          </div>

          {/* Image */}
          <div>
            <label className="block text-sm font-medium mb-1">Image</label>
            <select
              name="image"
              value={form.image}
              onChange={handleChange}
              className="w-full rounded-lg border p-2"
            >
              <option value="ubuntu-22.04">Ubuntu 22.04</option>
              <option value="ubuntu-20.04">Ubuntu 20.04</option>
              <option value="debian-12">Debian 12</option>
              <option value="centos-9">CentOS 9</option>
            </select>
          </div>

          {/* CPU Cores */}
          <div>
            <label className="block text-sm font-medium mb-1">CPU Cores</label>
            <input
              type="number"
              name="cpuCores"
              value={form.cpuCores}
              onChange={handleChange}
              className="w-full rounded-lg border p-2"
              min="1"
            />
          </div>

          {/* Memory */}
          <div>
            <label className="block text-sm font-medium mb-1">Memory (MB)</label>
            <input
              type="number"
              name="memory"
              value={form.memory}
              onChange={handleChange}
              className="w-full rounded-lg border p-2"
              min="512"
              step="256"
            />
          </div>

          {/* Disk */}
          <div>
            <label className="block text-sm font-medium mb-1">Disk Size (GB)</label>
            <input
              type="number"
              name="disk"
              value={form.disk}
              onChange={handleChange}
              className="w-full rounded-lg border p-2"
              min="10"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleCreate}
              disabled={creating}
              className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
            >
              {creating ? "Creating..." : "Create"}
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="rounded-lg border px-4 py-2 hover:bg-gray-100"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="bg-green-50 border border-green-300 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-green-800 mb-2">VM Created Successfully 🎉</h3>
          <p className="text-sm text-gray-700 mb-4">
            Your VM has been created. Below is your SSH private key. Please store it securely and do
            not share it.
          </p>
          <pre className="bg-gray-800 text-green-300 p-3 rounded-lg overflow-x-auto text-xs">
            {sshKey}
          </pre>
        </div>
      )}
    </div>
  );
}
