/** International bittering units
 * https://www.brewersfriend.com/ibu-calculator/
 *
 */
export function InternationalBitteringUnits (originalGravity = 0, finalGravity = 0) {
  const ABV = (76.08 * (originalGravity-finalGravity) / (1.775-originalGravity)) * (finalGravity / 0.794)
  return ABV.toPrecision(3)
}
