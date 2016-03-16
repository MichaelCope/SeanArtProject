/// <reference path="../tsd.d.ts" />
import IDrawing from "./IDrawing";

class IArtProject {
    constructor(public projectId: number,
                public projectName: string,
                public avatarUrl: string,
                public createDate: Date,
                public description: string,
                public drawings: IDrawing[]){}
} 

export {IArtProject as default};