
const projects = [
  {
    code: "QUEST_01",
    type: "EXPERIENCIA PROFESIONAL",
    title: "Aplicación móvil de gestión de trámites",
    description:
      "Participé en el mantenimiento y evolución de una aplicación móvil. Trabajé en la integración de notificaciones push, la adaptación a actualizaciones de dependencias, la modularización y la mejora de la estructura del código.",
    technologies: ["React Native", "Expo", "Zustand", "APIs REST"],
    note: "Experiencia profesional",
  },
  {
    code: "QUEST_02",
    type: "DESARROLLO FORMATIVO",
    title: "Análisis de producción de pozos petroleros",
    description:
      "Participé en una aplicación móvil orientada al análisis de datos de pozos petroleros, con visualización de curvas de producción y predicciones a tres años. El trabajo incluyó desarrollo mobile y colaboración con el backend.",
    technologies: ["React Native", "NestJS", "TypeScript", "MongoDB"],
    note: "Práctica profesional",
  },
  {
    code: "QUEST_03",
    type: "PROYECTO COLABORATIVO",
    title: "ReciRop",
    description:
      "Plataforma de donación de ropa desarrollada en equipo. Participé en el frontend y en la organización del trabajo mediante una metodología ágil.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    note: "Proyecto académico",
  },
];

const services = [
  {
    icon: "01",
    title: "Aplicaciones móviles",
    description:
      "Desarrollo de funcionalidades y pantallas con React Native y Expo, adaptación de interfaces y conexión con servicios externos.",
    tags: ["React Native", "Expo"],
  },
  {
    icon: "02",
    title: "Integraciones y APIs",
    description:
      "Consumo de APIs REST, integración de notificaciones push y conexión entre aplicaciones móviles y servicios backend.",
    tags: ["APIs REST", "Notificaciones"],
  },
  {
    icon: "03",
    title: "Mantenimiento y mejoras",
    description:
      "Análisis de errores, refactorización, modularización del código y adaptación de proyectos a actualizaciones de dependencias.",
    tags: ["Debugging", "Refactoring"],
  },
  {
    icon: "04",
    title: "Web y backend",
    description:
      "Desarrollo de interfaces web, endpoints y funcionalidades de servidor según los requisitos y el alcance de cada proyecto.",
    tags: ["React", "Node.js", "Express"],
  },
];

