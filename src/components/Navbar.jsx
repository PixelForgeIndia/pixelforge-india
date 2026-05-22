function Navbar() {
  return (
    <nav className="fixed w-full top-0 bg-black/40 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
  <img
  src="/logo/logo.png"
  alt="PixelForge India"
  className="w-52 h-10 object-cover scale-150"
/>
 
</div>

        <div className="flex gap-6 text-sm md:text-base">
          <a href="#services" className="hover:text-cyan-400">Services</a>
          <a href="#portfolio" className="hover:text-cyan-400">Portfolio</a>
          <a href="#reviews" className="hover:text-cyan-400">Reviews</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar