function getHms() {
  let dayList = [
    { day: 0, text: '日' },
    { day: 1, text: '一' },
    { day: 2, text: '二' },
    { day: 3, text: '三' },
    { day: 4, text: '四' },
    { day: 5, text: '五' },
    { day: 6, text: '六' },
  ];
  let year = 0, month = 0, date = 0, day = 0, h = 0, m = 0, s = 0;
  let d = new Date();
  year = d.getFullYear();
  month = d.getMonth() + 1;
  date = d.getDate();
  day = d.getDay();
  h = d.getHours();
  m = d.getMinutes();
  s = d.getSeconds();
  h = h >= 12 ? h - 12 : h;
  return {
    year: year+'',
    month: month < 10 ? '0' + month : month+'',
    date: date < 10 ? '0' + date : date+'',
    day:  dayList.find(item => item.day == day).text,
    h: h,
    hh: h < 10 ? '0' + h : h+'',
    m: m,
    mm: m < 10 ? '0' + m : m+'',
    s: s,
    ss: s < 10 ? '0' + s : s+'',
  };
}
