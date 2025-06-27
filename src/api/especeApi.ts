import axios from "axios";

const baseURL = "http://localhost:8080/umpa/api/v1/especes";

export interface EspeceDTO {
  id: string;
  nom: string;
}

export async function fetchEspeces(): Promise<EspeceDTO[]> {
  try {
    const response = await axios.get(`${baseURL}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching especes:", error);
    return [];
  }
}
