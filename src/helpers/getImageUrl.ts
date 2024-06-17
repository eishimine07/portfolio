export default function getImageUrl(imageName: string): string {
  return `${import.meta.env.BASE_URL}/${imageName}`
}
