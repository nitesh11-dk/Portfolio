export function createPositions(skills) {
  const positions = [];
  const spacing = 0.8;
  const cubesPerRow = 4;
  const startHeight = 0.2;

  for (let i = 0; i < skills.length; i++) {
    const row = Math.floor(i / cubesPerRow);
    const col = i % cubesPerRow;
    
    const x = (col - (cubesPerRow - 1) / 2) * spacing;
    const y = startHeight + row * spacing -1;
    const z = 0;

    positions.push([x, y, z]);
  }
  return positions;
}