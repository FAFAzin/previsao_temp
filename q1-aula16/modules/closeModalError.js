export default function closeModalError() {
  // Busca o elemento com o id background-modal-error
  const backgroundModalError = document.getElementById(
    'background-modal-error'
  );

  // Verifica se o elemento existe
  if (backgroundModalError) {
    // Se existir, remove-o do documento
    backgroundModalError.parentNode.removeChild(backgroundModalError);
  }
}
