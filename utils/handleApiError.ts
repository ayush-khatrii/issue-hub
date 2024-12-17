export async function handleApiError(response: Response) {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "An unexpected error occurred.");
  }

  return response.json();
}
