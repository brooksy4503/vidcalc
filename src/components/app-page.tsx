'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface Video {
  id: number
  duration: string
}

export function Page() {
  const [videos, setVideos] = useState<Video[]>([])
  const [duration, setDuration] = useState('')

  const addVideo = (e: React.FormEvent) => {
    e.preventDefault()
    if (duration) {
      setVideos([...videos, { id: Date.now(), duration }])
      setDuration('')
    }
  }

  const removeVideo = (id: number) => {
    setVideos(videos.filter(video => video.id !== id))
  }

  const calculateTotalDuration = () => {
    const totalSeconds = videos.reduce((total, video) => {
      const [minutes, seconds] = video.duration.split(':').map(Number)
      return total + minutes * 60 + seconds
    }, 0)

    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Video Duration Calculator</h1>
      <form onSubmit={addVideo} className="mb-4">
        <div className="mb-2">
          <Label htmlFor="duration">Video Duration (MM:SS)</Label>
          <Input
            type="text"
            id="duration"
            placeholder="05:30"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            pattern="^[0-5]?[0-9]:[0-5][0-9]$"
            required
          />
        </div>
        <Button type="submit">Add Video</Button>
      </form>
      <ul className="mb-4">
        {videos.map(video => (
          <li key={video.id} className="flex justify-between items-center mb-2">
            <span>{video.duration}</span>
            <Button variant="destructive" onClick={() => removeVideo(video.id)}>Remove</Button>
          </li>
        ))}
      </ul>
      <div className="text-xl font-semibold">
        Total Duration: {calculateTotalDuration()}
      </div>
    </div>
  )
}