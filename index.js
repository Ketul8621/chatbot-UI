const chatIcon = document.querySelector("#chat-icon");
const iframe = document.querySelector("iframe");
const close = document.querySelector("#close");

console.log(iframe);
chatIcon.addEventListener("click", () => {
  console.log(iframe);
  iframe.src = "/chat-container.html";
  chatIcon.style.display = "none";
  close.style.display = "block";
  close.style.animation = "animate-chatbot 1.2s 3s 1 forwards";
});

close.addEventListener("click", () => {
  console.log("clicked");
  iframe.src = "";
  chatIcon.style.display = "block";
  close.style.display = "none";
});
