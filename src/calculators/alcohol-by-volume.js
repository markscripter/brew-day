/** Alcohol By Volume
 * https://www.brewersfriend.com/2011/06/16/alcohol-by-volume-calculator-updated
 * ABV = (og – fg) * 131.25
 * ABV = (76.08 * (originalGravity-finalGravity) / (1.775-originalGravity)) * (finalGravity / 0.794)
 */
export function AlcoholByVolume (originalGravity = 0, finalGravity = 0) {
  const ABV = (76.08 * (originalGravity-finalGravity) / (1.775-originalGravity)) * (finalGravity / 0.794)
  return ABV.toPrecision(3)
}
