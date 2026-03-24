export default function BackgroundDecor() {
  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-[1] opacity-65"
        aria-hidden="true"
      >
        <div className="absolute left-[-8rem] top-[-6rem] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(50,109,255,0.32)_0%,rgba(50,109,255,0)_68%)] blur-2xl" />
        <div className="absolute right-[-10rem] top-[10%] h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(28,201,169,0.2)_0%,rgba(28,201,169,0)_70%)] blur-3xl" />
        <div className="absolute bottom-[-12rem] left-[25%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(106,124,255,0.22)_0%,rgba(106,124,255,0)_70%)] blur-3xl" />
      </div>
      <div
        className="pointer-events-none fixed inset-0 z-[2] opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />
    </>
  );
}
