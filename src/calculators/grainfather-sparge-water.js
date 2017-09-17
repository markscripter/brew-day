export function GFSpargeWater (lbsOfGrain, finalVolume, mashWater) {
  return ((finalVolume + 1.4) - mashWater) + (lbsOfGrain * 0.1)
}
