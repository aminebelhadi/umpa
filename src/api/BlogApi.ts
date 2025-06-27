import axios from "axios";

const baseURL = "http://localhost:8080/umpa/api/v1/blog";

export interface BlogPostDTO {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  imageUrl: string;
  featured: boolean;
}

export async function fetchBlogs(): Promise<BlogPostDTO[]> {
  try {
    const response = await axios.get(`${baseURL}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}
