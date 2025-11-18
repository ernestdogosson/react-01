function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-slate-100 to-gray-100 pt-8">
      <section
        id="about"
        className="py-16 px-8 max-w-[1200px] mx-auto w-full bg-gray-50 rounded-xl shadow-lg mt-8"
      >
        <div className="mb-16 text-center">
          <h3 className="text-sm text-blue-500">ABOUT ME</h3>
          <h2 className="text-4xl font-bold">Who I Am</h2>
          <h3 className="text-gray-600">A bit about my background</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="text-gray-600 leading-relaxed">
            <p className="leading-7">
              I’m developing my path in frontend developement by building clean,
              responsive interfaces and digging into how the web works behind
              the scenes. My journey is growing steadily, shaped by curiosity,
              consistent practice, and a genuine interest in creating useful
              digital experiences.
            </p>
            <p className="my-4 leading-7">
              My academic background trained me to think analytically and work
              comfortably with complex systems, and that approach now guides the
              way I write and structure code. Over the years, I’ve learned to
              adapt, learn quickly, and stay consistent qualities that support
              my progress as I take on more challenging projects.
            </p>
            <p className="leading-7">
              Outside of development, I stay active through football coaching,
              music, and small creative projects. These interests keep me
              balanced and influence the way I think about structure, teamwork,
              and design. I’m steadily building my skills and direction, one
              thoughtful step at a time.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:border-blue-300 transition">
              <h4 className="font-bold text-blue-600 mb-3">
                🎓 Currently Learning
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-sm font-medium">
                  React
                </span>
                <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm font-medium">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium">
                  Modern Frontend Development
                </span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:border-blue-300 transition">
              <h4 className="font-bold text-blue-600 mb-3">⚽ Beyond Code</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                  Football coach
                </span>
                <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm font-medium">
                  Pursuing UEFA C License
                </span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:border-blue-300 transition">
              <h4 className="font-bold text-blue-600 mb-3">🛠️ Building With</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm font-medium">
                  HTML
                </span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                  CSS
                </span>
                <span className="px-3 py-1 bg-amber-50 text-amber-600 rounded-full text-sm font-medium">
                  JavaScript
                </span>
                <span className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-sm font-medium">
                  React
                </span>
                <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm font-medium">
                  Tailwind
                </span>
                <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
                  Bootstrap
                </span>
                <span className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm font-medium">
                  Git
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
