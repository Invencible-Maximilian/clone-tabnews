function status(request, response) {
  response.status(200).json({ chave: "Está tudo correto" });
}

export default status;
