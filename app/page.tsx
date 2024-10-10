import HeroComponent from "@/components/heroComponent";

export default function TestPage() {
  return (
    <div className="container mx-auto p-4">
      <HeroComponent />
      <h1 className="text-3xl font-bold">Blogg</h1>
      <p className="mt-4">Detta är en testundersida för Next.js 14.</p>
    </div>
  );
}

// import CoursesComponent from "./components/CoursesComponent";
// import MediaSection from "./components/MediaSection";
// import VideoSection from "./components/VideoSection";

// const Home = () => {
//   return (
//     <div>
//       <HeroComponent />
//       {/* <CoursesComponent />
//       <VideoSection />

//       <MediaSection /> */}
//     </div>
//   );
// };

// export default Home;
