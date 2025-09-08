import { Game, SliderGame, GameRating, GameDownload } from '@/types/game'

// Slider games for homepage
export const sliderGames: SliderGame[] = [
  {
    title: "Spinnersonic",
    description: "High-speed racing with fidget spinner mechanics",
    image: "https://customer-assets.emergentagent.com/job_voltis-ui-overhaul/artifacts/ev3pv6ww_Group%201244831544.jpg",
    link: "/games/spinnersonic"
  },
  {
    title: "Triangle Chess",
    description: "Revolutionary chess on a triangular board",
    image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/am9wazee_hkvbsxdfxd.png",
    link: "/games/triangle-chess"
  }
]

// Featured games for homepage
export const featuredGames: Game[] = [
  {
    title: "Spinnersonic",
    description: "High-speed racing with fidget spinner mechanics",
    image: "https://customer-assets.emergentagent.com/job_voltis-gaming/artifacts/9pj2qbjo_Frame%202.jpg",
    link: "/games/spinnersonic"
  },
  {
    title: "Triangle Chess", 
    description: "Revolutionary chess on a triangular board",
    image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/am9wazee_hkvbsxdfxd.png",
    link: "/games/triangle-chess"
  },
  {
    title: "Spellcheck",
    description: "Word adventure meets puzzle solving",
    image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/hxtwpsyl_Background.png",
    link: "/games/spellcheck"
  },
  {
    title: "Grindhouse",
    description: "Experimental action adventure",
    image: "https://customer-assets.emergentagent.com/job_gaming-rebrand/artifacts/1p5vhozt_Group%201244831567.jpg",
    link: "/games/grindhouse"
  },
  {
    title: "Creaks",
    description: "Mind-bending puzzle adventure with mysterious creatures",
    image: "https://customer-assets.emergentagent.com/job_gaming-rebrand/artifacts/1p5vhozt_Group%201244831567.jpg",
    link: "/games/creaks"
  },
  {
    title: "Doomlane",
    description: "Fast-paced survival racing", 
    image: "https://customer-assets.emergentagent.com/job_gaming-rebrand/artifacts/1p5vhozt_Group%201244831567.jpg",
    link: "/games/doomlane"
  },
  {
    title: "Tacticx",
    description: "Strategic multiplayer tactics game",
    image: "https://customer-assets.emergentagent.com/job_gaming-rebrand/artifacts/1p5vhozt_Group%201244831567.jpg", 
    link: "/games/tacticx"
  },
  {
    title: "8 Ball Pool",
    description: "Classic billiards with modern twists",
    image: "https://customer-assets.emergentagent.com/job_gaming-rebrand/artifacts/1p5vhozt_Group%201244831567.jpg",
    link: "/games/8-ball-pool"
  },
  {
    title: "Penalty Shootout",
    description: "Intense soccer penalty competition",
    image: "https://customer-assets.emergentagent.com/job_gaming-rebrand/artifacts/1p5vhozt_Group%201244831567.jpg",
    link: "/games/penalty-shootout"
  }
]

// All games for games page
export const allGames: Game[] = [
  {
    title: "Spinnersonic",
    description: "High-speed racing with fidget spinner mechanics",
    image: "https://customer-assets.emergentagent.com/job_voltis-gaming/artifacts/9pj2qbjo_Frame%202.jpg",
    mobileImage: "https://customer-assets.emergentagent.com/job_web-peek/artifacts/t772pvc3_Spinnersonic%20Mobile%20Slider.png",
    link: "/games/spinnersonic",
    category: "Racing",
    controllerSupport: false
  },
  {
    title: "Triangle Chess", 
    description: "Revolutionary chess on a triangular board",
    image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/am9wazee_hkvbsxdfxd.png",
    link: "/games/triangle-chess",
    category: "Strategy",  
    controllerSupport: false
  },
  {
    title: "Spellcheck",
    description: "Word adventure meets puzzle solving", 
    image: "https://customer-assets.emergentagent.com/job_2254775f-056c-475f-8e45-02c39741e786/artifacts/hxtwpsyl_Background.png",
    link: "/games/spellcheck",
    category: "Word",
    controllerSupport: false
  },
  {
    title: "Grindhouse",
    description: "Experimental action adventure",
    image: "https://customer-assets.emergentagent.com/job_gaming-rebrand/artifacts/1p5vhozt_Group%201244831567.jpg",
    link: "/games/grindhouse",
    category: "Action",
    controllerSupport: false
  },
  {
    title: "Creaks",
    description: "Mind-bending puzzle adventure with mysterious creatures",
    image: "https://customer-assets.emergentagent.com/job_gaming-rebrand/artifacts/1p5vhozt_Group%201244831567.jpg",
    link: "/games/creaks",
    category: "Puzzle",
    controllerSupport: false
  },
  {
    title: "Doomlane",
    description: "Fast-paced survival racing",
    image: "https://customer-assets.emergentagent.com/job_gaming-rebrand/artifacts/1p5vhozt_Group%201244831567.jpg",
    mobileImage: "https://customer-assets.emergentagent.com/job_web-peek/artifacts/m7j9nx05_DoomlaneMobileSlider%20%281%29.png",
    link: "/games/doomlane",
    category: "Racing",
    controllerSupport: true
  },
  {
    title: "Tacticx",
    description: "Strategic multiplayer tactics game",
    image: "https://customer-assets.emergentagent.com/job_gaming-rebrand/artifacts/1p5vhozt_Group%201244831567.jpg",
    mobileImage: "https://customer-assets.emergentagent.com/job_web-peek/artifacts/5niylh77_TactixMobileSlider.png",
    link: "/games/tacticx",
    category: "Strategy",
    controllerSupport: false
  },
  {
    title: "8 Ball Pool",
    description: "Classic billiards with modern twists",
    image: "https://customer-assets.emergentagent.com/job_gaming-rebrand/artifacts/1p5vhozt_Group%201244831567.jpg",
    link: "/games/8-ball-pool",
    category: "Sports",
    controllerSupport: false
  },
  {
    title: "Penalty Shootout",
    description: "Intense soccer penalty competition",
    image: "https://customer-assets.emergentagent.com/job_gaming-rebrand/artifacts/1p5vhozt_Group%201244831567.jpg",
    link: "/games/penalty-shootout",
    category: "Sports",
    controllerSupport: false
  }
]

// Game ratings data
export const gameRatings: GameRating = {
  "Spinnersonic": "4.9",
  "Triangle Chess": "4.7", 
  "Spellcheck": "4.4",
  "Grindhouse": "4.6",
  "Creaks": "TBA",
  "Doomlane": "TBA",
  "Tacticx": "TBA",
  "8 Ball Pool": "TBA",
  "Penalty Shootout": "TBA"
}

// Game download counts data
export const gameDownloads: GameDownload = {
  "Spinnersonic": "100K+",
  "Triangle Chess": "50K+", 
  "Spellcheck": "40K+",
  "Grindhouse": "Soon",
  "Creaks": "Soon",
  "Doomlane": "Soon",
  "Tacticx": "Soon",
  "8 Ball Pool": "Soon",
  "Penalty Shootout": "Soon"
}

// Helper functions
export const getGameRating = (title: string): string => {
  return gameRatings[title] || "4.5"
}

export const getDownloadCount = (title: string): string => {
  return gameDownloads[title] || "New"
}

// Categories for filtering
export const categories = ["All", "Racing", "Strategy", "Word", "Action", "Puzzle", "Sports"]