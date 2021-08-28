const View = {
  render({minutes, seconds}) {
    document.body.innerHTML = `
    <div class="content">
      <p>Próxima parada em: </p>
      <span>${minutes}:${seconds}</span>
    </div>
    `;
  }
}

export { View };