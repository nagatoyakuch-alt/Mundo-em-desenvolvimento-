export function recommend(videos: any[]) {
  return videos.sort(() => Math.random() - 0.5)
}