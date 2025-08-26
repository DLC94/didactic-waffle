// screens/ComputeMain.tsx
type Props = { goTo: (s: any) => void };

export default function ComputeMain({ goTo }: Props) {
  const vms = [
    { id: "vm-123", name: "Test VM", status: "running", ip: "10.0.0.5" },
    { id: "vm-456", name: "Dev VM", status: "stopped", ip: "10.0.0.8" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Compute VMs</h1>
      <button
        onClick={() => goTo("compute-create")}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        + Create VM
      </button>

      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">ID</th>
            <th className="p-2">Name</th>
            <th className="p-2">Status</th>
            <th className="p-2">IP</th>
          </tr>
        </thead>
        <tbody>
          {vms.map((vm) => (
            <tr key={vm.id} className="border-t">
              <td className="p-2">{vm.id}</td>
              <td className="p-2">{vm.name}</td>
              <td className="p-2">{vm.status}</td>
              <td className="p-2">{vm.ip}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
