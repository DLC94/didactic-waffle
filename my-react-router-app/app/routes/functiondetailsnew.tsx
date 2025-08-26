import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Editor from "@monaco-editor/react"
import { useState } from "react"

export default function FunctionDetailsScreen() {
  const [code, setCode] = useState(`def handler(event):\n    return {"message": "Hello from Lambda!"}`)
  const [event, setEvent] = useState(`{\n  "key": "value"\n}`)
  const [logs, setLogs] = useState<string[]>([])

  const handleSave = () => {
    setLogs((prev) => [...prev, "✅ Function code saved successfully."])
  }

  const handleInvoke = () => {
    setLogs((prev) => [...prev, `🚀 Function invoked with event: ${event}`])
  }

  return (
    <div className="p-6 space-y-6">
      {/* Function Details */}
      <Card>
        <CardHeader>
          <CardTitle>Function Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p><span className="font-semibold">Name:</span> my-function</p>
              <p><span className="font-semibold">Description:</span> Sample function to test</p>
            </div>
            <div>
              <p><span className="font-semibold">Memory:</span> 256 MB</p>
              <p><span className="font-semibold">CPU:</span> 1 core</p>
            </div>
            <div>
              <p><span className="font-semibold">Timeout:</span> 5 sec</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code & Event Section */}
      <div className="grid grid-cols-2 gap-6">
        {/* Code Editor */}
        <Card>
          <CardHeader>
            <CardTitle>Code</CardTitle>
          </CardHeader>
          <CardContent>
            <Editor
              height="400px"
              defaultLanguage="python"
              value={code}
              onChange={(value) => setCode(value || "")}
              theme="vs-dark"
            />
          </CardContent>
        </Card>

        {/* Event Editor */}
        <Card>
          <CardHeader>
            <CardTitle>Event</CardTitle>
          </CardHeader>
          <CardContent>
            <Editor
              height="400px"
              defaultLanguage="json"
              value={event}
              onChange={(value) => setEvent(value || "")}
              theme="vs-dark"
            />
          </CardContent>
        </Card>
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <Button onClick={handleSave}>Save</Button>
        <Button variant="outline" onClick={handleInvoke}>Invoke</Button>
      </div>

      {/* Logs */}
      <Card>
        <CardHeader>
          <CardTitle>Logs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-black text-green-400 p-3 rounded-lg font-mono h-48 overflow-y-auto">
            {logs.length === 0 ? (
              <p>No logs yet.</p>
            ) : (
              logs.map((log, idx) => <p key={idx}>{log}</p>)
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
