import type { LetterpressOptions } from 'kappan'

/**
 * blog 的排版設定，列表與內頁共用。
 *
 * 正文刻意不走 justfont：動態子集每個字型一次只收約 1300 字元（loader 還會把字重複
 * 算兩次），一篇長文就超限、整批請求被退回，連導覽列的信黑體都會一起掉。所以字型
 * 堆疊裡不放 'xingothic-tc'，頁面根節點再掛 data-jf-skip 讓 <main> 不被 loader 掃到。
 * 不掛 punctFont：那套是給日星宋體補直排標點用的，黑體橫排用自己的標點就好。
 */
export const BLOG_OPTIONS: LetterpressOptions = {
  paper: '#ffffff',
  ink: '#16130f',
  inkMuted: '#6d6558',
  red: '#a2372a',
  typeFamily: "'Noto Sans TC', 'PingFang TC', sans-serif",
  latinFamily: "'Courier Prime', 'Courier New', ui-monospace, monospace",
  pitch: '1.9em',
  punctFont: null,
}

/** 不掛 justfont 的 per-face class：blog 不用 webfont。 */
export const SHEET_CLASS = 'lp'

/** 標籤與程式碼用的等寬體。@import 必須排在整份樣式最前面。 */
export const blogLetterpressCss = `
@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400&display=swap');
`
