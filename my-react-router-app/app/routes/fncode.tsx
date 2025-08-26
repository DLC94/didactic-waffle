// screens/FunctionCode.tsx
import { useState } from "react";
import Editor from "@monaco-editor/react";

type Props = { goTo: (s: any) => void };

export default function FunctionCode({ goTo }: Props) {
  // const [code, setCode] = useState(
  //   `def handler(event):\n    return {"msg": "Hello World"}`
  // );
  // const [event, setEvent] = useState(`{"key": "value"}`);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Function: ImageProcessor</h1>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h2 className="font-semibold mb-2">Code</h2>
          <Editor
            height="400px"
            defaultLanguage="python"
            // value={code}
            // onChange={(v) => setCode(v || "")}
          />
        </div>
        <div>
          <h2 className="font-semibold mb-2">Event</h2>
          <Editor
            height="400px"
            defaultLanguage="json"
            // value={event}
            // onChange={(v) => setEvent(v || "")}
          />
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <button
          onClick={() => goTo("function-main")}
          className="px-4 py-2 bg-gray-400 text-white rounded"
        >
          Back
        </button>
        <button className="px-4 py-2 bg-green-600 text-white rounded">
          Run Function
        </button>
      </div>
    </div>
  );
}
