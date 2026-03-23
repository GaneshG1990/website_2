export default function CoreFocus() {
  return (
    <section id="about" className="p-10 bg-gray-200">
      <div className="max-w-6xl mx-auto bg-gradient-to-r from-purple-600 to-blue-500 p-10 rounded-3xl text-white">
        
        <h2 className="text-3xl font-bold mb-6">
          We Solve Your Toughest Business Problems
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Business Task Automation",
            "Custom AI Tools",
            "Smart Chatbots",
          ].map((item) => (
            <div key={item} className="bg-white/10 p-6 rounded-xl">
              <h3 className="font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}