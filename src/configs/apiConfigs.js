export const CONTENT_TYPE_JSON  = 'application/json';
export const TYPE_AUTH          = 'Mobile';

export const IS_DEV             = __DEV__;

const PRODUCTION                = 'https://emonica2.nusatek.id'
const STAGGING                  = 'https://emonica1.nusatek.id'
const APIDEV                    = 'https://emonica2.nusatek.id'

export const BASE_URL           = IS_DEV ? APIDEV : STAGGING
