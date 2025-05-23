import { useState } from "react";

export function Newsletter() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleNewsletter = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) {
      return alert('Picture is compulsory');
    }

    try {
      //Upload image to Cloudinary
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "newsletter"); 
      formData.append("cloud_name", "dz5ag0p1q");

      const res = await fetch("https://api.cloudinary.com/v1_1/dz5ag0p1q/image/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok || !data.secure_url) {
        throw new Error("Cloudinary upload failed");
      }

      const picture_url = data.secure_url;

      const backendRes = await fetch("http://localhost:3000/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json" 
        },
        credentials: 'include',
        body: JSON.stringify({
          title,
          content,
          picture_url,
        }),
      });

      if (!backendRes.ok) {
        throw new Error("Failed to save newsletter in backend");
      }

      alert("Newsletter created successfully!");

    } catch (error) {
      console.error("Error creating newsletter:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Create Newsletter</h2>
      <form onSubmit={handleNewsletter} className="space-y-4">
        {/* Title */}
        <div>
          <label className="font-medium mb-1">Title</label>
          <input 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text" 
            className="w-full border border-gray-300 rounded px-3 py-2"
            required 
          />
        </div>

        {/* Content */}
        <div>
          <label className="font-medium mb-1">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        {/* Picture Upload */}
        <div>
          <label className="font-medium mb-1 block">Choose Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files) {
                setFile(e.target.files[0])
              }
            }}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
