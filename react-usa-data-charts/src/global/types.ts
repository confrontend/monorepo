export type HistoryWeatherType = {
  address: string;
  days: any[];
  latitude: number;
  longitude: number;
  resolvedAddress: string;
};

export interface iHeaderLifeQaulity {
  City: string;
  Quality_of_Life_Index: number;
  Purchasing_Power_Index: number;
  Safety_Index: number;
  Health_Care_Index: number;
  Cost_of_Living_Index: number;
  Property_Price_to_Income_Ratio: number;
  Traffic_Commute_Time_Index: number;
  Pollution_Index: number;
  Climate_Index: number;
}
