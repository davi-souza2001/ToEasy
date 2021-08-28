const View = {
  render({minutes, seconds}) {
    document.body.innerHTML = `
    <div>
      <p>Próxima parada em: </p>
      <span>${minutes}:${seconds}</span>
    </div>
    `;
  }
}

export { View };