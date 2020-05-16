import {Mini} from 'gloop/Gloop'
import Game from './hiraganaLearningTool/Game'
import Intro from './hiraganaLearningTool/Intro'


document.addEventListener("DOMContentLoaded", () => {
    const gloop = new Mini(1, "#board", "#buffer")
    
    gloop.mouseInit()
    gloop.addScene("PLAY", Game(gloop))
    // gloop.addScene("INTRO", Intro(gloop, "PLAY"))
    gloop.switchScene("PLAY")
    gloop.start()
});