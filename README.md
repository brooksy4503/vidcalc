# Video Duration Calculator

## Overview

The **Video Duration Calculator** is a web application built with Next.js and React that allows users to upload multiple video files, calculate the individual durations of each video, and sum up the total duration of all uploaded videos.

## Features

- Upload and calculate durations for multiple video files
- Remove individual or all uploaded videos
- Display total duration in HH:MM:SS format
- Responsive dark theme UI with scrollable video list

## Key Components

- **State Management**:
  - `useState` hook for handling video data and unique IDs.
- **File Handling**:
  - Controlled file input using `fileInputRef`.
- **Video Processing**:
  - Functions to process and calculate video durations.
- **Video Management**:
  - Ability to remove individual or all videos, and sort the video list.

## How It Works

1. **Adding Videos**:  
   Users select video files, and the app processes each file to calculate the duration and add it to the video list.

2. **Displaying Videos**:  
   The app displays a sorted list of uploaded videos, including their filenames and durations, with an option to remove individual videos.

3. **Calculating Total Duration**:  
   The total duration of all uploaded videos is automatically calculated and displayed in HH:MM:SS format.

4. **Removing Videos**:  
   Users can remove individual videos or bulk delete all videos.

## Performance Considerations

- Efficient sorting of video files using `useMemo`.
- Scrollable list to handle large numbers of uploads smoothly.

## User Interface

- Tailwind CSS for styling.
- Dark theme with responsive design and fixed header/footer.

## Accessibility

- File upload is accessible via buttons.
- "Delete All" button is disabled when no videos are present.

## Footer

- Includes a link to the developer's website.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
