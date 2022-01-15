declare global {
  namespace NodeJS {
    interface ProcessEnv {
      YOUTUBE_API_KEY: string;
    }
  }
}

export { }