export function createPositions(skills) {
  const positions = [];
  const spacing = 0.82;
  const cubesPerRow = 4;
  const startHeight = 1.5;
  const rowOffset = (cubesPerRow - 1) / 2;

  for (let i = 0; i < skills.length; i++) {
    positions.push([
      ((i % cubesPerRow) - rowOffset) * spacing,
      startHeight + Math.floor(i / cubesPerRow) * spacing - 1,
      0
    ]);
  }
  return positions;
}