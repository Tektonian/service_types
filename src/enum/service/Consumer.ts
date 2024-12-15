/**
 * Consumer type
 */
export const CONSUMER_ENUM = {
    NORMAL: "normal",   // normal consumer identity is generated by default when user verified email
    CORP: "corp",       // corporation consumer
    ORGN: "orgn",       // organization consumer
} as const

export type CONSUMER_ENUM = typeof CONSUMER_ENUM[keyof typeof CONSUMER_ENUM]

