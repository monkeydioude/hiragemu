import { Mini } from "gloop/Gloop";
import ScenesHandler, { Scene } from "gloop/scene/Scenes";
import { Fragment } from "../../../gloop/displayFragment/Fragment";

export default function defineScene(gloop: Mini, nextSceneName: string): Scene {
    return (scenes: ScenesHandler): void => {
        const canvasDimensions: number[] = gloop.getCanvasDimensions()

        gloop
        .newArea((canvasDimensions[0] / 2) - 100, (canvasDimensions[1] / 2) - 50, 50, 50)
        .display((T: number, f: Fragment) => {
            f.writeText("Hiragemu", 0, 25, 45, "Meiryo, Yu Gothic", "red")
            f.writeText("ヒラゲム", 10, 75, 45, "Meiryo, Yu Gothic")
        })

        setTimeout(()=> {
            scenes.switch(nextSceneName)
        }, 3000)
    }
}