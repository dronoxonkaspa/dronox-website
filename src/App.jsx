import React, { useState, useEffect, useRef } from 'react';
import {
  Zap, Rocket, TrendingUp, Twitter, Send, Gamepad2, Coins, Target,
  ChevronDown, MessageCircle, Globe, Shield, DollarSign, Users,
  Award, Flame, Trophy
} from 'lucide-react';

// ✅ Correct asset imports
import heroImg from './assets/dronox-hero.png';
import djVideo from './assets/Drono-dj.mp4';
import bgImg from './assets/dronox-bg.png'; // optional, only if you have this image

export default function DronoxLanding() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [count, setCount] = useState(0);
  const [glitchText, setGlitchText] = useState('DRONOX');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouse = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouse);

    const glitchInterval = setInterval(() => {
      const glitches = ['DRONOX', 'DR0N0X', 'DRΩNΩX', 'DRONOX', '█RONOX', 'DRONOX'];
      setGlitchText(glitches[Math.floor(Math.random() * glitches.length)]);
    }, 150);

    const counterInterval = setInterval(() => {
      setCount((prev) => (prev + 1) % 999999);
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
            {Array(50).fill('0').map((_, j) => (
              <div key={j}>{Math.random() > 0.5 ? '1' : '0'}</div>
            ))}
          </div>
        ))}
      </div>

      {/* Mega Orbs */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="absolute rounded-full blur-3xl" style={{
            width: `${Math.random() * 400 + 200}px`,
            height: `${Math.random() * 400 + 200}px`,
            background: `radial-gradient(circle, ${['#00ffff', '#3b82f6', '#14b8a6', '#8b5cf6'][i % 4]} 0%, transparent 70%)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.1,
            transform: `translate(${(mousePos.x - 50) * (i * 0.5)}px, ${(mousePos.y - 50) * (i * 0.5) + scrollY * 0.1}px)`,
            transition: 'transform 0.5s ease-out'
          }} />
        ))}
      </div>

      {/* Scanline */}
      <div className="fixed inset-0 pointer-events-none opacity-10 z-50">
        <div className="w-full h-1 bg-cyan-400 absolute animate-scanline"></div>
      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
        {/* Logo */}
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
            {/* ✅ Fixed import usage here */}
            <img
              src={heroImg}
              alt="DRONOX"
              className="w-96 h-96 mx-auto object-contain group-hover:scale-110 transition-transform duration-500"
              style={{
                filter:
                  'drop-shadow(0 0 40px #00ffff) drop-shadow(0 0 80px #3b82f6) drop-shadow(0 0 120px #ff00ff) brightness(1.2) contrast(1.2)',
              }}
            />
          </div>
        </div>

        {/* Title */}
        <div className="relative mb-6 text-center">
          <h1
            className="text-[10rem] md:text-[16rem] font-black tracking-tighter leading-none relative"
            style={{
              textShadow:
                '0 0 40px #00ffff, 0 0 80px #00ffff, 0 0 120px #3b82f6, 0 0 160px #ff00ff',
              color: '#00ffff',
              WebkitTextStroke: '2px #3b82f6',
            }}
          >
            {glitchText}
          </h1>
        </div>

        <p className="text-6xl md:text-8xl font-black mb-12" style={{
          textShadow: '0 0 30px #00ffff, 0 0 60px #00ffff',
          color: '#00ffff',
        }}>
          THE OX HAS TAKEN FLIGHT 🚀
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-6 justify-center mb-12">
          <a href="https://t.me/Drono_Wars_bot" target="_blank" rel="noopener noreferrer">
            <button className="group relative px-16 py-8 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 font-black text-3xl overflow-hidden hover:scale-110 transition-all border-4 border-white">
              <span className="relative z-10 text-white flex items-center gap-3">
                <Gamepad2 className="w-8 h-8 animate-pulse" />
                PLAY & EARN
                <Flame className="w-8 h-8 animate-pulse" />
              </span>
            </button>
          </a>

          <a href="https://lfg.kaspa.com/app/token/0x0C2192417e5e040529085e6f7566eF227A7E9337" target="_blank" rel="noopener noreferrer">
            <button className="group relative px-16 py-8 bg-black border-4 border-cyan-400 font-black text-3xl overflow-hidden hover:scale-110 transition-all">
              <span className="relative z-10 text-cyan-400 group-hover:text-black transition-colors flex items-center gap-3">
                <Coins className="w-8 h-8" />
                BUY NOW
                <TrendingUp className="w-8 h-8" />
              </span>
            </button>
          </a>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        @keyframes fall {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        .animate-scanline {
          animation: scanline 8s linear infinite;
        }
        @keyframes scanline {
          0% { top: 0%; }
          100% { top: 100%; }
        }
      `}</style>
    </div>
  );
}
