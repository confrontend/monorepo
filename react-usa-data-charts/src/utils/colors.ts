import tinygradient from "tinygradient";

export const getColorRange = (count: number, colors: any[]): any => {
  const ranges: any = [];
  const gradient = tinygradient(colors);

  const gradients = gradient.rgb(count).map((g) => {
    return g.toHex();
  });

  gradients.forEach((color, i) => {
    ranges.push([i, i + 1, "black", `#${gradients[i]}`]);
  });

  return ranges;
};
