import axios from "axios";
import { useEffect, useState } from "react";

type NewsLetter = {
    title: string;
    content: string;
    picture_url: string;
}

const DisplayNl = () => {
    const [results, setResults] = useState<NewsLetter[]>([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await axios.get('http://localhost:3000/newsletter');
                setResults(res.data.result);
            } catch (error) {
                console.error("Booking's not fetched: ", error);
            }
        }
        fetchNews();
    }, []);
    return (
        <div className="flex flex-col gap-4 px-4 py-3">
      <h2 className="text-[#141414] text-xl sm:text-2xl font-bold tracking-tight px-2 sm:px-4 pb-2 pt-4">
        Latest News
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-2 sm:px-4">
        {results.map((result, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col"
          >
            {/* Image */}
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover"
              style={{ backgroundImage: `url("${result.picture_url}")` }}
            />

            {/* Content */}
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <p className="text-[#141414] text-base sm:text-lg font-semibold line-clamp-1">
                  {result.title}
                </p>
                <p className="text-neutral-500 text-sm mt-1 line-clamp-6">
                  {result.content}
                </p>
              </div>

              {/* Read More (Uncomment if needed) */}
              {/* <div className="mt-auto pt-2">
                <a
                  href={`/newsletter/${result.id}`}
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  Read more
                </a>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>

    );
}

export default DisplayNl;