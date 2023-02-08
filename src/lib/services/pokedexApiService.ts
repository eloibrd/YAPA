import { AxiosResponse } from "axios";
import BaseApi from "./baseApi";

/**
 * Base endpoint url to request, may need to be completed with more details in actual requests
 */
const ENDPOINT_URL: String = "/pokedex";

class PokedexApi extends BaseApi {
  async getNationalPokedex(): Promise<Array<PokemonEntry>> {
    try {
      const res: AxiosResponse = await this.get(`${ENDPOINT_URL}/1`);
      const result: HttpResponse<Array<PokemonEntry>> = {
        status: res.status,
        data: res.data["pokemon_entries"],
      };
      console.log(result.data);
      return [];
    } catch (error) {
      return [];
    }
  }
}

const PokedexApiService = new PokedexApi();

export default PokedexApiService;
