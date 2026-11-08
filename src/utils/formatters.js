export function formatPercent(value) {
  return `${Math.round(value)}%`;
}

export function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}
