export interface ISearchCities {
   data: City[];
   metadata: Metadata;
}

export interface City {
   id: number;
   wikiDataId: string;
   type: string;
   city: string;
   name: string;
   country: string;
   countryCode: string;
   region: string;
   regionCode: string;
   latitude: number;
   longitude: number;
   population: number;
}

export interface Metadata {
   currentOffset: number;
   totalCount: number;
}

export interface ISearchStatus {
   loading: boolean;
   completed: boolean;
   error: string;
}
