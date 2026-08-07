export interface TravelPackage {
  _id: string;
  title: string;
  description: string;
  availableSlots: number;
  price: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface PackagesResponse {
  success: boolean;
  data: TravelPackage[];
}

export interface BookingResponse {
  success: boolean;
  message: string;
  data: TravelPackage;
}