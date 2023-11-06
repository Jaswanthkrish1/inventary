export const environment = {
  production: true,
  processName: process.env.name ?? 'primary',
  url: process.env.URL ?? 'http://localhost:3000',
  imageUrl: process.env.IMAGE_URL ?? 'http://localhost:3000',
  oldImageUrl: process.env.OLD_IMAGE_URL ?? 'http://localhost:3000',
};
