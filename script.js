const btnAceitar = document.getElementById("aceitar");
const btnResponder = document.getElementById("responder");
const btnBaixar = document.getElementById("baixar");
const heartsContainer = document.getElementById("hearts");
const mensagem = document.getElementById("mensagem").innerText;
const nome = document.getElementById("nome").innerText;

btnAceitar.addEventListener("click", () => {
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤";
    heart.style.left = 50 + (Math.random() - 0.5) * 80 + "%";
    heart.style.top = "60%";
    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.style.transform = `translateY(-${100 + Math.random() * 250}px) translateX(${(Math.random() - 0.5) * 100}px) rotate(${Math.random() * 60 - 30}deg)`;
      heart.style.opacity = "0";
    }, 50);

    setTimeout(() => heart.remove(), 3000);
  }
});

btnResponder.addEventListener("click", () => {
  alert("Te amo ❤️");
});

btnBaixar.addEventListener("click", () => {
  const html = `<!doctype html><html><head><meta charset='utf-8'><title>Para ${nome}</title></head><body>${mensagem.replace(/\n/g,"<br>")}</body></html>`;
  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `Declaracao-para-${nome}.html`;
  a.click();
  URL.revokeObjectURL(url);
});
