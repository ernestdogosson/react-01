function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <section
        id="about"
        className="py-16 px-8 max-w-[1200px] mx-auto w-full bg-gray-50 rounded-xl shadow-lg"
      >
        <div className="mb-16 text-center">
          <h3 className="text-sm text-blue-500">ABOUT ME</h3>
          <h2 className="text-4xl font-bold">Who I Am</h2>
          <h3 className="text-gray-600">A bit about my background</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="text-gray-600 leading-relaxed">
            <p>
              I’m developing my path in frontend developement by building clean,
              responsive interfaces and digging into how the web works behind
              the scenes. My journey is growing steadily, shaped by curiosity,
              consistent practice, and a genuine interest in creating useful
              digital experiences.
            </p>
            <p className="my-2">
              My academic background trained me to think analytically and work
              comfortably with complex systems, and that approach now guides the
              way I write and structure code. Over the years, I’ve learned to
              adapt, learn quickly, and stay consistent qualities that support
              my progress as I take on more challenging projects.
            </p>
            <p>
              Outside of development, I stay active through football coaching,
              music, and small creative projects. These interests keep me
              balanced and influence the way I think about structure, teamwork,
              and design. I’m steadily building my skills and direction, one
              thoughtful step at a time.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex justify-center items-center flex-col gap-2 bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:scale-105 hover:border-blue-300 transition">
              <span className="text-3xl font-bold text-blue-600">50+</span>
              <span className="text-sm text-gray-600">Projects</span>
            </div>
            <div className="flex justify-center items-center flex-col gap-2 bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:scale-105 hover:border-blue-300 transition">
              <span className="text-3xl font-bold text-blue-600">5+</span>
              <span className="text-sm text-gray-600">Years</span>
            </div>
            <div className="flex justify-center items-center flex-col gap-2 bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:scale-105 hover:border-blue-300 transition">
              <span className="text-3xl font-bold text-blue-600">30+</span>
              <span className="text-sm text-gray-600">Clients</span>
            </div>
            <div className="flex justify-center items-center flex-col gap-2 bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:scale-105 hover:border-blue-300 transition">
              <span className="text-3xl font-bold text-blue-600">10+</span>
              <span className="text-sm text-gray-600">Awards</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
