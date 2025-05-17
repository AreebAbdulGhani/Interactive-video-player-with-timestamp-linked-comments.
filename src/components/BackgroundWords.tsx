"use client";

import React, { useEffect, useState } from 'react';

// Expanded array of Japanese words/characters for the background
const japaneseWords = [
  '忍', '術', '神', '龍', '魔', '法', '気', '剣', '道', '陰', '陽', '風', '火', '水', 
  '地', '天', '空', '雷', '光', '闇', '桜', '月', '星', '霊', '鬼', '刀', '雪', '血',
  '戦', '命', '心', '力', '炎', '氷', '雲', '鋼', '夢', '幻', '魂', '弓', '矢', '盾',
  '絆', '技', '音', '影', '花', '狐', '狼', '竜', '虎', '獣', '悪', '善', '美', '醜',
  '愛', '恋', '怒', '哀', '楽', '苦', '喜', '悲', '希', '望', '絶', '望', '生', '死',
  '始', '終', '永', '遠', '時', '間', '瞬', '間', '過', '去', '現', '在', '未', '来',
  '真', '実', '嘘', '正', '義', '邪', '悪', '光', '明', '暗', '黒', '白', '赤', '青',
  '緑', '黄', '紫', '橙', '茶', '灰', '金', '銀', '銅', '鉄', '木', '竹', '石', '山',
  '川', '海', '森', '林', '草', '花', '実', '種', '葉', '根', '幹', '枝', '春', '夏',
  '秋', '冬', '朝', '昼', '夕', '夜', '日', '週', '月', '年', '世', '紀', '東', '西',
  '雨', '風', '電', '牙', '拳', '刃', '斬', '滅', '煌', '閃', '轟', '鳴', '咆', '哮',
  '斧', '槍', '霊', '魔', '妖', '鬼', '神', '祭', '儀', '式', '封', '印', '解', '放',
  '極', '冥', '奈', '落', '獄', '術', '技', '式', '弾', '丸', '装', '甲', '鎧', '兜'
];

// Anime-specific words and phrases
const animeWords = [
  '忍者', '侍', '武士', '魔法', '妖怪', '結界', '術式', '呪文', '召喚', '必殺技',
  '変身', '幻術', '妖術', '結印', '封印', '解放', '奥義', '発動', '覚醒', '絶技',
  '魔王', '勇者', '魔女', '巫女', '英雄', '鬼神', '守護', '破壊', '再生', '不死',
  '滅殺', '斬撃', '超越', '闘気', '秘技', '魔術', '鬼殺', '冥府', '閃光', '轟斬',
  '雷撃', '炎刀', '氷結', '業火', '極光', '煉獄', '飛翔', '疾風', '空閃', '眩天',
  '奈落', '幽冥', '閻魔', '止水', '焔魔', '万象', '煌撃', '超新星', '神速', '紅蓮'
];

// Combine all words
const allWords = [...japaneseWords, ...animeWords];

interface WordElement {
  word: string;
  x: number;
  y: number;
  size: number;
  opacity: number;
  animationDuration: number;
  animationDelay: number;
  rotate: number;
  fireIntensity: number;
  isAnimeTerm: boolean;
}

