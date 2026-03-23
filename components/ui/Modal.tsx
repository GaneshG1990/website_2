"use client";

export default function Modal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-6 rounded-2xl w-full max-w-lg text-white">
        
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Share Requirement</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <form className="mt-6 flex flex-col gap-4">
          <input placeholder="Name" className="p-3 rounded text-black" />
          <input placeholder="Email" className="p-3 rounded text-black" />
          <textarea placeholder="Requirement" className="p-3 rounded text-black" />

          <button className="bg-white text-black py-3 rounded-full font-semibold">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}