export interface listing {
  id: string;
  title: string;
  image: string;
  address: string;
  price: number;
  numOfGuests: number;
  numOfBeds: number;
  numOfBaths: number;
  rating: number;
}

export interface ListingsData {
  listings: listing[];
}

export interface deleteListingData {
  deleteListing: listing;
}

export interface deleteListingVariables {
  id: string;
}
