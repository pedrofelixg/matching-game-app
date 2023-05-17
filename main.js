import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css"
import "./src/styles/elements/base.css";

import CardGame from "./src/components/CardGame";
import playerName from "./src/components/PlayerScore";

const $root = document.querySelector("#root");
const $htmlCardGame = CardGame();
const $playerNameInsert = playerName();

// $root.insertAdjacentHTML("beforeend", $htmlCardGame);
$root.insertAdjacentHTML("beforeend", $playerNameInsert);
function insertCard () {
    for (let i = 0; i < 6; i++) {
        $root.insertAdjacentHTML("beforeend", $htmlCardGame);
    }
}

insertCard();