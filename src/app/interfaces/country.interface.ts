export interface Country {
  Code: string;
  Name: string;
  PhoneCode: string;
}

export interface CountryResponse {
  Count: number;
  Data: Country[];
}