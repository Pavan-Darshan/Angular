export class task{
    constructor(
        public title:string,
        public desc: string,
        public assignedTo : string,
        public createAt:string,
        public priority: string,
        public status: string,
        public id:string,
    ){

    }
}