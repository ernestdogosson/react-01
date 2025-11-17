import bgImage from "../assets/sunset.jpg";

function Contact() {
  return (
    <section
      className="flex justify-center items-center h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="w-4/5 max-w-[500px] border border-white/40 bg-white/10 shadow-2xl rounded-2xl backdrop-blur-xl p-12 mx-auto">
        <h2 className="uppercase text-center text-gray-900 text-3xl font-bold mb-2 ">
          Get In Touch
        </h2>
        <p className="text-center text-gray-800 mb-8 ">
          Let's connect and discuss opportunities
        </p>

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4 pb-4 border-b border-white/30">
            <i className="ri-mail-line text-gray-900 text-2xl"></i>
            <div>
              <p className="text-gray-800 text-sm uppercase ">Email</p>
              <a
                href="mailto:your.email@example.com"
                className="text-gray-900 text-lg hover:text-blue-700 transition font-medium "
              >
                dogoernest@outlook.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 pb-4 border-b border-white/30">
            <i className="ri-phone-line text-gray-900 text-2xl "></i>
            <div>
              <p className="text-gray-800 text-sm uppercase ">Phone</p>
              <a
                href="tel:+1234567890"
                className="text-gray-900 text-lg hover:text-blue-700 transition font-medium "
              >
                +46 (0)76 297-6754
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 pb-4 border-b border-white/30">
            <i className="ri-linkedin-box-line text-gray-900 text-2xl "></i>
            <div>
              <p className="text-gray-800 text-sm uppercase ">LinkedIn</p>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 text-lg hover:text-blue-700 transition font-medium "
              >
                linkedin.com/in/
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 pb-4 border-b border-white/30">
            <i className="ri-github-line text-gray-900 text-2xl "></i>
            <div>
              <p className="text-gray-800 text-sm uppercase ">GitHub</p>
              <a
                href="https://github.com/ernestdogosson"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 text-lg hover:text-blue-700 transition font-medium"
              >
                github.com/ernestdogosson
              </a>
            </div>
          </div>

          <button className="w-full mt-4 py-3 text-gray-900 font-bold capitalize bg-white/30 border border-white/50 rounded-lg hover:bg-white/40 transition-colors shadow-lg ">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}
export default Contact;
