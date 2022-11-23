export function getAssetsUrl(imageUrl) {
  return new URL(`../assets/img/${imageUrl}`, import.meta.url).href
}