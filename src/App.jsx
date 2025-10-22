import React, { useState, useEffect } from 'react';
import { Zap, Rocket, TrendingUp, Twitter, Send, Gamepad2, Coins, Target, ChevronDown, MessageCircle, Globe, Shield, DollarSign, Users, Award, Flame, Trophy } from 'lucide-react';

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [count, setCount] = useState(0);
  const [glitchText, setGlitchText] = useState('DRONOX');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouse = (e) => {
      setMousePos({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouse);

    const glitchInterval = setInterval(() => {
      const glitches = ['DRONOX', 'DR0N0X', 'DRΩNΩX', 'DRONOX', '█RONOX', 'DRONOX'];
      setGlitchText(glitches[Math.floor(Math.random() * glitches.length)]);
    }, 150);

    const counterInterval = setInterval(() => {
      setCount(prev => (prev + 1) % 999999);
    }, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouse);
      clearInterval(glitchInterval);
      clearInterval(counterInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Matrix Rain Effect */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="absolute text-cyan-400 font-mono text-xs" style={{
            left: `${i * 5}%`,
            animation: `fall ${Math.random() * 10 + 5}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}>
            {Array(50).fill('0').map((_, j) => <div key={j}>{Math.random() > 0.5 ? '1' : '0'}</div>)}
          </div>
        ))}
      </div>

      {/* Mega Orbs with Parallax */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="absolute rounded-full blur-3xl" style={{
            width: `${Math.random() * 400 + 200}px`,
            height: `${Math.random() * 400 + 200}px`,
            background: `radial-gradient(circle, ${['#00ffff', '#3b82f6', '#14b8a6', '#8b5cf6'][i % 4]} 0%, transparent 70%)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.1,
            transform: `translate(${(mousePos.x - 50) * (i * 0.5)}px, ${(mousePos.y - 50) * (i * 0.5) + scrollY * 0.1}px) scale(${1 + Math.sin(Date.now() * 0.001 + i) * 0.1})`,
            transition: 'transform 0.5s ease-out'
          }}/>
        ))}
      </div>

      {/* Scanline */}
      <div className="fixed inset-0 pointer-events-none opacity-10 z-50">
        <div className="w-full h-1 bg-cyan-400 absolute animate-scanline"></div>
      </div>

      {/* HERO - ULTRA CHARGED */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
        {/* Animated Corner Brackets */}
        <div className="absolute inset-0 pointer-events-none">
          {[[0,0,'tl'], [100,0,'tr'], [0,100,'bl'], [100,100,'br']].map(([x, y, pos], i) => (
            <div key={pos} className="absolute w-32 h-32" style={{
              left: x + '%',
              top: y + '%',
              transform: `translate(${pos.includes('r') ? '-100%' : '0'}, ${pos.includes('b') ? '-100%' : '0'})`
            }}>
              <div className={`w-full h-full border-4 ${['border-cyan-400', 'border-pink-500', 'border-purple-500', 'border-yellow-400'][i]}`} style={{
                borderWidth: '4px 0 0 4px',
                transform: pos === 'tr' ? 'scaleX(-1)' : pos === 'bl' ? 'scaleY(-1)' : pos === 'br' ? 'scale(-1)' : 'none',
                animation: `cornerPulse 2s ease-in-out infinite ${i * 0.2}s`
              }}></div>
            </div>
          ))}
        </div>

        {/* Floating Mini DRONOXes */}
        {[...Array(5)].map((_, i) => (
          <div key={i} className="absolute text-6xl opacity-20 pointer-events-none" style={{
            left: `${20 + i * 15}%`,
            top: `${30 + Math.sin(i) * 20}%`,
            animation: `floatCrazy ${8 + i * 2}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`
          }}>🐂</div>
        ))}

        <div className="relative z-10 text-center max-w-7xl">
          {/* Logo with INSANE effects */}
          <div className="mb-8 relative group cursor-pointer">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="absolute inset-0 blur-3xl opacity-40 animate-pulse" style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${2 + i * 0.3}s`
              }}>
                <div className="w-96 h-96 mx-auto bg-cyan-400 rounded-full"></div>
              </div>
            ))}
            
            <div className="relative" style={{
              animation: 'float 6s ease-in-out infinite',
              transform: `rotateY(${(mousePos.x - 50) * 0.1}deg) rotateX(${(mousePos.y - 50) * 0.1}deg)`,
              transition: 'transform 0.1s'
            }}>
              <img src="/images/dronox-hero.png" alt="DRONOX" className="w-96 h-96 mx-auto relative object-contain group-hover:scale-110 transition-transform duration-500" style={{
                filter: 'drop-shadow(0 0 40px #00ffff) drop-shadow(0 0 80px #3b82f6) drop-shadow(0 0 120px #ff00ff) brightness(1.2) contrast(1.2)',
              }}/>
            </div>
          </div>

          {/* Title with MEGA GLITCH */}
          <div className="relative mb-6">
            <h1 className="text-[10rem] md:text-[16rem] font-black tracking-tighter leading-none relative" style={{
              textShadow: '0 0 40px #00ffff, 0 0 80px #00ffff, 0 0 120px #3b82f6, 0 0 160px #ff00ff',
              color: '#00ffff',
              WebkitTextStroke: '2px #3b82f6'
            }}>
              {glitchText}
            </h1>
            
            <h1 className="absolute inset-0 text-[10rem] md:text-[16rem] font-black tracking-tighter leading-none text-red-500 opacity-30 mix-blend-multiply" style={{transform: 'translate(-4px, -4px)'}}>
              DRONOX
            </h1>
            <h1 className="absolute inset-0 text-[10rem] md:text-[16rem] font-black tracking-tighter leading-none text-blue-500 opacity-30 mix-blend-multiply" style={{transform: 'translate(4px, 4px)'}}>
              DRONOX
            </h1>
          </div>

          {/* Animated Divider */}
          <div className="relative h-4 mb-6 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500" style={{
              animation: 'slideGradient 3s linear infinite',
              backgroundSize: '200% 100%'
            }}></div>
          </div>
          
          {/* Subtitle with stagger */}
          <div className="mb-8 space-y-2">
            <p className="text-6xl md:text-8xl font-black" style={{
              textShadow: '0 0 30px #ff00ff, 0 0 60px #ff00ff',
              color: '#ff00ff',
              animation: 'slideIn 1s ease-out both'
            }}>
              THE OX
            </p>
            <p className="text-6xl md:text-8xl font-black" style={{
              textShadow: '0 0 30px #00ffff, 0 0 60px #00ffff',
              color: '#00ffff',
              animation: 'slideIn 1s ease-out 0.2s both'
            }}>
              HAS TAKEN
            </p>
            <p className="text-6xl md:text-8xl font-black" style={{
              textShadow: '0 0 30px #fbbf24, 0 0 60px #fbbf24',
              color: '#fbbf24',
              animation: 'slideIn 1s ease-out 0.4s both'
            }}>
              FLIGHT 🚀
            </p>
          </div>
          
          {/* Tagline */}
          <div className="mb-12 text-3xl text-cyan-400 font-mono border-4 border-cyan-400 inline-block px-8 py-4 relative">
            <div className="absolute -top-3 left-4 bg-black px-2 text-sm text-yellow-400">TRANSMISSION</div>
            <span className="animate-pulse">&gt;</span> FROM MEME TO MOVEMENT <span className="animate-pulse">_</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-6 justify-center mb-12">
            <a href="https://t.me/Drono_Wars_bot" target="_blank" rel="noopener noreferrer">
              <button className="group relative px-16 py-8 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 font-black text-3xl overflow-hidden hover:scale-110 transition-all border-4 border-white">
                <span className="relative z-10 text-white flex items-center gap-3">
                  <Gamepad2 className="w-8 h-8 animate-pulse"/>
                  PLAY & EARN
                  <Flame className="w-8 h-8 animate-pulse"/>
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity"></div>
              </button>
            </a>
            
            <a href="https://dronoxonkaspa.netlify.app" target="_blank" rel="noopener noreferrer">
              <button className="group relative px-16 py-8 bg-black border-4 border-cyan-400 font-black text-3xl overflow-hidden hover:scale-110 transition-all">
                <span className="relative z-10 text-cyan-400 group-hover:text-black transition-colors flex items-center gap-3">
                  <Coins className="w-8 h-8"/>
                  BUY NOW
                  <TrendingUp className="w-8 h-8"/>
                </span>
                <div className="absolute inset-0 bg-cyan-400 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
            </a>
          </div>

          {/* Social */}
          <div className="flex gap-8 justify-center items-center">
            <a href="https://twitter.com/dronox" target="_blank" rel="noopener noreferrer" className="group relative">
              <div className="absolute inset-0 bg-cyan-400 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative w-20 h-20 border-4 border-cyan-400 rounded-full flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-500 bg-black">
                <Twitter className="w-10 h-10 text-cyan-400"/>
              </div>
            </a>
            
            <div className="text-4xl font-black text-gray-600">|</div>
            
            <a href="https://t.me/dronox" target="_blank" rel="noopener noreferrer" className="group relative">
              <div className="absolute inset-0 bg-pink-500 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative w-20 h-20 border-4 border-pink-500 rounded-full flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-500 bg-black">
                <Send className="w-10 h-10 text-pink-500"/>
              </div>
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 animate-bounce">
          <div className="flex flex-col items-center">
            <ChevronDown className="w-16 h-16 text-cyan-400 animate-pulse"/>
            <span className="text-cyan-400 font-mono text-sm mt-2">SCROLL FOR MORE</span>
          </div>
        </div>
      </section>

      {/* Rest of sections... I'll continue with a few key ones */}
      
      {/* Add all other sections from the artifact here - WHY DRONOX, TOKENOMICS, GAME, ROADMAP, DJ VIDEO, CTA, FOOTER */}
      {/* Due to length, I'm showing the structure - you have the full code in the artifact */}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        
        @keyframes floatCrazy {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(30px, -40px) rotate(10deg); }
          50% { transform: translate(-20px, -60px) rotate(-10deg); }
          75% { transform: translate(40px, -30px) rotate(15deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        
        @keyframes cornerPulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        
        @keyframes slideIn {
          from { transform: translateX(-100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideGradient {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        
        @keyframes scanline {
          0% { top: 0%; }
          100% { top: 100%; }
        }
        
        @keyframes fall {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
      `}</style>
    </div>
  );
}