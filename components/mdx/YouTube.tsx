// // components/ui/YouTube.tsx
// import React from "react";

// interface YouTubeProps {
//   videoId: string;
// }

// const YouTube: React.FC<YouTubeProps> = ({ videoId }) => {
//   return (
//     <div className="video-container">
//       <iframe
//         width="560"
//         height="315"
//         src={`https://www.youtube.com/embed/${videoId}`}
//         title="YouTube video player"
//         frameBorder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//       ></iframe>
//     </div>
//   );
// };

// export default YouTube;

// components/mdx/YouTube.tsx
// export default function YouTube({ id }: { id: string }) {
//   return (
//     <div className="aspect-video w-full">
//       <iframe
//         src={`https://www.youtube.com/embed/${id}`}
//         title="YouTube Video Player"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//       ></iframe>
//     </div>
//   );
// }
// export default function YouTube({ id }: { id: string }) {
//   return (
//     <div>
//       <iframe
//         className="aspect-video w-full"
//         src={"https://www.youtube.com/embed/" + id}
//         title="YouTube Video Player"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//       ></iframe>
//     </div>
//   );
// }
// export default function YouTube({ id }: { id: string }) {
//   console.log("YouTube video ID:", id); // Lägg till denna rad

//   if (!id) {
//     return <div>Error: YouTube video ID is undefined.</div>;
//   }

//   return (
//     <div className="aspect-video w-full">
//       <iframe
//         src={`https://www.youtube.com/embed/${id}`}
//         title="YouTube Video Player"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//       ></iframe>
//     </div>
//   );
// }
export default function YouTube({ id }: { id: string }) {
  return (
    <div className="w-full aspect-video">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
