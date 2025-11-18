function Contact() {
  return (
    <section className="flex justify-center items-center h-screen w-full bg-gradient-to-br from-gray-50 via-slate-100 to-gray-100 pt-12">
      <div className="w-4/5 max-w-[500px] border border-gray-700/30 bg-gradient-to-b from-black/40 via-gray-900/50 to-black/40 shadow-2xl rounded-2xl backdrop-blur-xl p-12 mx-auto">
        <h2 className="uppercase text-center text-white text-3xl font-bold mb-2 ">
          Get In Touch
        </h2>
        <p className="text-center text-gray-300 mb-8 ">
          Let's connect and discuss opportunities
        </p>

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4 pb-4 border-b border-gray-400">
            <i className="ri-mail-line text-white text-2xl"></i>
            <div>
              <p className="text-gray-300 text-sm uppercase ">Email</p>
              <a
                href="mailto:dogoernest@outlook.com"
                className="text-white text-lg hover:text-gray-800 transition font-medium "
              >
                dogoernest@outlook.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 pb-4 border-b border-gray-400">
            <i className="ri-phone-line text-white text-2xl "></i>
            <div>
              <p className="text-gray-300 text-sm uppercase ">Phone</p>
              <a
                href="tel:+46762976754"
                className="text-white text-lg hover:text-gray-800 transition font-medium "
              >
                +46 (0)76 297-6754
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 pb-4 border-b border-gray-400">
            <i className="ri-linkedin-box-line text-white text-2xl "></i>
            <div>
              <p className="text-gray-300 text-sm uppercase ">LinkedIn</p>
              <a
                href="https://linkedin.com/in/ernestdogo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg hover:text-gray-800 transition font-medium "
              >
                linkedin.com/in/ernestdogo
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 pb-4 border-b border-gray-400">
            <i className="ri-github-line text-white text-2xl "></i>
            <div>
              <p className="text-gray-300 text-sm uppercase ">GitHub</p>
              <a
                href="https://github.com/ernestdogosson"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg hover:text-gray-800 transition font-medium"
              >
                github.com/ernestdogosson
              </a>
            </div>
          </div>

          <button className="w-full mt-4 py-3 text-white font-bold capitalize bg-white/10 border border-white/30 rounded-lg hover:bg-white/20 transition-colors shadow-lg ">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}
export default Contact;
