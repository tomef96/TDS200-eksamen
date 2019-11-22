export interface ILocation {
    place_id: number;
    licence: string;
    osm_type: string;
    osm_id: number;
    lat: string;
    lon: string;
    display_name: string;
    address: {
        city_district: string;
        city: string;
        county: string;
        country: string;
        country_code: string;
    };
    boundingbox: Array<string>;
}
