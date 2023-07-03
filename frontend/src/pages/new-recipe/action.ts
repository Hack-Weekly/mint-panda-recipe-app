import { saveRecipe } from "../../util/api_backend";
import { redirect } from "react-router-dom";

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();

  for (const pair of formData.entries()) {
    console.log(pair)
  }

  return redirect("/");
}