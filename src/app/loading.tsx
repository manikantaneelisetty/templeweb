export default function Loading() {
  return (
    <div className="w-full min-h-screen pt-[88px] flex flex-col items-center justify-center bg-[#fdfbf7]/50 pointer-events-none">
      <div className="flex flex-col items-center gap-4 animate-pulse">
        <div className="w-12 h-12 rounded-full bg-[#ffdfba]/40 flex items-center justify-center text-[#7d3c2b]">
          <span className="material-symbols-outlined text-2xl">temple_hindu</span>
        </div>
        <div className="w-32 h-1.5 bg-[#ffdfba]/50 rounded-full overflow-hidden" />
      </div>
    </div>
  );
}
