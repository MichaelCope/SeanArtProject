/// <reference path="../tsd.d.ts" />

class DrawingCard {
  constructor(public fileName: string,
              public creationDate: Date,
              public title: string,
              public description?: string,
              public footer?: string
  ){};
}

export {DrawingCard as default};
