import {Mini} from 'gloop/Gloop'
import Click from 'gloop/eventFragment/Click'

import Cells from 'gloop/displayFragment/Cells'
import Event from 'gloop/Event'
import { Scene } from 'gloop/scene/Scenes'

import SimpleButton from 'gloop/graphicInterface/buttons/Simple'

let cellWidth: number
let cellHeight: number

enum Alphabet {
    HIRAGANA = 0,
    KATAKANA
}

enum ButtonsID {
    HIRAGANA = 0xff,
    KATAKANA
}

let kanaMode = Alphabet.HIRAGANA

let kana = new Map([
        [Alphabet.HIRAGANA, [
                'ん', 'わ', 'ら', 'や', 'ま', 'は', 'な', 'た', 'さ', 'か', 'あ',
                null, null, 'り', null, 'み', 'ひ', 'に', 'ち', 'し', 'き', 'い',
                null, null, 'る', 'ゆ', 'む', 'ふ', 'ぬ', 'つ', 'す', 'く', 'う',
                null, null, 'れ', null, 'め', 'へ', 'ね', 'て', 'せ', 'け', 'え',
                null ,'を', 'ろ', 'よ', 'も', 'ほ', 'の', 'と', 'そ', 'こ', 'お'
        ]],
        [Alphabet.KATAKANA, [
            'ン', 'ワ', 'ラ', 'ヤ', 'マ', 'ハ', 'ナ', 'タ', 'サ', 'カ', 'ア',
            null ,null ,'リ', null ,'ミ', 'ヒ', 'ニ', 'チ', 'シ', 'キ', 'イ',
            null ,null ,'ル', 'ユ', 'ム', 'フ', 'ヌ', 'ツ', 'ス', 'ク', 'ウ',
            null ,null ,'レ', null ,'メ', 'ヘ', 'ネ', 'テ', 'セ', 'ケ', 'エ',
            null ,'ヲ', 'ロ', 'ヨ', 'モ', 'ホ', 'ノ', 'ト', 'ソ', 'コ', 'オ'
        ]],
    ])

const romaji = [
    '', 'w', 'r', 'y', 'm', 'h', 'n', 't', 's', 'k', '-', 
    'a', 'i', 'u', 'e', 'o'
]

let kanaCells: Cell[] = []
let topInfoCells: Cell[] = []
let rightInfoCells: Cell[] = []
let menuCells: Cell[] = []

function onMenuClick(xy: number[]) {
    if ((xy[0] != 9 && xy[0] != 10) || xy[1] != 0) {
        return
    }
    kanaMode = xy[0] == 9 ? Alphabet.HIRAGANA : Alphabet.KATAKANA 
}

function buildMenu() {
    let cell = new Cell(ButtonsID.HIRAGANA)

    cell.x = -cellWidth
    cell.y = 0
    menuCells.push(cell)

    cell = new Cell(ButtonsID.KATAKANA)
    cell.x = -0.01
    cell.y = 0
    menuCells.push(cell)
}

function buildKanaCells(kanaColumns: number, kanaLines: number) {
    Event.on(Event.EventType.CLICK, (cell: Cell) => {
        
    })

    let n = 0
    for (let i = 0; i < (kanaColumns*kanaLines); i++) {
        let cell: Cell
        if (kana.get(kanaMode)[i] == null) {
            continue
        }
        cell = new Cell(n, i)
        cell.x = (i%kanaColumns)
        cell.y = Math.floor(i / kanaColumns)
        n++
        kanaCells.push(cell)
    }
}

function buildTopInfoCells(kanaColumns: number) {
    for (let i = 0; i < kanaColumns; i++) {
        let cell = new Cell(i)
        cell.x = i
        cell.y = 0
        topInfoCells.push(cell)
    }
}

function buildRightInfoCells(kanaColumns: number, kanaLines: number) {
    for (let i = 0; i < kanaLines; i++) {
        let cell = new Cell(kanaColumns + i)
        cell.x = 0
        cell.y = i
        rightInfoCells.push(cell)
    }
}

function drawMenu(T: number, g: Cells) {
    let button = new SimpleButton("wesh alors", 3, 1)
    
    // button.font
    button.display(2, 0, g)
    g.makeBorder(-2, 0, "#DC3023")
    g.writeText('ひ', -2, 0, 20, "Meiryo, Yu Gothic")
    g.makeBorder(-1, 0, "#DC3023")
    g.writeText('カ', -1, 0, 20, "Meiryo, Yu Gothic")
}

function drawHiraganaCells(T: number, g: Cells) {
    for (let i = 0; i < kanaCells.length; i++) {
        let cell = kanaCells[i]
        g.makeBorder(cell.x, cell.y, "#DC3023")
        g.writeText(kana.get(kanaMode)[cell.IDBoard], cell.x, cell.y, 20, "Meiryo, Yu Gothic")
    }
}

function drawTopInfoCells(T: number, g: Cells) {
    for (let i = 0; i < topInfoCells.length; i++) {
        g.writeText(romaji[topInfoCells[i].ID], i, 0, 20, "Meiryo, Yu Gothic")
    }
}

function drawRightInfoCells(T: number, g: Cells) {
    for (let i = 0; i < rightInfoCells.length; i++) {
        g.writeText(romaji[rightInfoCells[i].ID], 0, i, 20, "Meiryo, Yu Gothic")
    }
}

function setWidth(w: number) {
    cellWidth = w
}
function setHeight(h: number) {
    cellHeight = h
}

class Cell {
    isHidden: boolean
    public x: number
    public y: number
    
    constructor(public ID: number, public IDBoard?: number) {
        this.isHidden = true
    }

    getID(): number {
        return this.ID
    }

}

export default function defineScene(gloop: Mini): Scene {
    return (): void => {
        const canvasDimensions: number[] = gloop.getCanvasDimensions()
        const cellW = 50
        const cellH = 50
        const kanaLines = 5
        const kanaColumns = 11
    
    
        setWidth(cellW)
        setHeight(cellH)
        buildMenu()
        buildKanaCells(kanaColumns, kanaLines)
        buildTopInfoCells(kanaColumns)
        buildRightInfoCells(kanaColumns, kanaLines)
    
        let menuFragment = gloop.newCells(0, 0, kanaColumns, 1, cellW, cellH)
    
        menuFragment.display(drawMenu)
        Click.on(menuFragment).do(onMenuClick)
    
        gloop.newCells(0, cellH, kanaColumns, 1, cellW, cellH)
            .display(drawTopInfoCells)
        gloop.newCells(canvasDimensions[0] - cellW, cellH * 2, 1, kanaLines, cellW, cellH)
            .display(drawRightInfoCells)
        gloop.newCells(0, cellH * 2, kanaColumns, kanaLines, cellW, cellH)
            .display(drawHiraganaCells)
    
    }
}