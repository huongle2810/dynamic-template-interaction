export default function hexToHSL(hex: string): {
  h: number;
  s: number;
  l: number;
} {
  // Remove the hash if it exists
  hex = hex.replace("#", "");

  // Convert hexadecimal to RGB
  const r: number = parseInt(hex.substring(0, 2), 16) / 255;
  const g: number = parseInt(hex.substring(2, 4), 16) / 255;
  const b: number = parseInt(hex.substring(4, 6), 16) / 255;

  // Find the maximum and minimum values of R, G, B
  const max: number = Math.max(r, g, b);
  const min: number = Math.min(r, g, b);

  // Calculate the lightness
  const l: number = (max + min) / 2;

  let h: number, s: number;

  // If the maximum and minimum values are equal, it's a shade of gray
  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d: number = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        throw new Error("Unexpected max value");
    }

    h /= 6;
  }

  // Convert HSL values to degrees and percentages
  return { h: h * 360, s: s * 100, l: l * 100 };
}
