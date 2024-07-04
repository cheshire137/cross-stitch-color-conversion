export interface EmbroideryFlossColor {
  dmcCode: string
  dmcName: string
  hexCode?: string
  jpCoatsOld?: string
  jpCoatsNew?: string
  anchorCode?: string
}

export type SortOption = 'dmcCode' | 'dmcName' | 'jpcOld' | 'anchor' | 'jpcNew'
