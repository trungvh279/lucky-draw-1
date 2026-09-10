import { useEffect } from 'react';
import logoImg from '../imports/logo.png';
import logoMecImg from '../imports/logo-mec.png';

interface HomePageProps {
  onDraw1: () => void;
  onDraw2: () => void;
}

export default function HomePage({ onDraw1, onDraw2 }: HomePageProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '1' || e.code === 'Digit1' || e.code === 'Numpad1') {
        onDraw1();
      } else if (e.key === '2' || e.code === 'Digit2' || e.code === 'Numpad2') {
        onDraw2();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onDraw1, onDraw2]);

  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(201,162,39,0.08) 0%, transparent 65%), ' +
          'radial-gradient(ellipse 100% 80% at 80% 100%, rgba(15,40,90,0.4) 0%, transparent 60%), ' +
          'radial-gradient(ellipse 100% 80% at 20% 100%, rgba(15,40,90,0.4) 0%, transparent 60%)',
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: (i % 3) + 1 + 'px',
              height: (i % 3) + 1 + 'px',
              left: ((i * 37) % 100) + '%',
              top: ((i * 53) % 100) + '%',
              opacity: ((i % 5) + 2) * 0.1,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center" style={{ gap: '1.5625vw' }}>
        <div className="flex flex-col items-center">
          <img
            src={logoMecImg}
            alt="Mercedes-Benz"
            style={{
              height: '4.6875vw',
              objectFit: 'contain',
              marginBottom: '1.171875vw',
              filter: 'drop-shadow(0 0 0.9765vw rgba(255,255,255,0.35))',
            }}
          />

          <img
            src={logoImg}
            alt="Lucky Draw"
            style={{
              height: '4.6875vw',
              objectFit: 'contain',
              marginBottom: '1.171875vw',
              filter: 'drop-shadow(0 0 1.367vw rgba(201,162,39,0.5))',
            }}
          />
          <p
            style={{
              fontFamily: "'MBCorpoSTextOfcVI', sans-serif",
              fontSize: '1.40625vw',
              color: '#fff5d4',
              letterSpacing: '0.04em',
              fontWeight: 400,
              textShadow: '0 0.078vw 0.39vw rgba(0,0,0,0.6), 0 0 0.586vw rgba(255,245,212,0.2)',
            }}
          >
            Bộ sưu tập và phụ kiện Mercedes-Benz 140 năm
          </p>
        </div>

        <div className="flex items-center" style={{ gap: '3.75vw', marginTop: '0.625vw' }}>
          <div className="flex flex-col items-center" style={{ gap: '0.9375vw' }}>
            <button
              onClick={onDraw1}
              className="relative group cursor-pointer"
              style={{ width: '7.8125vw', height: '7.8125vw' }}
            >
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  border: '0.078vw solid rgba(201,162,39,0.5)',
                  boxShadow: '0 0 1.171875vw rgba(201,162,39,0.2)',
                  transition: 'all 0.3s ease',
                }}
              />
              <div
                className="absolute rounded-full flex flex-col items-center justify-center backdrop-blur-md"
                style={{
                  inset: '0.46875vw',
                  background: 'linear-gradient(135deg, rgba(13,30,61,0.85) 0%, rgba(26,48,96,0.85) 50%, rgba(13,30,61,0.85) 100%)',
                  border: '0.0586vw solid rgba(201,162,39,0.7)',
                  transition: 'all 0.3s ease',
                }}
              >
                <span
                  className="text-gold-gradient"
                  style={{
                    fontFamily: "'MBCorpoATitleCondOfcVI', sans-serif",
                    fontSize: '2.8125vw',
                    fontWeight: 900,
                    lineHeight: 1,
                  }}
                >
                  1
                </span>
              </div>
              <div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
                style={{
                  background: 'radial-gradient(circle, rgba(201,162,39,0.15) 0%, transparent 70%)',
                  boxShadow: '0 0 2.34375vw rgba(201,162,39,0.4)',
                  transition: 'all 0.3s ease',
                }}
              />
            </button>
            <p
              onClick={onDraw1}
              className="whitespace-nowrap cursor-pointer transition-colors duration-200 hover:text-[#f0d060]"
              style={{
                fontFamily: "'MBCorpoATitleOfcVI', sans-serif",
                fontSize: '1.3671875vw',
                fontWeight: 700,
                color: 'rgba(201,162,39,0.95)',
                letterSpacing: '0.12em',
                textShadow: '0 0.078vw 0.39vw rgba(0,0,0,0.6)',
              }}
            >
              LUCKY DRAW 1
            </p>
          </div>

          <div
            style={{
              width: '0.039vw',
              height: '7.03125vw',
              background: 'linear-gradient(180deg, transparent, rgba(201,162,39,0.5), transparent)',
            }}
          />

          <div className="flex flex-col items-center" style={{ gap: '0.9375vw' }}>
            <button
              onClick={onDraw2}
              className="relative group cursor-pointer"
              style={{ width: '7.8125vw', height: '7.8125vw' }}
            >
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  border: '0.078vw solid rgba(201,162,39,0.5)',
                  boxShadow: '0 0 1.171875vw rgba(201,162,39,0.2)',
                  transition: 'all 0.3s ease',
                }}
              />
              <div
                className="absolute rounded-full flex flex-col items-center justify-center backdrop-blur-md"
                style={{
                  inset: '0.46875vw',
                  background: 'linear-gradient(135deg, rgba(13,30,61,0.85) 0%, rgba(26,48,96,0.85) 50%, rgba(13,30,61,0.85) 100%)',
                  border: '0.0586vw solid rgba(201,162,39,0.7)',
                  transition: 'all 0.3s ease',
                }}
              >
                <span
                  className="text-gold-gradient"
                  style={{
                    fontFamily: "'MBCorpoATitleCondOfcVI', sans-serif",
                    fontSize: '2.8125vw',
                    fontWeight: 900,
                    lineHeight: 1,
                  }}
                >
                  2
                </span>
              </div>
              <div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
                style={{
                  background: 'radial-gradient(circle, rgba(201,162,39,0.15) 0%, transparent 70%)',
                  boxShadow: '0 0 2.34375vw rgba(201,162,39,0.4)',
                  transition: 'all 0.3s ease',
                }}
              />
            </button>
            <p
              onClick={onDraw2}
              className="whitespace-nowrap cursor-pointer transition-colors duration-200 hover:text-[#f0d060]"
              style={{
                fontFamily: "'MBCorpoATitleOfcVI', sans-serif",
                fontSize: '1.3671875vw',
                fontWeight: 700,
                color: 'rgba(201,162,39,0.95)',
                letterSpacing: '0.12em',
                textShadow: '0 0.078vw 0.39vw rgba(0,0,0,0.6)',
              }}
            >
              LUCKY DRAW 2
            </p>
          </div>
        </div>
      </div>

      <div
        className="absolute left-1/2 -translate-x-1/2 flex items-center"
        style={{ bottom: '1.25vw', gap: '0.625vw', opacity: 0.4 }}
      >
        <div style={{ width: '4.6875vw', height: '0.039vw', background: 'linear-gradient(90deg, transparent, #c9a227)' }} />
        <div
          style={{
            width: '0.234375vw',
            height: '0.234375vw',
            borderRadius: '50%',
            background: '#c9a227',
          }}
        />
        <div style={{ width: '4.6875vw', height: '0.039vw', background: 'linear-gradient(90deg, #c9a227, transparent)' }} />
      </div>
    </div>
  );
}
