export function createPositions(skills) {
  const positions = [];
  const spacing = 0.8;

  for (let i = 0; i < skills.length; i++) {
    const x = (Math.random() - 0.5) * 3 * spacing;
    const z = (Math.random() - 0.5) * 3 * spacing;
    const y = 3 + Math.random() * 2;

    positions.push([x, y, z]);
  }
  return positions;
} 