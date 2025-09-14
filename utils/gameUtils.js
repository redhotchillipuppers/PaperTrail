const choices = [
  { id: 'rock', emoji: '🪨', label: 'Rock' },
  { id: 'paper', emoji: '📄', label: 'Paper' },
  { id: 'scissors', emoji: '✂️', label: 'Scissors' }
];

const getOutcome = (you, him) => {
  if (you === him) return 'tie';
  if (
    (you === 'rock' && him === 'scissors') ||
    (you === 'paper' && him === 'rock') ||
    (you === 'scissors' && him === 'paper')
  ) return 'win';
  return 'lose';
};

export { choices, getOutcome };