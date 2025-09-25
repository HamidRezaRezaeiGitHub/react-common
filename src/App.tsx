import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-8">
          Hello World!
        </h1>
        <div className="space-y-4">
          <p className="text-lg text-muted-foreground">
            Welcome to React Common - Your reusable components and utilities
          </p>
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={() => setCount((count) => count + 1)}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Count is {count}
            </button>
          </div>
          <div className="text-sm text-muted-foreground">
            <p>Built with:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>React + TypeScript</li>
              <li>Vite</li>
              <li>Tailwind CSS</li>
              <li>Shadcn/ui</li>
              <li>Jest</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App