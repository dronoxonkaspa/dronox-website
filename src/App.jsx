import React, { useState, useEffect } from 'react';
import { Zap, Rocket, TrendingUp, Twitter, Send, Gamepad2, Coins, Target, ChevronDown, MessageCircle, Globe, Flame, Trophy } from 'lucide-react';

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
            transform: `translate(${(mousePos.x - 50) * (i * 0.5)}px, ${(mousePos.y - 50) * (i * 0.5) + scrollY * 0.1}px)`,
            transition: 'transform 0.5s ease-out'
          }}/>
        ))}
      </div>

      {/* Scanline */}
      <div className="fixed inset-0 pointer-events-none opacity-10 z-50">
        <div className="w-full h-1 bg-cyan-400 absolute animate-scanline"></div>
      </div>

      {/* ==================== HERO ==================== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
        {/* Corner Brackets */}
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

        {/* Floating Oxes */}
        {[...Array(5)].map((_, i) => (
          <div key={i} className="absolute text-6xl opacity-20 pointer-events-none" style={{
            left: `${20 + i * 15}%`,
            top: `${30 + Math.sin(i) * 20}%`,
            animation: `floatCrazy ${8 + i * 2}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`
          }}>🐂</div>
        ))}

        <div className="relative z-10 text-center max-w-7xl">
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
              <img src="/images/dronox-hero.png" alt="DRONOX" className="w-96 h-96 mx-auto relative object-contain group-hover:scale-110 transition-transform duration-500" style={{
                filter: 'drop-shadow(0 0 40px #00ffff) drop-shadow(0 0 80px #3b82f6) drop-shadow(0 0 120px #ff00ff) brightness(1.2) contrast(1.2)',
              }}/>
            </div>
          </div>

          {/* Title with Glitch */}
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

          {/* Divider */}
          <div className="relative h-4 mb-6 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500" style={{
              animation: 'slideGradient 3s linear infinite',
              backgroundSize: '200% 100%'
            }}></div>
          </div>
          
          {/* Subtitle */}
          <div className="mb-8 space-y-2">
            <p className="text-6xl md:text-8xl font-black" style={{
              textShadow: '0 0 30px #ff00ff, 0 0 60px #ff00ff',
              color: '#ff00ff',
              animation: 'slideIn 1s ease-out both'
            }}>THE OX</p>
            <p className="text-6xl md:text-8xl font-black" style={{
              textShadow: '0 0 30px #00ffff, 0 0 60px #00ffff',
              color: '#00ffff',
              animation: 'slideIn 1s ease-out 0.2s both'
            }}>HAS TAKEN</p>
            <p className="text-6xl md:text-8xl font-black" style={{
              textShadow: '0 0 30px #fbbf24, 0 0 60px #fbbf24',
              color: '#fbbf24',
              animation: 'slideIn 1s ease-out 0.4s both'
            }}>FLIGHT 🚀</p>
          </div>
          
          {/* Tagline */}
          <div className="mb-12 text-3xl text-cyan-400 font-mono border-4 border-cyan-400 inline-block px-8 py-4 relative">
            <div className="absolute -top-3 left-4 bg-black px-2 text-sm text-yellow-400">TRANSMISSION</div>
            <span className="animate-pulse">&gt;</span> FROM MEME TO MOVEMENT <span className="animate-pulse">_</span>
          </div>

          {/* Buttons */}
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

      {/* ==================== WHY DRONOX ==================== */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-8 py-3 border-4 border-pink-500 mb-8 relative">
              <div className="absolute -top-3 left-4 bg-black px-2 text-pink-500 font-bold text-sm">WHY?</div>
              <span className="text-pink-500 font-black text-xl tracking-wider">THE TRUTH</span>
            </div>
            <h2 className="text-8xl md:text-9xl font-black mb-8" style={{
              textShadow: '0 0 40px #ff00ff',
              color: '#ff00ff'
            }}>
              NOT YOUR<br/>AVERAGE MEME
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: '🐂 THE OX THAT FLIES',
                desc: 'Other coins got dogs, cats, frogs. We got an OX with WINGS. Because when the going gets tough, the tough get flying.',
                color: 'cyan'
              },
              {
                title: '⚡ KASPA L2 SPEED',
                desc: 'Built on Kaspa Layer 2. Faster than your ex leaving when you mentioned crypto. Lightning fast, rock solid.',
                color: 'purple'
              },
              {
                title: '🎮 ACTUAL UTILITY',
                desc: 'Not just another pump & dump. Play our game, earn DRONO, vibe with the community. We\'re building an empire.',
                color: 'pink'
              },
              {
                title: '💎 EARLY AF',
                desc: 'You\'re literally early. No 1000x promises, just vibes, memes, and steady growth. Perfect time to board.',
                color: 'yellow'
              }
            ].map((item, i) => (
              <div key={i} className={`group relative bg-black border-4 border-${item.color}-400 p-10 hover:border-${item.color}-300 transition-all`} style={{
                animation: `slideInRight 0.8s ease-out ${i * 0.2}s both`
              }}>
                <div className={`absolute inset-0 bg-${item.color}-500 opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                <h3 className={`text-3xl font-black mb-4 text-${item.color}-400`}>{item.title}</h3>
                <p className="text-xl text-gray-300 leading-relaxed">{item.desc}</p>
                <div className={`absolute bottom-4 right-4 w-16 h-16 border-2 border-${item.color}-400 opacity-20`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TOKENOMICS ==================== */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-8xl md:text-9xl font-black mb-6" style={{
              textShadow: '0 0 40px #fbbf24',
              color: '#fbbf24'
            }}>
              THE NUMBERS
            </h2>
            <p className="text-3xl text-gray-400 font-bold">DON'T LIE 📊</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {label: 'TOTAL SUPPLY', value: '1B', sub: 'Fixed Forever', emoji: '💰'},
              {label: 'TAX', value: '0%', sub: 'Buy/Sell', emoji: '🚫'},
              {label: 'BLOCKCHAIN', value: 'KASPA L2', sub: 'Lightning Fast', emoji: '⚡'}
            ].map((stat, i) => (
              <div key={i} className="group relative bg-black border-4 border-yellow-400 p-10 text-center hover:scale-110 transition-all cursor-pointer" style={{
                animation: `float 3s ease-in-out infinite ${i * 0.3}s`
              }}>
                <div className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <div className="text-6xl mb-4">{stat.emoji}</div>
                <div className="text-yellow-400 text-sm font-black mb-2 tracking-widest">{stat.label}</div>
                <div className="text-7xl font-black text-white mb-2" style={{textShadow: '0 0 20px #fbbf24'}}>{stat.value}</div>
                <div className="text-gray-400">{stat.sub}</div>
              </div>
            ))}
          </div>

          <div className="border-4 border-yellow-400 bg-black p-12 text-center relative">
            <div className="absolute top-0 left-0 w-12 h-12 bg-yellow-400"></div>
            <div className="absolute top-0 right-0 w-12 h-12 bg-yellow-400"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 bg-yellow-400"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 bg-yellow-400"></div>
            <p className="text-4xl font-black text-white mb-4">
              NO BULLSHIT. NO RUG. NO PROMISES WE CAN'T KEEP.
            </p>
            <p className="text-2xl text-gray-400">
              Just a flying ox and a dream. 🐂✨
            </p>
          </div>
        </div>
      </section>

      {/* ==================== GAME SECTION ==================== */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-black via-cyan-950/10 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 mb-8">
              <span className="text-white font-black text-xl">🎮 PLAY TO EARN 🎮</span>
            </div>
            <h2 className="text-8xl md:text-9xl font-black mb-6" style={{
              textShadow: '0 0 40px #00ffff',
              color: '#00ffff'
            }}>
              TAP.<br/>EARN.<br/>DOMINATE.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 blur-3xl opacity-50 group-hover:opacity-80 transition-opacity animate-pulse"></div>
              <div className="relative bg-black border-4 border-cyan-400 p-12">
                <div className="text-9xl text-center mb-6">🎮</div>
                <p className="text-3xl text-white font-bold text-center mb-6">
                  THE MOST ADDICTIVE GAME ON TELEGRAM
                </p>
                <div className="text-center text-cyan-400 font-mono text-2xl font-black mb-8">
                  @Drono_Wars_bot
                </div>
                <a href="https://t.me/Drono_Wars_bot" target="_blank" rel="noopener noreferrer">
                  <button className="w-full py-6 bg-gradient-to-r from-cyan-400 to-pink-500 text-black font-black text-2xl hover:scale-105 transition-transform">
                    START EARNING NOW
                  </button>
                </a>
              </div>
            </div>

            <div className="space-y-6">
              {[
                {icon: '⚡', title: 'TAP = MONEY', desc: 'Literally just tap. Get tokens. It\'s that easy.'},
                {icon: '🚀', title: 'LEVEL UP', desc: 'Unlock sick boosters. Multiply your earnings. Get rich.'},
                {icon: '🏆', title: 'LEADERBOARDS', desc: 'Compete globally. Flex on your friends. Be a legend.'},
                {icon: '💎', title: 'REWARDS', desc: 'Top players get EXCLUSIVE perks. NFTs. Access. Power.'}
              ].map((item, i) => (
                <div key={i} className="bg-black border-4 border-purple-500 p-8 hover:border-cyan-400 transition-all hover:translate-x-4">
                  <div className="flex items-center gap-6">
                    <div className="text-6xl">{item.icon}</div>
                    <div>
                      <h3 className="text-2xl font-black text-purple-400 mb-2">{item.title}</h3>
                      <p className="text-xl text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ROADMAP ==================== */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-8xl md:text-9xl font-black mb-6" style={{
              textShadow: '0 0 40px #ff00ff',
              color: '#ff00ff'
            }}>
              THE PLAN
            </h2>
            <p className="text-3xl text-gray-400 font-bold">WE'RE GOING PLACES 🗺️</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-cyan-400 via-pink-500 to-purple-500 transform -translate-x-1/2"></div>
            
            <div className="space-y-24">
              {[
                {phase: 'Q4 2024', title: 'LIFTOFF', items: ['✅ Token Launch', '✅ Game Alpha', '✅ Community Built'], status: 'DONE', color: 'cyan', emoji: '🚀'},
                {phase: 'Q1 2025', title: 'MOMENTUM', items: ['🔥 Marketing Blitz', '🔥 Partnerships', '🔥 Game V2'], status: 'NOW', color: 'pink', emoji: '⚡'},
                {phase: 'Q2 2025', title: 'EXPLOSION', items: ['📈 Major Listings', '📈 NFT Drop', '📈 DAO Launch'], status: 'SOON', color: 'purple', emoji: '💥'},
                {phase: 'Q3 2025', title: 'DOMINATION', items: ['👑 Market Leader', '👑 Cross-Chain', '👑 World Tour'], status: 'MOON', color: 'yellow', emoji: '🌙'}
              ].map((phase, i) => (
                <div key={i} className={`flex items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`inline-block px-6 py-2 bg-${phase.color}-500 mb-4`}>
                      <span className="text-black font-black">{phase.status}</span>
                    </div>
                    <h3 className="text-2xl text-gray-500 font-bold mb-2">{phase.phase}</h3>
                    <h4 className={`text-6xl font-black text-${phase.color}-400 mb-6`}>{phase.title} {phase.emoji}</h4>
                    <div className="space-y-3">
                      {phase.items.map((item, j) => (
                        <p key={j} className="text-2xl text-gray-300">{item}</p>
                      ))}
                    </div>
                  </div>
                  <div className={`w-24 h-24 rounded-full bg-${phase.color}-500 border-8 border-black flex items-center justify-center z-10 text-5xl`}>
                    {phase.emoji}
                  </div>
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DJ VIDEO ==================== */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-6xl font-black mb-4" style={{textShadow: '0 0 30px #ff00ff', color: '#ff00ff'}}>
              DJ DRONOX 🎧
            </h2>
            <p className="text-2xl text-gray-400">Dropping beats & memes</p>
          </div>

          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-500 blur-2xl opacity-30 group-hover:opacity-60 transition-opacity"></div>
            <div className="relative bg-black border-4 border-pink-500 aspect-video flex items-center justify-center">
             <video
  id="djVideo"
  className="w-full h-full object-cover"
  autoPlay
  loop
  muted
  playsInline
  onMouseEnter={() => {
    const video = document.getElementById("djVideo");
    if (!video) return;
    video.muted = false;
    let vol = 0;
    const fade = setInterval(() => {
      vol += 0.05;
      video.volume = vol;
      if (vol >= 1) clearInterval(fade);
    }, 100);
  }}
  onMouseLeave={() => {
    const video = document.getElementById("djVideo");
    if (!video) return;
    let vol = video.volume;
    const fadeOut = setInterval(() => {
      vol -= 0.05;
      video.volume = vol;
      if (vol <= 0) {
        clearInterval(fadeOut);
        video.muted = true;
      }
    }, 100);
  }}
>
  <source src="/videos/Drono-dj.mp4" type="video/mp4" />
</video>
              <div className="text-center">
                <div className="text-8xl mb-4">🎧</div>
                <p className="text-pink-400 font-mono font-bold text-xl">[ VIDEO COMING SOON ]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="relative py-40 px-6 overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="absolute text-6xl opacity-5" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 5}s ease-in-out infinite ${Math.random() * 5}s`
            }}>🐂</div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="mb-12">
            <div className="text-[12rem] md:text-[18rem] font-black leading-none mb-4 animate-pulse" style={{
              textShadow: '0 0 60px #00ffff, 0 0 120px #00ffff',
              color: '#00ffff'
            }}>
              READY?
            </div>
          </div>
          
          <p className="text-5xl font-black text-white mb-12 border-t-4 border-b-4 border-pink-500 py-8">
            TIME TO FLY WITH THE HERD 🐂⚡
          </p>
          
          <a href="https://t.me/Drono_Wars_bot" target="_blank" rel="noopener noreferrer">
            <button className="px-32 py-12 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 font-black text-6xl hover:scale-110 transition-all text-white border-8 border-white shadow-2xl relative overflow-hidden group">
              <span className="relative z-10">JOIN NOW</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity"></div>
            </button>
          </a>

          <p className="text-3xl text-gray-500 mt-12 font-mono">
            {count.toString().padStart(6, '0')} TAPS AND COUNTING...
          </p>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="relative py-16 px-6 border-t-4 border-cyan-400 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="text-center md:text-left">
              <h3 className="text-4xl font-black text-cyan-400 mb-2">DRONOX</h3>
              <p className="text-gray-400 font-mono">The Ox That Flies 🐂⚡</p>
            </div>
            <div className="flex gap-8">
              <a href="https://twitter.com/dronox" target="_blank" rel="noopener noreferrer">
                <button className="w-20 h-20 border-4 border-cyan-400 rounded-full flex items-center justify-center hover:scale-125 transition-transform bg-black">
                  <Twitter className="w-10 h-10 text-cyan-400"/>
                </button>
              </a>
              <a href="https://t.me/dronox" target="_blank" rel="noopener noreferrer">
                <button className="w-20 h-20 border-4 border-pink-500 rounded-full flex items-center justify-center hover:scale-125 transition-transform bg-black">
                  <Send className="w-10 h-10 text-pink-500"/>
                </button>
              </a>
            </div>
          </div>
          
          <div className="text-center border-t-2 border-gray-800 pt-8">
            <p className="text-gray-500 font-mono">© 2025 DRONOX • NOT FINANCIAL ADVICE • DO YOUR OWN RESEARCH</p>
            <p className="text-gray-600 text-sm mt-2">SLOW IS SMOOTH. SMOOTH IS FAST. 🐂⚡</p>
          </div>
        </div>
      </footer>

      {/* ==================== STYLES ==================== */}
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
        
        @keyframes slideInRight {
          from { transform: translateX(100px); opacity: 0; }
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