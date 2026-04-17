export const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Static gradients - no animation, no blur for performance */}
      <div 
        className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)' }}
      />
      <div 
        className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)' }}
      />
    </div>
  )
}
