// app/components/HeroComponent.tsx
const HeroComponent = () => {
  return (
    <section className="bg-forestGreen text-white text-center py-20">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold mb-4">
          Välkommen till Motorsågskörkortet!
        </h1>
        <p className="text-lg mb-8">
          Ta din motorsågskörkort genom våra kurser.
        </p>
        <a
          href="/courses"
          className="bg-safetyOrange text-white px-8 py-3 rounded-full font-semibold"
        >
          Utforska Kurser
        </a>
      </div>
    </section>
  );
};

export default HeroComponent;
