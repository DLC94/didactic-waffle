// app/vms/[id]/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function VmDetailsScreen() {
  const params = useParams();
  const vmId = params?.id as string;

  const [vm, setVm] = useState<any>(null);

  useEffect(() => {
    // Fetch VM details from API
    // Replace with your API call
    setVm({
      id: vmId,
      name: "My Test VM",
      description: "Ubuntu server for testing",
      status: "running",
      network: {
        ip: "192.168.1.100",
        sshUser: "ubuntu",
        sshPort: 22,
      },
      memory: "2048 MB",
      cpuCores: 2,
      storage: "20 GB",
      uptime: "3h 24m",
    });
  }, [vmId]);

  const handleAction = (action: string) => {
    console.log(`Performing ${action} on VM ${vmId}`);
    // call API for start/stop/delete
  };

  if (!vm) {
    return <p className="p-6">Loading VM details...</p>;
  }

  return (
    <div className="p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>VM Details - {vm.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-500">VM ID</p>
              <p className="font-medium">{vm.id}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Status</p>
              <p className="font-medium">{vm.status}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="font-medium">{vm.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Description</p>
              <p className="font-medium">{vm.description}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Network</p>
              <p className="font-medium">
                {vm.network.ip} (ssh {vm.network.sshUser}@{vm.network.ip} -p{" "}
                {vm.network.sshPort})
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Memory</p>
              <p className="font-medium">{vm.memory}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">CPU Cores</p>
              <p className="font-medium">{vm.cpuCores}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Storage</p>
              <p className="font-medium">{vm.storage}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Uptime</p>
              <p className="font-medium">{vm.uptime}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button
          variant="default"
          onClick={() => handleAction("start")}
          disabled={vm.status === "running"}
        >
          Start
        </Button>
        <Button
          variant="secondary"
          onClick={() => handleAction("stop")}
          disabled={vm.status === "stopped"}
        >
          Stop
        </Button>
        <Button variant="destructive" onClick={() => handleAction("delete")}>
          Delete
        </Button>
      </div>
    </div>
  );
}
