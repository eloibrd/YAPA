import { AxiosResponse } from "axios";
import BaseApi from "../api-client/baseApi";
import PokemonEntryAdapter from "../utils/pokemonEntryAdapter";

/**
 * Base endpoint url to request, may need to be completed with more details in actual requests
 */
const ENDPOINT_URL: String = "/pokedex";

class PokedexApi extends BaseApi {
  async getNationalPokedex(): Promise<Array<PokemonEntry>> {
    try {
      const res: AxiosResponse = await this.get(`${ENDPOINT_URL}/1`);
      let pokemonEntryList: PokemonEntry[] = [];
      res.data["pokemon_entries"].forEach((element: any) => {
        pokemonEntryList.push(
          new PokemonEntryAdapter(element).getWrappedPokemonEntry()
        );
      });
      const result: HttpResponse<Array<PokemonEntry>> = {
        status: res.status,
        data: pokemonEntryList,
      };
      return result.data;
    } catch (error) {
      return [];
    }
  }
}

const PokedexApiService = new PokedexApi();

export default PokedexApiService;
