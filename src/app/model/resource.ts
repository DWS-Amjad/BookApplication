export class Resource {
    constructor(protected _id: number) {}

    public get id() {
        return this._id;
    }
    public set id(value) {
        this._id = value;
    }

    /*public getId() {
        return this._id;
    }

    public setId(value: number) {
        this._id = value;
    }*/

}
