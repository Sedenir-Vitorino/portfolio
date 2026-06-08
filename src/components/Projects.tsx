const projects = [
  {
    title: "PRUMO OS",
    description:
      "Sistema de gestão para construção civil."
  },
  {
    title: "KickGG",
    description:
      "Plataforma de torneios e rankings."
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-10">
          Projetos
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map(project => (
            <div
              key={project.title}
              className="border rounded-xl p-6"
            >
              <h3 className="text-2xl font-bold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600">
                {project.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}