import { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import LuckyDraw1, { type ConfirmedWinnerRecord } from './components/LuckyDraw1';
import LuckyDraw2, { type PrizeKey } from './components/LuckyDraw2';
import type { Participant } from './data/participants';

type Page = 'home' | 'draw1' | 'draw2';

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const [ld1WinnerHistory, setLd1WinnerHistory] = useState<ConfirmedWinnerRecord[]>([]);
  const [ld1Completed, setLd1Completed] = useState<boolean>(false);
  const [ld2WinnerHistory, setLd2WinnerHistory] = useState<Record<PrizeKey, Participant | null>>({
    third: null,
    second: null,
    first: null,
  });

  const ld1WinnerIds = ld1WinnerHistory.map(w => w.participant.id);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.key === 'f' || e.key === 'F' || e.code === 'KeyF') {
        e.preventDefault();
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen().catch(() => {});
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      {page === 'home' && (
        <HomePage
          onDraw1={() => setPage('draw1')}
          onDraw2={() => setPage('draw2')}
        />
      )}
      {page === 'draw1' && (
        <LuckyDraw1
          onBack={() => setPage('home')}
          onGoToDraw2={() => setPage('draw2')}
          confirmedHistory={ld1WinnerHistory}
          isCompleted={ld1Completed}
          onHistoryUpdate={(history) => setLd1WinnerHistory(history)}
          onComplete={() => setLd1Completed(true)}
        />
      )}
      {page === 'draw2' && (
        <LuckyDraw2
          onBack={() => setPage('home')}
          excludedIds={ld1WinnerIds}
          confirmedWinnersHistory={ld2WinnerHistory}
          onWinnersUpdate={(winners) => setLd2WinnerHistory(winners)}
        />
      )}
    </div>
  );
}
