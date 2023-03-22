export function getTimeFromMinutes(minutes) {
  const hours = Math.trunc(minutes/60);
  minutes = minutes % 60;
  if ( hours > 0) {
    return hours + 'ч ' + minutes + 'м';
  } else {
    return minutes + 'м';
  }
};