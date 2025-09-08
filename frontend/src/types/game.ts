export interface Game {
  title: string
  description: string
  image: string
  mobileImage?: string
  link: string
  category?: string
  controllerSupport?: boolean
}

export interface SliderGame {
  title: string
  description: string
  image: string
  link: string
}

export interface GameRating {
  [key: string]: string
}

export interface GameDownload {
  [key: string]: string
}