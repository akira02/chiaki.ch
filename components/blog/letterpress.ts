import type { LetterpressOptions } from 'kappan'

/**
 * blog 的排版設定，列表與內頁共用。
 *
 * 正文跟全站一樣走 justfont 的信黑體。alias 'xingothic-tc' 由 justfont-init.js 掛好
 * W3 / W6 / W8 三個字重，這裡的 400 / 600 / 700 會分別落到 W3 / W6 / W8。
 * 不掛 punctFont：那套是給日星宋體補直排標點用的，黑體橫排用自己的標點就好。
 */
export const BLOG_OPTIONS: LetterpressOptions = {
  paper: '#ffffff',
  ink: '#16130f',
  inkMuted: '#6d6558',
  red: '#a2372a',
  typeFamily: "'xingothic-tc', 'Noto Sans TC', 'PingFang TC', sans-serif",
  latinFamily: "'Courier Prime', 'Courier New', ui-monospace, monospace",
  pitch: '1.9em',
  punctFont: null,
}

/** 全站的信黑體不用 per-face class，justfont 直接掃 alias；這裡也跟著不掛。 */
export const SHEET_CLASS = 'lp'

/** 標籤與程式碼用的等寬體。@import 必須排在整份樣式最前面。 */
export const blogLetterpressCss = `
@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400&display=swap');
`
