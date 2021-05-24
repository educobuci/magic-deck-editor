
export default function EditorPage() {
  return (
    <div className="p-4 min-h-screen grid grid-cols-3 gap-4 dark:bg-gray-800 dark:text-white">
      <div className="rounded border border-gray-500 p-4">

      </div>
      <div className="rounded border border-gray-500 p-4">

      </div>
      <div className="rounded border border-gray-500 p-4">
        <input className="w-full rounded bg-transparent border border-gray-500" type="text" />
      </div>
    </div>
  )
}