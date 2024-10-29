import React, { useEffect, useState } from 'react';
import { Star, Sparkles, Moon } from 'lucide-react';

const ParallaxHome = () => {
  const [scrollY, setScrollY] = useState(0);
  const [shimmer, setShimmer] = useState(1);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const shimmerInterval = setInterval(() => {
      setShimmer(Math.random() * 0.15 + 0.85);
    }, 100);
    return () => clearInterval(shimmerInterval);
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-black via-[#1a0f2e] to-black">
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(100vh) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-20vh) scale(1.5);
            opacity: 0;
          }
        }
      `}</style>

      <div 
        className="fixed inset-0 opacity-30"
        style={{
          backgroundImage: 'linear-gradient(0deg, rgba(23,0,32,0.3), transparent)',
          transform: `translateY(${scrollY * 0.2}px)`
        }}
      />

      <div className="fixed inset-0 opacity-30">
        {[...Array(30)].map((_, i) => (
          <Star
            key={i}
            className="absolute text-[#cc9dff]"
            size={Math.random() * 12 + 6}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.2,
              transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.02}deg)`,
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>

      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute top-1/2 left-1/2 w-96 h-96 border border-[#cc9dff]/30 rounded-full"
            style={{
              transform: `translate(-50%, -50%) rotate(${scrollY * 0.1}deg)`,
              boxShadow: `0 0 40px rgba(204, 157, 255, ${shimmer * 0.1})`
            }}
          />
          <div 
            className="absolute top-1/2 left-1/2 w-80 h-80 border border-[#9b4dff]/20 rounded-full"
            style={{
              transform: `translate(-50%, -50%) rotate(${-scrollY * 0.15}deg)`
            }}
          />
        </div>
        
        <div 
          className="text-center relative"
          style={{ transform: `translateY(${scrollY * -0.5}px)` }}
        >
          <div className="w-48 h-48 mx-auto rounded-full mb-8 shadow-2xl border border-[#cc9dff]/30 overflow-hidden">
            <img src="/logo.png" alt="MaidenandMermaid" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-7xl font-bold text-[#cc9dff] mb-6" style={{ textShadow: '0 0 20px rgba(204, 157, 255, 0.5)' }}>
            Maiden & Mermaid
          </h1>
          <p className="text-2xl text-[#cc9dff]/70">Illuminating Your Path Through Live Readings</p>
        </div>
      </div>

      <div className="relative min-h-screen flex items-center py-32">
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-lg overflow-hidden"
              style={{
                width: '120px',
                height: '180px',
                top: `${20 + i * 15}%`,
                left: `${10 + i * 20}%`,
                transform: `translateY(${scrollY * (0.2 + i * 0.1)}px) rotate(${15 + i * 10}deg)`,
                boxShadow: '0 0 30px rgba(0,0,0,0.5)'
              }}
            >
              <img 
                src="/tarotback.png" 
                alt="Tarot card back" 
                className="w-full h-full object-cover"
                style={{
                  filter: `brightness(${0.8 + i * 0.1}) saturate(${1 + i * 0.1})`
                }}
              />
              <div 
                className="absolute inset-0 bg-[#cc9dff]/10"
                style={{
                  opacity: shimmer * 0.3,
                  boxShadow: `inset 0 0 20px rgba(204, 157, 255, ${shimmer * 0.2})`
                }}
              />
              <div className="absolute inset-0 border border-[#cc9dff]/20 rounded-lg" />
            </div>
          ))}
        </div>
        <div className="container mx-auto px-4 text-right relative">
          <div className="ml-auto max-w-xl" style={{ transform: `translateX(${scrollY * -0.2}px)` }}>
            <h2 className="text-4xl font-bold text-[#cc9dff] mb-6">Live Personal Readings</h2>
            <p className="text-lg text-[#cc9dff]/70 leading-relaxed">
              Experience the power of real-time guidance as the cards reveal their wisdom.
              Each reading is a unique journey, tailored specifically to you.
            </p>
          </div>
        </div>
      </div>

      <div className="relative min-h-screen flex items-center py-32">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-[#9b4dff]/20 rounded-full"
              style={{
                width: `${500 + i * 200}px`,
                height: `${500 + i * 200}px`,
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) rotate(${scrollY * (0.1 + i * 0.05)}deg)`,
                boxShadow: `0 0 40px rgba(155, 77, 255, ${shimmer * 0.1})`
              }}
            />
          ))}
        </div>
        <div className="container mx-auto px-4">
          <div 
            className="max-w-xl bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-[#cc9dff]/20"
            style={{ transform: `translateX(${scrollY * 0.2}px)` }}
          >
            <h2 className="text-4xl font-bold text-[#cc9dff] mb-6">Your Personal Guide</h2>
            <p className="text-lg text-[#cc9dff]/70 leading-relaxed">
              Through live interaction and intuitive connection, we&apos;ll explore your 
              questions, concerns, and aspirations together. Every reading is a 
              sacred space for clarity and guidance.
            </p>
          </div>
        </div>
      </div>

      <div className="relative min-h-screen flex items-center py-32">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16">
          {[
            {
              title: "Personal Readings",
              description: "One-on-one live sessions where we explore your path through the cards. Each reading is uniquely yours."
            },
            {
              title: "Special Events",
              description: "Bring the magic of live tarot readings to your gatherings, parties, or corporate events."
            }
          ].map((item, i) => (
            <div 
              key={i}
              className="bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-[#cc9dff]/20"
              style={{ 
                transform: `translateY(${scrollY * (i * 0.1 - 0.2)}px)`,
                boxShadow: '0 0 30px rgba(0,0,0,0.5)'
              }}
            >
              <h3 className="text-2xl font-bold text-[#cc9dff] mb-4">{item.title}</h3>
              <p className="text-[#cc9dff]/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative min-h-screen flex items-center justify-center py-32">
        <div 
          className="text-center max-w-2xl px-4"
          style={{ transform: `scale(${1 + scrollY * 0.0001})` }}
        >
          <h2 className="text-4xl font-bold text-[#cc9dff] mb-6">Begin Your Journey</h2>
          <p className="text-xl text-[#cc9dff]/70 mb-8">
            Ready to explore what the cards have in store for you? Let&apos;s connect for a live reading.
          </p>
          <button className="px-8 py-4 bg-[#2a1744] hover:bg-[#3a1f5e] text-[#cc9dff] rounded-full text-xl transition-all transform hover:scale-105 border border-[#cc9dff]/30">
            Book Your Reading
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParallaxHome;
