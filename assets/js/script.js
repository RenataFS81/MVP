const capturarMic = document.getElementById("capturarMic");
const capturarAba = document.getElementById("capturarAba");
const audioPlayer = document.getElementById("audioPlayer");

capturarMic.addEventListener("click", async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    audioPlayer.srcObject = stream;
    audioPlayer.play();
  } catch (error) {
    console.error("Erro ao capturar microfone:", error);
  }
});

capturarAba.addEventListener("click", async () => {
  try {
    const stream = await navigator.mediaDevices.getDisplayMedia({ audio: true, video: true });
    audioPlayer.srcObject = stream;
    audioPlayer.play();
  } catch (error) {
    console.error("Erro ao capturar aba:", error);
  }
});
