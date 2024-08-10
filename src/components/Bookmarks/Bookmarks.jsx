import { useState } from "react";

const Bookmarks = ({ bookmarks }) => {
  const totalReadingTime = () => {
    let total = 0;
    for (const bookmark of bookmarks) {
      total += parseInt(bookmark.reading_time);
    }
    return total;
  };
  return (
    <div className="w-2/6">
      <div className="my-6  bg-blue-100 p-4 border border-blue-600 rounded-lg">
        <h1 className="text-blue-600 text-center">
          Spent time on read:{totalReadingTime()} min
        </h1>
      </div>
      <div className="bg-slate-200 py-3">
        <h2 className="ms-3">Bookmarked Blogs:{bookmarks.length}</h2>
        {bookmarks.map((bookmark, idx) => (
          <div className="text-center bg-white py-4 m-3 rounded" key={idx}>
            <h2>{bookmark.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
