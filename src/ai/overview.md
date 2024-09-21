# Video Duration Calculator: Standard Operating Procedure

## 1. Application Overview

The Video Duration Calculator is a Next.js and React-based web application that allows users to upload multiple video files, calculate their individual durations, and sum up the total duration of all uploaded videos.

## 2. Key Components

2.1. State Management

- Uses React's `useState` hook for managing:

  - `videos`: Array of Video objects (id, file, duration)
  - `keyCounter`: Unique key generator for videos

  2.2. File Handling

- Hidden file input controlled via `fileInputRef`
- "Select Videos" button triggers file selection

  2.3. Video Processing

- `addVideos`: Processes selected files
- `getVideoDuration`: Calculates individual video durations

  2.4. Video Management

- `removeVideo`: Deletes a single video
- `deleteAllVideos`: Removes all videos
- `calculateTotalDuration`: Computes sum of all video durations

  2.5. UI Components

- Sorted video list display
- Total duration display
- Action buttons (Select Videos, Delete All, Remove)

## 3. Core Functionalities

3.1. Adding Videos

- User selects video files
- App processes each file:

  - Generates unique ID
  - Calculates duration
  - Adds to `videos` state

  3.2. Displaying Videos

- Shows sorted list of videos (by filename)
- Each entry displays:

  - Filename
  - Duration
  - Remove button

  3.3. Removing Videos

- Individual removal via "Remove" button
- Bulk removal via "Delete All" button

  3.4. Calculating Total Duration

- Sums durations of all videos
- Displays in HH:MM:SS format

## 4. Performance Considerations

- Uses `useMemo` for efficient video sorting
- Implements scrollable video list for handling numerous uploads

## 5. User Interface

- Dark theme using Tailwind CSS
- Responsive design with fixed header/footer
- Scrollable video list

## 6. Accessibility and UX

- Hidden file input accessible via button
- Disabled "Delete All" button when no videos present

## 7. Footer

- Displays link to developer's website

This SOP provides an overview of the Video Duration Calculator application, detailing its core components, functionalities, and design considerations.
