export const environment = {
  production: true,
  processName: process.env.name ?? 'primary',
  url: process.env.URL ?? 'http://localhost:3000',
  sapUrl: process.env.SAP_URL ?? 'http://localhost:3000',
  sapCO11NPath: process.env.SAP_CO11N_PATH ?? '/api/sap/mocker/perform-co11n',
  sapUsername: process.env.SAP_USERNAME,
  sapPassword: process.env.SAP_PASSWORD,
  imageUrl: process.env.IMAGE_URL ?? 'http://localhost:3000',
  oldImageUrl: process.env.OLD_IMAGE_URL ?? 'http://localhost:3000',
  hrFilesPath: process.env.HR_FILES_PATH ?? '/hrms'
};