export default function BackgroundWords() {
  const [words, setWords] = useState<WordElement[]>([]);

  useEffect(() => {
    // Create 300 floating words (increased from 200)
    const wordElements: WordElement[] = [];
    for (let i = 0; i < 300; i++) {
      const isAnimeTerm = Math.random() > 0.65; // 35% chance for anime terms (increased)
      wordElements.push({
        word: isAnimeTerm 
          ? animeWords[Math.floor(Math.random() * animeWords.length)]
          : japaneseWords[Math.floor(Math.random() * japaneseWords.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 10, // Random size between 2-12rem (increased max size)
        opacity: 0.15 + Math.random() * 0.45, // Increased opacity range
        animationDuration: 5 + Math.random() * 20, // 5-25 seconds (increased variation)
        animationDelay: -Math.random() * 15,
        rotate: Math.random() * 360,
        fireIntensity: 1.0 + Math.random() * 1.5, // Increased fire intensity
        isAnimeTerm
      });
    }
    setWords(wordElements);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {words.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.isAnimeTerm ? 'animate-float-dramatic' : 'animate-float'}`}
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            fontSize: `${item.size}rem`,
            opacity: item.opacity,
            animationDuration: `${item.animationDuration}s`,
            animationDelay: `${item.animationDelay}s`,
            transform: `rotate(${item.rotate}deg)`,
            zIndex: Math.floor(item.size)
          }}
        >
          <div className="relative">
            <span 
              className={`font-bold relative z-10 ${item.isAnimeTerm ? 'anime-term' : 'fire-text'}`}
              style={{
                animationDuration: `${0.8 + item.fireIntensity * 0.5}s`,
                color: item.isAnimeTerm ? '#FF00FF' : '#FFA500',
                textShadow: item.isAnimeTerm 
                  ? `0 0 10px #FF00FF, 0 0 20px #FF00FF, 0 0 30px #FF00FF, 0 0 40px #FF00FF` 
                  : `
                    0 0 ${6 * item.fireIntensity}px #ff9800,
                    0 0 ${12 * item.fireIntensity}px #ff5722,
                    0 0 ${18 * item.fireIntensity}px #f44336,
                    0 0 ${24 * item.fireIntensity}px #e91e63
                  `
              }}
            >
              {item.word}
            </span>
            <div 
              className={`absolute rounded-full inset-0 ${item.isAnimeTerm ? 'anime-glow' : 'fire-glow'}`}
              style={{
                animationDuration: `${0.8 + item.fireIntensity * 0.6}s`,
                filter: item.isAnimeTerm
                  ? `blur(10px) brightness(1.8)` 
                  : `blur(${6 + item.fireIntensity * 4}px) brightness(${1.3 + item.fireIntensity * 0.5})`,
                transform: `scale(${1.3 + item.fireIntensity * 0.6})`,
                background: item.isAnimeTerm
                  ? 'radial-gradient(ellipse at center, rgba(255,0,255,0.8) 0%, rgba(128,0,128,0.6) 50%, rgba(64,0,64,0) 80%)'
                  : 'radial-gradient(ellipse at center, rgba(255,152,0,0.8) 0%, rgba(255,87,34,0.6) 50%, rgba(244,67,54,0) 80%)',
                opacity: item.isAnimeTerm ? 0.9 : 0.95
              }}
            ></div>
            
            {/* Particle trail for all terms - now both anime and regular terms have particles */}
            <div className="particles">
              {[...Array(item.isAnimeTerm ? 8 : 5)].map((_, i) => (
                <div 
                  key={i} 
                  className="particle" 
                  style={{
                    animationDelay: `${i * -0.15}s`,
                    width: `${10 + i * 3}px`,
                    height: `${10 + i * 3}px`,
                    background: item.isAnimeTerm
                      ? (i % 2 === 0 
                          ? 'radial-gradient(circle, rgba(255,0,255,0.8) 0%, rgba(255,0,255,0) 70%)'
                          : 'radial-gradient(circle, rgba(0,255,255,0.8) 0%, rgba(0,255,255,0) 70%)')
                      : (i % 2 === 0
                          ? 'radial-gradient(circle, rgba(255,152,0,0.8) 0%, rgba(255,152,0,0) 70%)'
                          : 'radial-gradient(circle, rgba(255,87,34,0.8) 0%, rgba(255,87,34,0) 70%)')
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(15px, -30px) rotate(8deg); }
          50% { transform: translate(0, -40px) rotate(0deg); }
          75% { transform: translate(-15px, -30px) rotate(-8deg); }
        }
        
        @keyframes float-dramatic {
          0% { transform: translate(0, 0) rotate(-8deg); }
          25% { transform: translate(30px, -60px) rotate(15deg); }
          50% { transform: translate(0, -80px) rotate(0deg); }
          75% { transform: translate(-30px, -60px) rotate(-15deg); }
          100% { transform: translate(0, 0) rotate(8deg); }
        }
        
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
        
        .animate-float-dramatic {
          animation: float-dramatic 12s ease-in-out infinite;
        }
        
        @keyframes flicker {
          0% { opacity: 0.7; transform: scale(0.85); }
          25% { opacity: 1; transform: scale(1.15); }
          50% { opacity: 0.8; transform: scale(0.9); }
          75% { opacity: 0.95; transform: scale(1.1); }
          100% { opacity: 0.7; transform: scale(0.85); }
        }
        
        .anime-term {
          animation: textFlicker 1.5s infinite;
        }
        
        .fire-text {
          animation: fireFlicker 1.8s infinite alternate;
        }
        
        @keyframes fireFlicker {
          0% { opacity: 0.8; transform: scale(0.95); filter: brightness(0.9); }
          25% { opacity: 1; transform: scale(1.05); filter: brightness(1.2); }
          50% { opacity: 0.9; transform: scale(0.98); filter: brightness(1.0); }
          75% { opacity: 1; transform: scale(1.03); filter: brightness(1.1); }
          100% { opacity: 0.95; transform: scale(1.0); filter: brightness(1.05); }
        }
        
        .particles {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          transform: translate(-50%, -50%);
          z-index: -1;
        }
        
        .particle {
          position: absolute;
          top: 50%;
          left: 50%;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: particle 2s linear infinite;
        }
        
        @keyframes particle {
          0% {
            opacity: 0.9;
            transform: translate(-50%, -50%) scale(0.1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(2.5);
          }
        }
        
        @keyframes textFlicker {
          0%, 100% { opacity: 1; text-shadow: 0 0 12px #FF00FF, 0 0 24px #FF00FF, 0 0 36px #FF00FF; }
          25% { opacity: 0.8; text-shadow: 0 0 6px #FF00FF, 0 0 12px #FF00FF; }
          50% { opacity: 1; text-shadow: 0 0 18px #FF00FF, 0 0 36px #FF00FF, 0 0 54px #FF00FF; }
          75% { opacity: 0.9; text-shadow: 0 0 9px #FF00FF, 0 0 18px #FF00FF; }
        }
      `}</style>
    </div>
  );
} 