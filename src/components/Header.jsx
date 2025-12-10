export default function Header() {
  return (
    <div className="flex flex-col bg-blue-600 text-white p-4 w-1/4">
      <header className="bg-blue-600 text-white p-4">
        <div>
          <div>
            <h1 className="text-3xl font-bold">
              <a href="about">My Portfolio</a>
            </h1>
            <h2>Front End Developer</h2>
          </div>
          <p>Short description here</p>
        </div>
        <nav className="mt-2">
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <ul className="mt-auto p-5">
        <li>Stuff</li>
      </ul>
    </div>
  );
}
