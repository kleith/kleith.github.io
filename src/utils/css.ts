/**
 * Create custom borders
 * @param color Hexadecimal color
 * @param lineCap Line type
 * @param borderRadius Border radius
 * @param stroke Line width
 * @param dashArray Array of dash or space
 * @param dashOffset Offset of the first line
 * @returns background-image and border-radius
 */
export function border(
  color: `#${string}`,
  lineCap: "butt" | "round" | "square",
  borderRadius: number,
  stroke: number,
  dashArray: number[],
  dashOffset: number = 0,
) {
  return `background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='${borderRadius}' ry='${borderRadius}' stroke='${encodeURIComponent(
    color,
  )}' stroke-width='${stroke}' stroke-dasharray='${dashArray}' stroke-dashoffset='${dashOffset}' stroke-linecap='${lineCap}'/%3e%3c/svg%3e");
  border-radius: ${borderRadius}px;`;
}

/**
 * Create custom shadow
 * @param thick Shadow thick
 * @param color Hexadecimal color
 * @returns
 */
export function shadow(thick: number, color: `#${string}`) {
  const shadow = [];

  for (let i = 1; i <= thick; i++) {
    shadow.push(`${i}px ${i}px ${color}`);
  }

  return shadow.join(", ");
}
