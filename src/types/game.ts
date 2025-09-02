export interface Game {
  title: string
  description: string
  image: string
  link: string
  category?: string
  controllerSupport?: boolean
  storeLinks?: {
    googlePlay?: string
    appStore?: string
  }
}

export interface SliderGame {
  title: string
  description: string
  image: string
  link: string
  storeLinks?: {
    googlePlay?: string
    appStore?: string
  }
}

export interface GameRating {
  [key: string]: string
}

export interface GameDownload {
  [key: string]: string
}