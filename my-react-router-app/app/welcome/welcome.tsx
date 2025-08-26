import React, {useEffect, useState} from 'react'
import api from '~/utils/axios';
import { Editor } from "@monaco-editor/react";

const DEFAULT_CODE = 'def handler(event):\n    return \'Hello World\''
const DEFAULT_EVENT = JSON.stringify({'key':'value'}, null, 2)

export function Welcome() {
  const [functions, setFunctions] = useState([])
  const [selectedFnId, setSelectedFnId] = useState('')
  const [code, setCode] = useState(DEFAULT_CODE)
  const [event, setEvent] = useState(DEFAULT_EVENT)
  const [logs, setLogs] = useState([])

  useEffect(() => {
    api.get('/').then(res => setFunctions(res.data));
  }, [])

  const handleSave = async () => {
    const data = {code, event: JSON.parse(event), memory: 128}
    let endpoint = '/function'
    if(!(selectedFnId === '')) {
      data['id'] = selectedFnId
      endpoint += `/${selectedFnId}`
    }  

    const res = await api.post(endpoint, data)
    setSelectedFnId(res.data.id)
    const updatedFunctions = await api.get('/');
    setFunctions(updatedFunctions.data)
  }

  const changeFn = async (id) => {
    if(id === '') {
      setCode(DEFAULT_CODE)
      setEvent(DEFAULT_EVENT)
      return
    }
    setSelectedFnId(id)
    const fn = await api.get('/function/' + id);

    setCode(fn.data.code)
    setEvent(JSON.stringify(fn.data.event, null, 2))
  }

  const handleTest = async () => {
    if(!selectedFnId) return alert('Select a function to test')
    const res = await api.post(`/test/${selectedFnId}`)
    setLogs(res.data.logs)
  }

  return (
    <div className="p-4 space-y-4">
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
        <button className='block p-2 bg-blue-700 border rounded-lg' onClick={handleSave}>{selectedFnId==''? 'New Function' : 'Save Function'}</button>
        <button className='block p-2 bg-green-700 border rounded-lg' onClick={handleTest}>Test Function</button>
      </div>

      <div className="mt-4">
          <label className="block text-sm font-medium mb-2">Logs</label>
          <pre className="bg-block border p-4 rounded overflow-auto h-48">
            {logs.map((line, idx) => (<div key={idx}>{line}</div>))}
          </pre>
      </div>
    </div>
  );
}
