import database from "../../../../lib/database";

async function status(request, response) {
  const result = await database.query({ text: "SELECT 1 + 1;" });
  console.log(result);
  response.status(200).json({ chave: "Está tudo correto" });
}

export default status;
