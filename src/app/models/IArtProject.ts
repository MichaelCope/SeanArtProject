/// <reference path="../tsd.d.ts" />

class IArtProject {
    constructor(public projectId: number,
                public projectName: string,
                public createDate: Date,
                public imgUrls: string[]){}
} 

export {IArtProject as default};