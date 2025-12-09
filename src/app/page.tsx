"use client";

import Image from "next/image";

const projects = [
  {
    title: "Hairstyle Morphling",
    description:
      "An AI system that transforms user photos into multiple hairstyles and styles, maintaining consistency across morphs.",
    thumbnail: "/thumbnails/hairstyle-morphling.png",
    link: "/projects/hairstyle-morphling",
  },
  // You can add the others once their images are saved in public/thumbnails:
  // render-reimagined.png, your-sticker.png, interactive-particles.png, embodiment.png
];

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900">
      <header className="px-10 py-16">
        <h1 className="text-4xl font-semibold tracking-tight">
          Heran Zhou
        </h1>
        <p className="mt-2 text-lg text-neutral-600 max-w-xl">
          AI Creative Technologist building generative tools, interactive systems,
          and design-driven AI experiences.
        </p>
      </header>

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
