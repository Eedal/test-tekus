export interface Subscriber {
  SystemId?: any;
  Area: string;
  PublicId: number;
  CountryCode: string;
  CountryName: string;
  Name: string;
  EndpointsCount: number;
  Email: string;
  JobTitle: string;
  PhoneNumber: string;
  PhoneCode: string;
  PhoneCodeAndNumber: string;
  LastActivityUtc?: any;
  LastActivity?: any;
  LastActivityString?: any;
  SubscriptionDate?: any;
  SubscriptionMethod: number;
  SubscriptionState: number;
  SubscriptionStateDescription: string;
  Topics: any[];
  ValidEmail: boolean;
  Activity: string;
  ConnectionState: number;
  Id: number;
}
export interface SubscriberResponse {
  Count: number;
  Data: Subscriber[];
}


export interface SubscriberBase {
   
  Subscribers : {
    Name: string,
    Email: string,
    CountryCode: string,
    PhoneNumber: string,
    JobTitle: string,
    Area: string,
    Topics: any[]
  }[]
}

export interface SubscriberResponse {
  Count: number;
  Data: Subscriber[];
}
export interface SubscriberSaveResponse {
  Name: string,
  Email: string,
  PhoneNumber: string,
  Id: number
}
