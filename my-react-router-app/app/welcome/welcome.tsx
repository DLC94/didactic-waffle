import React, {useEffect, useState} from 'react'
import api from '~/utils/axios';
import { Editor } from "@monaco-editor/react";

export function Welcome() {
  const [functions, setFunctions] = useState([])
  const [selectedFnId, setSelectedFnId] = useState('')
  const [code, setCode] = useState('def handler(event):\n    return \'Hello World\'')
  const [event, setEvent] = useState(JSON.stringify({'key':'value'}, null, 2))

  useEffect(() => {
    api.get('/').then(res => setFunctions(res.data));
  }, [])

  const handleSave = async () => {
    const res = await api.post('/function', {
      code,
      event: JSON.parse(event),
      memory: '128'
    })
    setSelectedFnId(res.data.id)
    const updatedFunctions = await api.get('/');
    setFunctions(updatedFunctions.data)
  }

  const handleTest = async () => {
    if(!selectedFnId) return alert('Select a function to test')
    const res = await api.post(`/test/${selectedFnId}`)
    alert('Function executed. ' + res.data.stdout)
  }

  return (
    <div className="p-4 space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Select Function:</label>
        <select
          value={selectedFnId}
          onChange={e => setSelectedFnId(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">-- Select a function --</option>
          {functions.map(fn => (
            <option key={fn.id} value={fn.id}>{fn.id}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Function Code</label>
          <Editor
            height="300px"
            defaultLanguage="python"
            value={code}
            onChange={value => setCode(value || '')}
            theme="vs-dark"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Event JSON</label>
          <Editor
            height="300px"
            defaultLanguage="json"
            value={event}
            onChange={value => setEvent(value || '')}
            theme="vs-dark"
          />
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button onClick={handleSave}>Save Function</button>
        <button onClick={handleTest}>Test Function</button>
      </div>
    </div>
  );
}