const technologies = [
  "React Native",
  "Expo",
  "React",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express",
  "NestJS",
  "MongoDB",
  "REST APIs",
  "Git",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#101016] font-mono text-zinc-100 selection:bg-amber-400 selection:text-black">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#101016]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <a
            href="#home"
            className="shrink-0 text-sm font-black tracking-widest text-amber-400"
          >
            FRANCO.EXE<span className="animate-pulse">_</span>
          </a>

          <div className="flex gap-4 text-[10px] text-zinc-400 sm:gap-6 sm:text-xs">
            <a href="#services" className="transition hover:text-amber-400">
              SERVICIOS
            </a>
            <a href="#projects" className="transition hover:text-amber-400">
              PROYECTOS
            </a>
            <a href="#about" className="hidden transition hover:text-amber-400 sm:block">
              SOBRE MÍ
            </a>
            <a href="#contact" className="transition hover:text-amber-400">
              CONTACTO
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative mx-auto flex min-h-[78vh] max-w-6xl items-center px-6 py-24"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full bg-amber-500/10 blur-[110px]"
        />

        <div className="relative max-w-3xl">
          <p className="mb-6 text-xs tracking-[0.18em] text-amber-400 sm:tracking-[0.25em]">
            &gt; DESARROLLADOR DE SOFTWARE / PLAYER_01
          </p>

          <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-7xl md:text-8xl">
            FRANCO
            <br />
            <span className="text-amber-400">CANESIN</span>
            <span className="text-amber-400">_</span>
          </h1>

          <h2 className="mt-7 max-w-2xl text-xl font-bold leading-relaxed text-zinc-200 sm:text-2xl">
            Construyo soluciones.
            <br />
            <span className="text-amber-400">
              Mejoro lo que ya existe.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl font-sans text-base leading-8 text-zinc-400 sm:text-lg">
            Desarrollador de software con experiencia en aplicaciones
            móviles con React Native. Trabajo en nuevas funcionalidades,
            integraciones, mantenimiento y mejoras de código, buscando
            soluciones prácticas para cada proyecto.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="border-2 border-amber-400 bg-amber-400 px-5 py-3 text-xs font-bold text-zinc-950 transition hover:bg-transparent hover:text-amber-400 sm:text-sm"
            >
              [ VER PROYECTOS ]
            </a>

            <a
              href="#contact"
              className="border border-zinc-700 px-5 py-3 text-xs text-zinc-200 transition hover:border-amber-400 hover:text-amber-400 sm:text-sm"
            >
              [ CONSULTAR POR UN PROYECTO ]
            </a>
          </div>

          <p className="mt-8 text-xs text-zinc-500">
            &gt; BUSCANDO NUEVOS DESAFÍOS PROFESIONALES Y FREELANCE
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="border-y border-white/10 bg-white/[0.02]"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="mb-3 text-xs tracking-[0.2em] text-amber-400">
            // MISIONES DISPONIBLES
          </p>

          <h2 className="text-3xl font-black sm:text-4xl">
            ¿En qué puedo ayudarte?
          </h2>

          <p className="mt-4 max-w-2xl font-sans leading-7 text-zinc-400">
            Puedo incorporarme a un equipo o colaborar en una tarea concreta.
            Cada proyecto empieza por entender el problema y definir
            qué solución tiene sentido.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.icon}
                className="group border border-zinc-800 bg-[#15151d] p-6 transition hover:border-amber-400/60 sm:p-7"
              >
                <p className="text-xs text-amber-400">
                  SERVICE_{service.icon}
                </p>

                <h3 className="mt-4 text-lg font-bold transition group-hover:text-amber-400">
                  {service.title}
                </h3>

                <p className="mt-3 font-sans text-sm leading-7 text-zinc-400">
                  {service.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-zinc-800 px-2 py-1 text-xs text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-6 inline-block text-xs text-amber-400 transition hover:text-amber-300"
                >
                  CONSULTAR POR ESTE SERVICIO →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="mx-auto max-w-6xl px-6 py-24"
      >
        <p className="mb-3 text-xs tracking-[0.2em] text-amber-400">
          // REGISTRO DE MISIONES
        </p>

        <h2 className="text-3xl font-black sm:text-4xl">
          Proyectos y experiencia<span className="text-amber-400">.</span>
        </h2>

        <p className="mt-4 max-w-2xl font-sans leading-7 text-zinc-400">
          Algunos trabajos en los que participé y las tecnologías que
          utilicé. Mi contribución se describe de forma concreta,
          diferenciando experiencia profesional, práctica y proyectos
          académicos.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.code}
              className="group flex flex-col border border-zinc-800 bg-[#15151d] p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-400/60 sm:p-8"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs text-amber-400">
                  {project.code}
                </span>

                <span className="text-right text-[10px] text-zinc-500">
                  {project.note}
                </span>
              </div>

              <p className="mt-6 text-[10px] tracking-widest text-zinc-500">
                {project.type}
              </p>

              <h3 className="mt-3 text-xl font-bold transition group-hover:text-amber-400">
                {project.title}
              </h3>

              <p className="mt-4 flex-1 font-sans text-sm leading-7 text-zinc-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-zinc-800/70 px-2 py-1 text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-xs leading-6 text-zinc-500">
          Nota: la disponibilidad pública del código o de las
          demostraciones depende de cada proyecto. La experiencia
          profesional no implica que el código pertenezca a mi portafolio.
        </p>
      </section>

      {/* SKILLS */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="mb-3 text-xs tracking-[0.2em] text-amber-400">
            // INVENTARIO TÉCNICO
          </p>

          <h2 className="text-3xl font-black">
            Tecnologías y herramientas
          </h2>

          <p className="mt-4 max-w-2xl font-sans leading-7 text-zinc-400">
            Herramientas con las que trabajé en proyectos de desarrollo.
            La tecnología adecuada depende de los objetivos y requisitos
            de cada solución.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="border border-zinc-800 bg-[#15151d] px-4 py-2 text-sm text-zinc-300 transition hover:border-amber-400 hover:text-amber-400"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="mb-3 text-xs tracking-[0.2em] text-amber-400">
              // PERFIL DEL JUGADOR
            </p>

            <h2 className="text-3xl font-black sm:text-4xl">
              Cómo trabajo<span className="text-amber-400">.</span>
            </h2>
          </div>

          <div className="font-sans leading-8 text-zinc-400">
            <p>
              Soy Técnico Superior en Desarrollo de Software Multiplataforma,
              con experiencia en desarrollo de aplicaciones móviles,
              colaboración con backend y mantenimiento de software.
            </p>

            <p className="mt-4">
              Me interesa entender cómo funciona un sistema antes de
              modificarlo, dividir problemas complejos en tareas manejables
              y mantener un código claro que pueda evolucionar.
            </p>

            <p className="mt-4">
              Busco oportunidades para aportar en equipos de desarrollo
              y colaborar con clientes que necesiten soluciones de software
              bien pensadas.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-white/10 bg-white/[0.02]"
      >
        <div className="mx-auto max-w-3xl px-6 py-24">
          <p className="mb-3 text-xs tracking-[0.2em] text-amber-400">
            // NUEVA MISIÓN
          </p>

          <h2 className="text-3xl font-black sm:text-4xl">
            Hablemos de tu proyecto.
          </h2>

          <p className="mt-4 font-sans leading-7 text-zinc-400">
            ¿Necesitás una funcionalidad, una integración, ayuda con un
            error o una aplicación? Contame qué querés resolver y podemos
            conversar sobre el alcance.
          </p>

          <form
            action="https://formspree.io/f/xnppzwqq"
            method="POST"
            className="mt-10 space-y-5 border border-zinc-800 bg-[#15151d] p-6 sm:p-8"
          >
            <input
              type="hidden"
              name="_subject"
              value="Consulta desde el portafolio de Franco Canesin"
            />

            <input
              type="hidden"
              name="_captcha"
              value="true"
            />

            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block text-xs text-amber-400"
              >
                NOMBRE
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Tu nombre"
                className="w-full border border-zinc-700 bg-[#101016] px-4 py-3 font-sans text-sm outline-none transition focus:border-amber-400"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-xs text-amber-400"
              >
                CORREO ELECTRÓNICO
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="tu@email.com"
                className="w-full border border-zinc-700 bg-[#101016] px-4 py-3 font-sans text-sm outline-none transition focus:border-amber-400"
              />
            </div>

            <div>
              <label
                htmlFor="contact-type"
                className="mb-2 block text-xs text-amber-400"
              >
                ¿QUÉ NECESITÁS?
              </label>
              <select
                id="contact-type"
                name="project_type"
                required
                defaultValue=""
                className="w-full border border-zinc-700 bg-[#101016] px-4 py-3 font-sans text-sm text-zinc-300 outline-none focus:border-amber-400"
              >
                <option value="" disabled>
                  Seleccioná una opción
                </option>
                <option>Desarrollo mobile</option>
                <option>Integración de APIs o notificaciones</option>
                <option>Mantenimiento o corrección de errores</option>
                <option>Desarrollo web o backend</option>
                <option>Oportunidad laboral</option>
                <option>Otro tipo de proyecto</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-xs text-amber-400"
              >
                CONTAME SOBRE TU IDEA
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                placeholder="¿Qué necesitás desarrollar o resolver?"
                className="w-full resize-y border border-zinc-700 bg-[#101016] px-4 py-3 font-sans text-sm outline-none transition focus:border-amber-400"
              />
            </div>

            <button
              type="submit"
              className="w-full border-2 border-amber-400 bg-amber-400 px-6 py-3 text-sm font-bold text-zinc-950 transition hover:bg-transparent hover:text-amber-400"
            >
              [ ENVIAR CONSULTA ]
            </button>
          </form>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-zinc-400">
            <a
              href="https://github.com/FuriFuri22"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/franco-canesin-2a4227246"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400"
            >
              LinkedIn ↗
            </a>

            {/* Reemplazar por el enlace real de tu perfil */}
            <a
              href="https://www.freelancer.com/u/franco510"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400"
            >
              Freelancer ↗
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-6 text-center text-xs text-zinc-600">
        © {new Date().getFullYear()} Franco Canesin · HECHO CON REACT
        Y TAILWIND
      </footer>
    </main>
  );
}
