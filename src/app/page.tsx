"use client";

import Image from "next/image";

const projects = [
  {
    title: "Hairstyle Morphling",
    description:
      "An AI system that transforms user photos into multiple hairstyles and styles, maintaining consistency across morphs.",
    thumbnail: "/thumbnails/hairstyle-morphling.jpg",
    link: "/projects/hairstyle-morphling",
  },
  {
    title: "Render Re Imagined",
    description:
      "A creative re-rendering pipeline turning ordinary input images into stylistically reimagined visuals.",
    thumbnail: "/thumbnails/render-reimagined.jpg",
    link: "/projects/render-reimagined",
  },
  {
    title: "Your Sticker",
    description:
      "A character-extraction system that transforms humans or pets into cohesive, themed sticker packs.",
    thumbnail: "/thumbnails/your-sticker.jpg",
    link: "/projects/your-sticker",
  },
  {
    title: "Interactive Particle Effects",
    description:
      "Real-time particle systems powered by shaders and generative rules for web-based interactive experiences.",
    thumbnail: "/thumbnails/interactive-particles.jpg",
    link: "/projects/interactive-particles",
  },
  {
    title: "Embodiment",
    description:
      "An exploration of identity through AI-driven body transformations and character-based self-portraits.",
    thumbnail: "/thumbnails/embodiment.jpg",
    link: "/projects/embodiment",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900">
      {/* Header */}
      <header className="px-10 py-16">
        <h1 className="text-4xl font-semibold tracking-tight">
          Heran Zhou
        </h1>
        <p className="mt-2 text-lg text-neutral-600 max-w-xl">
          AI Creative Technologist building generative tools, interactive systems,
          and design-driven AI experiences.
        </p>
      </header>

      {/* Project Grid */}
      <section className="px-10 pb-20">
        <h2 className="text-2xl font-medium mb-6">Selected Work</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              className="group block rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56 w-full rounded-t-2xl overflow-hidden">
                <Image
                  src={p.thumbnail}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-medium">{p.title}</h3>
                <p className="mt-2 text-neutral-600 text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
