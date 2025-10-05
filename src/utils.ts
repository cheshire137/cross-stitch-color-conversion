import type {EmbroideryFlossColor, SortOption} from './types'

export const normalizeDmcCode = (dmcCode: string) => {
  return dmcCode.trim().toLowerCase()
}

export const chunkArray = <T>(array: T[], size: number): T[][] => {
  const chunks: T[][] = []
  for (let i = 0; i < array.length; i += size) {
    const chunk = array.slice(i, i + size)
    chunks.push(chunk)
  }
  return chunks
}

const isPositiveInteger = (str: string) => /^\d+$/.test(str)

export function numericishStringCompare(
  a: string | undefined,
  b: string | undefined
) {
  if (a === undefined) return -1
  if (b === undefined) return 1
  if (isPositiveInteger(a) && isPositiveInteger(b)) {
    const aNum = parseInt(a, 10)
    const bNum = parseInt(b, 10)
    if (aNum < bNum) return -1
    return aNum > bNum ? 1 : 0
  }
  const numericPrefixRegex = /^(?<number>\d+)(?<suffix>.*)$/
  const matchesA = a.match(numericPrefixRegex)
  const matchesB = b.match(numericPrefixRegex)
  if (!matchesA) return matchesB ? 1 : a.localeCompare(b)
  if (!matchesB) return -1
  if (matchesA.groups && matchesB.groups) {
    const aNum = parseInt(matchesA.groups.number, 10)
    const bNum = parseInt(matchesB.groups.number, 10)
    if (aNum < bNum) return -1
    if (aNum > bNum) return 1
    return matchesA.groups.suffix.localeCompare(matchesB.groups.suffix)
  }
  return a.localeCompare(b)
}

function cosmoCodeCompare(
  {cosmoCodes: cosmoCodes1}: EmbroideryFlossColor,
  {cosmoCodes: cosmoCodes2}: EmbroideryFlossColor
) {
  return numericishStringCompare(cosmoCodes1?.[0], cosmoCodes2?.[0])
}

const dmcCodeCompare = (
  {dmcCode: dmcCode1}: EmbroideryFlossColor,
  {dmcCode: dmcCode2}: EmbroideryFlossColor
) => {
  return numericishStringCompare(dmcCode1, dmcCode2)
}

const dmcNameCompare = (
  {dmcName: dmcName1}: EmbroideryFlossColor,
  {dmcName: dmcName2}: EmbroideryFlossColor
) => {
  return dmcName1
    .toLocaleLowerCase()
    .localeCompare(dmcName2.toLocaleLowerCase())
}

const anchorCodeCompare = (
  {anchorCode: anchorCode1}: EmbroideryFlossColor,
  {anchorCode: anchorCode2}: EmbroideryFlossColor
) => {
  return numericishStringCompare(anchorCode1, anchorCode2)
}

const jpCoatsOldCompare = (
  {jpCoatsOld: jpCoatsOld1}: EmbroideryFlossColor,
  {jpCoatsOld: jpCoatsOld2}: EmbroideryFlossColor
) => {
  return numericishStringCompare(jpCoatsOld1, jpCoatsOld2)
}

const jpCoatsNewCompare = (
  {jpCoatsNew: jpCoatsNew1}: EmbroideryFlossColor,
  {jpCoatsNew: jpCoatsNew2}: EmbroideryFlossColor
) => {
  return numericishStringCompare(jpCoatsNew1, jpCoatsNew2)
}

export const colorCompareFunction = (sortOption: SortOption) => {
  if (sortOption === 'dmcName') return dmcNameCompare
  if (sortOption === 'jpcOld') return jpCoatsOldCompare
  if (sortOption === 'anchor') return anchorCodeCompare
  if (sortOption === 'jpcNew') return jpCoatsNewCompare
  if (sortOption === 'cosmo') return cosmoCodeCompare
  return dmcCodeCompare
}
