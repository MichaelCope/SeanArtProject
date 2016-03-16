/// <reference path="../tsd.d.ts" />

class IArtProject {
    constructor(public projectId: number,
                public projectName: string,
                public avatarUrl: string,
                public createDate: Date,
                public description: string,
                public imgUrls: string[]){}
} 

export {IArtProject as default};