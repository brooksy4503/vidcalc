"use client";

import { useState, useRef, ChangeEvent, useMemo } from "react";
import { Button } from "@/components/ui/button";

interface Video {
  id: string;
  file: File;
  duration: string;
}

export default function Home() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [keyCounter, setKeyCounter] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const addVideos = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newVideos: Video[] = [];
      for (let i = 0; i < e.target.files.length; i++) {
        const file = e.target.files[i];
        const duration = await getVideoDuration(file);
        newVideos.push({
          id: `${Date.now()}-${Math.random()}-${keyCounter}`,
          file,
          duration,
        });
      }
      setVideos((prevVideos) => [...prevVideos, ...newVideos]);
      setKeyCounter((prev) => prev + 1);

      // Reset the file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const getVideoDuration = (file: File): Promise<string> => {
    return new Promise((resolve) => {
      const video = document.createElement("video");
      video.preload = "metadata";
      video.onloadedmetadata = () => {
        window.URL.revokeObjectURL(video.src);
        const duration = video.duration;
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);
        resolve(
          `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
            2,
            "0"
          )}`
        );
      };
      video.src = URL.createObjectURL(file);
    });
  };

  console.log("Component rendering");

  const removeVideo = (id: string) => {
    console.log("removeVideo called with id:", id);
    console.log("Removing video with id:", id, "Type:", typeof id);
    console.log("Videos before removal:", videos);

    setVideos(
      videos.filter((video) => {
        console.log(
          "Comparing:",
          video.id,
          typeof video.id,
          "with",
          id,
          typeof id
        );
        return video.id !== id;
      })
    );

    console.log("Videos after removal:", videos);
  };

  const calculateTotalDuration = () => {
    const totalSeconds = videos.reduce((total, video) => {
      const [minutes, seconds] = video.duration.split(":").map(Number);
      return total + minutes * 60 + seconds;
    }, 0);

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  };

  const deleteAllVideos = () => {
    setVideos([]);
    setKeyCounter(0);

    // Reset the file input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Sort videos alphabetically
  const sortedVideos = useMemo(() => {
    return [...videos].sort((a, b) => a.file.name.localeCompare(b.file.name));
  }, [videos]);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <div className="p-4 pt-8 max-w-md mx-auto w-full">
        {" "}
        {/* Added pt-8 for more top padding */}
        <h1 className="text-2xl font-bold mb-6 text-center">
          {" "}
          {/* Increased mb-4 to mb-6 */}
          Video Duration Calculator
        </h1>
        <div className="mb-4 text-center">
          <p className="mb-2">Upload Videos</p>
          <input
            type="file"
            id="video-upload"
            accept="video/*"
            multiple
            className="hidden"
            onChange={addVideos}
            ref={fileInputRef}
          />
          <div className="flex justify-center space-x-2">
            <Button
              onClick={() => fileInputRef.current?.click()}
              className="bg-gray-800 text-white hover:bg-gray-700"
            >
              Select Videos
            </Button>
            <Button
              onClick={deleteAllVideos}
              className="bg-red-500 hover:bg-red-600 text-white"
              disabled={videos.length === 0}
            >
              Delete All
            </Button>
          </div>
        </div>
      </div>
      <div
        className="flex-grow overflow-y-auto px-4 max-w-md mx-auto w-full custom-scrollbar"
        style={{ maxHeight: "calc(100vh - 350px)" }}
      >
        {" "}
        {/* Added maxHeight */}
        <ul className="space-y-2 mb-4">
          {sortedVideos.map((video) => (
            <li
              key={video.id}
              className="flex justify-between items-center p-2 bg-gray-800 rounded"
            >
              <span className="text-gray-300 truncate flex-grow mr-2">
                {video.file.name}
              </span>
              <span className="text-gray-400 mr-2">({video.duration})</span>
              <Button
                variant="destructive"
                onClick={() => removeVideo(video.id)}
                className="bg-red-500 hover:bg-red-600 text-white text-xs px-2 py-1"
              >
                Remove
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 pb-8 max-w-md mx-auto w-full">
        {" "}
        {/* Added pb-8 for more bottom padding */}
        <div className="text-xl font-semibold text-center">
          Total Duration: {calculateTotalDuration()}
        </div>
      </div>
      <footer className="text-center p-4 text-gray-600 text-sm">
        <a
          href="https://garthscaysbrook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition-colors duration-200"
        >
          Made with ❤️ by Garth Scaysbrook
        </a>
      </footer>
    </div>
  );
}
