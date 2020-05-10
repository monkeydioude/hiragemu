import {Mini} from 'gloop/Gloop'
import Game from './hiraganaLearningTool/Game'

document.addEventListener("DOMContentLoaded", () => {
    const gloop = new Mini(1, "#board", "#buffer")
    const canvasDimensions = gloop.getCanvasDimensions()
    const cellW = 50
    const cellH = 50
    const kanaLines = 5
    const kanaColumns = 11
    gloop.update((T: number) => {
        
    })


    Game.setWidth(cellW)
    Game.setHeight(cellH)
    Game.buildMenu()
    Game.buildKanaCells(kanaColumns, kanaLines)
    Game.buildTopInfoCells(kanaColumns)
    Game.buildRightInfoCells(kanaColumns, kanaLines)

    gloop.newCells(0, 0, kanaColumns, 1, cellW, cellH)
        .display(Game.drawMenu)
    gloop.newCells(0, cellH, kanaColumns, 1, cellW, cellH)
        .display(Game.drawTopInfoCells)
    gloop.newCells(canvasDimensions.x - cellW, cellH * 2, 1, kanaLines, cellW, cellH)
        .display(Game.drawRightInfoCells)
    gloop.newCells(0, cellH * 2, kanaColumns, kanaLines, cellW, cellH)
        .display(Game.drawHiraganaCells)

    gloop.start()

});