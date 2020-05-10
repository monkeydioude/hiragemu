import { Fragment } from '../../../gloop/displayFragment/Fragment'
import Cells from '../../../gloop/displayFragment/Cells'

let cellWidth: number
let cellHeight: number

const HIRAGANA: number = 0x0 
const KATAKANA: number = 0x1 
let kanaMode = HIRAGANA

type Kana = {
    [key: number]: string[]
}

let kana: Kana = {}

kana[HIRAGANA] = [
    'ん', 'わ', 'ら', 'や', 'ま', 'は', 'な', 'た', 'さ', 'か', 'あ',
    null, null, 'り', null, 'み', 'ひ', 'に', 'ち', 'し', 'き', 'い',
    null, null, 'る', 'ゆ', 'む', 'ふ', 'ぬ', 'つ', 'す', 'く', 'う',
    null, null, 'れ', null, 'め', 'へ', 'ね', 'て', 'せ', 'け', 'え',
    null ,'を', 'ろ', 'よ', 'も', 'ほ', 'の', 'と', 'そ', 'こ', 'お'
]
kana[KATAKANA] = [
    'ン', 'ワ', 'ラ', 'ヤ', 'マ', 'ハ', 'ナ', 'タ', 'サ', 'カ', 'ア',
    null ,null ,'リ', null ,'ミ', 'ヒ', 'ニ', 'チ', 'シ', 'キ', 'イ',
    null ,null ,'ル', 'ユ', 'ム', 'フ', 'ヌ', 'ツ', 'ス', 'ク', 'ウ',
    null ,null ,'レ', null ,'メ', 'ヘ', 'ネ', 'テ', 'セ', 'ケ', 'エ',
    null ,'ヲ', 'ロ', 'ヨ', 'モ', 'ホ', 'ノ', 'ト', 'ソ', 'コ', 'オ'
]

const romaji = [
    '', 'w', 'r', 'y', 'm', 'h', 'n', 't', 's', 'k', '-', 
    'a', 'i', 'u', 'e', 'o'
]

let kanaCells: Cell[] = []
let topInfoCells: Cell[] = []
let rightInfoCells: Cell[] = []
let menuCells: Cell[] = []


function buildKanaCells(kanaColumns: number, kanaLines: number) {
    let n = 0
    for (let i = 0; i < (kanaColumns*kanaLines); i++) {
        let cell: Cell
        if (kana[kanaMode][i] == null) {
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

function buildMenu() {
    let cell = new Cell(0)

    cell.x = -cellWidth
    cell.y = 0
    menuCells.push(cell)

    cell = new Cell(1)
    cell.x = -0.01
    cell.y = 0
    menuCells.push(cell)
}

function drawMenu(T: number, g: Cells) {
    g.makeBorder(-2, 0, "#DC3023")
    g.writeText('ひ', -2, 0, 20, "Meiryo, Yu Gothic")
    g.makeBorder(-1, 0, "#DC3023")
    g.writeText('カ', -1, 0, 20, "Meiryo, Yu Gothic")
}

function drawHiraganaCells(T: number, g: Cells) {
    for (let i = 0; i < kanaCells.length; i++) {
        let cell = kanaCells[i]
        g.makeBorder(cell.x, cell.y, "#DC3023")
        g.writeText(kana[kanaMode][cell.IDBoard], cell.x, cell.y, 20, "Meiryo, Yu Gothic")
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

function writeCell(text:string, size: number, font: string, cell: Cell, f: Fragment) {
    f.writeText(text, (cell.x*cellWidth) + (cellWidth/2), (cell.y*cellHeight) + (cellHeight/2), size, font)
}

class Cell {
    isHidden: boolean
    public x: number
    public y: number
    
    constructor(public ID: number, public IDBoard?: number) {
        this.isHidden = true
    }

}

export default {
    drawHiraganaCells: drawHiraganaCells,
    drawTopInfoCells: drawTopInfoCells,
    drawRightInfoCells: drawRightInfoCells,
    drawMenu: drawMenu,
    setWidth: setWidth,
    setHeight: setHeight,
    buildMenu: buildMenu,
    buildTopInfoCells: buildTopInfoCells,
    buildRightInfoCells: buildRightInfoCells,
    buildKanaCells: buildKanaCells
}