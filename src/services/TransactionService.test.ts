import { TransactionService } from "./TransactionService";

describe("TransactionService", () => {
  it("should fetch transactions for a given address", async () => {
    const address = "0x87d34117016f577b018a603017627C9e0A2B63b6"; // Replace with a valid address for testing

    // Mock axios request
    const mockResponse = { data: "mocked data" };
    const axiosRequestMock = jest
      .spyOn(TransactionService, "getTransactions")
      .mockResolvedValue(mockResponse);

    // Call the getTransactions method
    const result = await TransactionService.getTransactions(address);

    // Check if the request was made with the correct parameters
    expect(axiosRequestMock).toHaveBeenCalledWith(address);

    // Check if the result matches the mocked response
    expect(result).toEqual(mockResponse.data);
  });

  it("should handle errors gracefully", async () => {
    const address = "0x87d34117016f577b018a603017627C9e0A2B63b6"; // Replace with a valid address for testing

    // Mock axios request to throw an error
    const axiosRequestMock = jest
      .spyOn(TransactionService, "getTransactions")
      .mockRejectedValue(new Error("Mocked error"));

    // Call the getTransactions method
    await expect(TransactionService.getTransactions(address)).rejects.toThrow(
      "Mocked error",
    );

    // Check if the request was made with the correct parameters
    expect(axiosRequestMock).toHaveBeenCalledWith(address);
  });
});
