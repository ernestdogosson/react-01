function Header() {
  return (
    <>
      <header className="bg-slate-900 text-white  flex flex-col items-center justify-center py-48 h-2/4 px-16">
        <h1 className="text-4xl font-bold mb-8 tracking-wider">Ernest Dogo</h1>
        <p className="text-xl text-gray-200 mb-12">
          Frontend Developer Portfolio
        </p>
        <nav>
          <ul className="flex justify-between w-[500px] ">
            <li className="border border-gray-100 px-5 py-2 rounded hover:bg-gray-100 hover:text-gray-900 transition hover:-translate-y-2 font-bold">
              <a href="#">Home</a>
            </li>
            <li className="border border-gray-100 px-5 py-2 rounded hover:bg-gray-100 hover:text-gray-900 transition hover:-translate-y-2 font-bold">
              <a href="#">Projects</a>
            </li>
            <li className="border border-gray-100 px-5 py-2 rounded hover:bg-gray-100 hover:text-gray-900 transition hover:-translate-y-2 font-bold">
              <a href="#">Testimonial</a>
            </li>
            <li className="border border-gray-100 px-5 py-2 rounded hover:bg-gray-100 hover:text-gray-900 transition hover:-translate-y-2 font-bold">
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
