import { getRandomMinMax, styleLog } from "./utils/index.js";

function handleBodyClick(e) {
  styleLog("clicked body", "color: #2124ff");

  let randomNumber = getRandomMinMax(10, 89);
  styleLog(`난수: ${randomNumber}`, "color: #4caf51");
}

document.body.addEventListener("click", handleBodyClick);
