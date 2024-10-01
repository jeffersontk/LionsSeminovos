export const carBrands: string[] = ['Chevrolet', 'Fiat', 'Ford', 'Honda', 'Hyundai', 'Jeep', 'Nissan', 'Renault', 'Toyota', 'Volkswagen'];

export const carModels: { [key: string]: string[] } = {
  'Chevrolet': ['Onix', 'Prisma', 'Cruze', 'S10', 'Tracker'],
  'Fiat': ['Uno', 'Palio', 'Strada', 'Toro', 'Argo'],
  'Ford': ['Ka', 'Fiesta', 'EcoSport', 'Ranger', 'Fusion'],
  'Honda': ['Civic', 'Fit', 'HR-V', 'City', 'CR-V'],
  'Hyundai': ['HB20', 'Creta', 'Tucson', 'Santa Fe', 'Elantra'],
  'Jeep': ['Renegade', 'Compass', 'Cherokee', 'Wrangler'],
  'Nissan': ['March', 'Versa', 'Kicks', 'Frontier', 'Sentra'],
  'Renault': ['Kwid', 'Sandero', 'Duster', 'Logan', 'Captur'],
  'Toyota': ['Corolla', 'Etios', 'Hilux', 'Yaris', 'RAV4'],
  'Volkswagen': ['Gol', 'Polo', 'Virtus', 'T-Cross', 'Saveiro']
};

export const carYears: number[] = Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i);
