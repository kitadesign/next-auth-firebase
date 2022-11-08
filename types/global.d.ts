export type GoogleTagManagerId = `GTM-${string}`

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      FIREBASE_PRIVATE_KEY: string
    }
  }
}
