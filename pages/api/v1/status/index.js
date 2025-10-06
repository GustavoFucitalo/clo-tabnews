function status(request, response) {
  response.status(200).json({ chave: "são bom demais" });
}

export default status;
