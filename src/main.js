import { getRandomMinMax, styleLog } from "./utils";

function handleBodyClick(e) {
  styleLog("clicked body", "color: #2124ff");

  let randomNumber = getRandomMinMax(10, 89);
  styleLog(`난수: ${randomNumber}`, "color: #4caf51");
}

document.addEventListener("click", handleBodyClick);
