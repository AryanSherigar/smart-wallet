import axios from "axios";
import { sepolia } from "../models/Chain.ts";
//testing required
export class TransactionService {
  static API_URL = "https://deep-index.moralis.io/api/v2.2";
  static API_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImZjNGYxZmJkLTQ0ZDktNGNjZS05OTBhLTJiMzE0YjcxYTg5OSIsIm9yZ0lkIjoiMzg1MTU3IiwidXNlcklkIjoiMzk1NzYyIiwidHlwZUlkIjoiMWUyYmMwYzgtZjVkZi00ZjlmLWEyMzEtNTU5NDgyNzljZWZiIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MTE2MzUxMDcsImV4cCI6NDg2NzM5NTEwN30.C1hsV77uVq-u9CrvYjtlHcgk6UhuGvilGu-b8PZ6tVM";

  static async getTransactions(address: string) {
    const options = {
      method: "GET",
      url: `${TransactionService.API_URL}/${address}`,
      params: { chain: sepolia.name.toLowerCase() },
      headers: {
        accept: "application/json",
        "X-API-Key": TransactionService.API_KEY,
      },
    };

    const response = await axios.request(options);
    return response;
  }
}
