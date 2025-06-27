import axios from 'axios';

const baseURL = 'http://localhost:8080';

export interface AnimalDTO {
  id: string;
  nom: string;
  espece: string;
  race: string;
  age?: number;
  thumbnail: string;
  description: string;
}

export async function fetchAnimalsForAdoption(): Promise<AnimalDTO[]> {

  try {
    const response = await axios.get(`${baseURL}/umpa/api/v1/animal/getAnimalsForAdoption`);
   return response.data;
  } catch (error) {
    console.error('Error fetching animals:', error);
    return [];
  }
}
