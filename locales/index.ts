import { makeFlat } from '../lib/jsUtils'
import de_common from './de/common.json'
import en_common from './en/common.json'
import fr_common from './fr/common.json'

export const en = makeFlat(en_common, 'common:')
export const fr = makeFlat(fr_common, 'common:')
export const de = makeFlat(de_common, 'common:')
