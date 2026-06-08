const techs = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "Linux"
];

export default function Technologies() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-10">
          Tecnologias
        </h2>

        <div className="flex flex-wrap gap-4">
          {techs.map(tech => (
            <span
              key={tech}
              className="border px-4 py-2 rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}