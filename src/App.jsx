import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleAddBookmark = (bookmark) => {
    const newBookmark = [...bookmarks, bookmark];
    setBookmarks(newBookmark);
  };
  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-6xl mx-auto gap-6">
        <Blogs handleAddBookmark={handleAddBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App;
