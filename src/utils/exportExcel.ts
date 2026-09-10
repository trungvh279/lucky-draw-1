import * as XLSX from 'xlsx';
import type { Participant } from '../data/participants';

export interface WinnerExportItem {
  stt: number;
  name: string;
  department: string;
  prizeName: string;
  roundOrValue?: string;
}

export function exportLuckyDraw1ToExcel(
  winners: { participant: Participant; round: number; gift: string }[],
  fileName = 'Ket_Qua_Lucky_Draw_1.xlsx'
) {
  const data = winners.map((w, index) => ({
    'STT': index + 1,
    'Họ và tên': w.participant.name,
    'Phòng ban': w.participant.department,
    'Phần quà': w.gift,
    'Đợt quay': `Đợt ${w.round}`,
  }));

  const worksheet = XLSX.utils.json_to_sheet(data);

  worksheet['!cols'] = [
    { wch: 8 },
    { wch: 30 },
    { wch: 25 },
    { wch: 25 },
    { wch: 15 },
  ];

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Lucky Draw 1');

  XLSX.writeFile(workbook, fileName);
}

export function exportLuckyDraw2ToExcel(
  winners: { prizeLabel: string; prizeValue: string; participant: Participant; prizes: string[] }[],
  fileName = 'Ket_Qua_Lucky_Draw_2.xlsx'
) {
  const data = winners.map((w, index) => ({
    'STT': index + 1,
    'Hạng giải': w.prizeLabel,
    'Giá trị giải thưởng': w.prizeValue,
    'Người trúng thưởng': w.participant.name,
    'Phòng ban': w.participant.department,
    'Chi tiết giải thưởng': w.prizes.join(', '),
  }));

  const worksheet = XLSX.utils.json_to_sheet(data);

  worksheet['!cols'] = [
    { wch: 8 },
    { wch: 15 },
    { wch: 20 },
    { wch: 30 },
    { wch: 25 },
    { wch: 60 },
  ];

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Lucky Draw 2');

  XLSX.writeFile(workbook, fileName);
}
