import axios from "axios";

const baseURL = "http://localhost:8080/umpa/api/v1/eventblog";

export interface EventBlogDTO {
  id?: string;
  title: string;
  description: string;
  date: string;
  location: string;
  imageUrl: string;
}

export async function fetchEvents(): Promise<EventBlogDTO[]> {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
}
