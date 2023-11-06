export const environment = {
  production: false,
  processName: process.env.name ?? 'primary',
  url: process.env.URL ?? 'http://localhost:3000',
  imageUrl: process.env.IMAGE_URL ?? 'http://localhost:3000',
};
