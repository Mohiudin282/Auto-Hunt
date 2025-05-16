export function Newsletter () {
    return (
         <div className="max-w-xl mx-auto p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Create Newsletter</h2>
      <form className="space-y-4">
        {/* Title */}
        <div>
          <label className=" font-medium mb-1">Title</label>
          <input type="text" name="title" className="w-full border border-gray-300 rounded px-3 py-2"required/>
        </div>

        {/* Content */}
        <div>
          <label className="font-medium mb-1">Content</label>
          <textarea
            name="content"
           
            className="w-full border border-gray-300 rounded px-3 py-2" required
          />
        </div>

        {/* Published Date */}
        <div>
          <label className="font-medium mb-1">Published Date</label>
          <input
            type="date"
            name="publishedDate"
           
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        {/* Picture Upload */}
        <div>
          <label className="block font-medium mb-1">Picture</label>
          <input
            type="file"
            name="picture"
            accept="image/*"
           
            className="w-full"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
    )

}