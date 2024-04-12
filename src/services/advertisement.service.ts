import exampleData from "@/assets/example-data/advertisements.json";

interface Advertisement {
  id: number;
  address: string;
  price: number;
  squareMeters: number;
  numberOfBathrooms: number;
  numberOfRooms: number;
  energyEfficiencyClass: string;
  description: string;
  locationDescription: string;
  images: string[];
}

const advertisements: Advertisement[] = exampleData;

export class AdvertisementService {
  static getAdvertisements(): Advertisement[] {
    return advertisements;
  }

  static getAdvertisementById(id: number): Advertisement | undefined {
    return advertisements.find((ad) => ad.id === id);
  }
}
