export default function Navbar() {
  return (
    <header className="flex justify-between items-center p-6">
      <div className="flex items-center gap-3">
        <img
          src="/assets/unishrine_logo.png"
          className="w-12 h-12"
        />
        <span className="text-white text-2xl font-bold">
          Unishrine
        </span>
      </div>

      <nav className="hidden md:flex gap-8 text-white uppercase text-sm">
        <a href="#about">Our Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}