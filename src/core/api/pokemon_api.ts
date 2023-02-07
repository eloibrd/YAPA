import { AxiosResponse } from "axios";
import baseClient from "./baseClient";

/**
 * Base endpoint url to request, may need to be completed with more details in actual requests
 */
const endpointUrl: String = "/pokedex";

export async function getAllPokemons() {
  try {
    const res: AxiosResponse = await baseClient.get(`${endpointUrl}/1`);
    const result = {
      status: res.status,
      headers: res.headers,
      data: res.data,
    };
  } catch (error) {
    return [];
  }
}
