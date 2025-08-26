import { useState } from "react";
import { Link, useNavigate } from "react-router";

export default function Sidebar() {
  const navigate = useNavigate()

  const [vms] = useState([
    { id: 1, name: "VM-1" },
    { id: 2, name: "VM-2" },
  ]);

  const [functions] = useState([
    { id: "f1", name: "Function-1" },
    { id: "f2", name: "Function-2" },
  ]);

  return (
    <div className="w-64 bg-gray-900 text-white h-screen flex flex-col p-4">
      {/* VMs Section */}
      <div>
        <h2 className="text-lg font-bold mb-2">VMs</h2>
        <button
          className="mt-3 w-full bg-blue-600 hover:bg-blue-500 text-white py-1 rounded"
          onClick={() => navigate('/vm/create')}
        >
          + Create VM
        </button>
        
        <ul className="space-y-1">
          {vms.map((vm) => (
            <li key={vm.id}>
                <Link to={`/vm/${vm.id}`}>{vm.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Divider */}
      <hr className="my-4 border-gray-600" />

      {/* Functions Section */}
      <div>
        <h2 className="text-lg font-bold mb-2">Functions</h2>
        <button
          className="mt-3 w-full bg-green-600 hover:bg-green-500 text-white py-1 rounded"
          onClick={() => navigate('/fn/create')}
        >
          + Create Function
        </button>
        
        <ul className="space-y-1">
          {functions.map((fn) => (
            <li key={fn.id}>
                <Link to={`/function/${fn.id}`}>{fn.name}</Link>
            </li>
          ))}
        </ul>
        
      </div>
    </div>
  )
}