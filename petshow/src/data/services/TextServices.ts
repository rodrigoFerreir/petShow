export const TextServices = {

  limitText(texto: string, limite: number): string {
    if (texto.length > limite) {
      return texto.slice(0, limite) + '...';
    } else {
      return texto;
    }
  }
}