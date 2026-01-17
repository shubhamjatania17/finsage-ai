export function calculateXP({ lessonCompleted, quizPassed, streak }) {
  let xp = 0;
  if (lessonCompleted) xp += 50;
  if (quizPassed) xp += 30;
  if (streak) xp += 20;
  return xp;
}
function isSameDay(date1, date2) {
  return date1.toDateString() === date2.toDateString();
}
