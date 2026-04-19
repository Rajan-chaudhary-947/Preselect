const PreLoader = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden">

      <h1 className="relative text-4xl md:text-6xl font-bold text-white tracking-widest overflow-hidden">
        Preselect

        {/* DIAGONAL GLOW */}
       <span
  style={{
    position: "absolute",
    top: "-100%",
    left: "-100%",
    width: "250%",
    height: "250%",
    background:
      "linear-gradient(120deg, transparent 48%, rgba(168,85,247,0.7),rgba(236,72,153,0.6), transparent 52%)",
    transform: "rotate(25deg)",
    animation: "diagonalSweep 2s linear infinite",
    pointerEvents: "none",
  }}
/>

      </h1>

      {/* KEYFRAMES INLINE */}
      <style>
        {`
          @keyframes diagonalSweep {
            0% {
              transform: translate(-50%, -50%) rotate(25deg);
            }
            100% {
              transform: translate(50%, 50%) rotate(25deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default PreLoader;
