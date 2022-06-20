export class QuizData{
     questions:string = '';
    options !: string[]  ;
    answer : number = 0;
    id : number = 0;

    constructor(question:string,options:string[],answer:number,id:number)
    {
        this.questions=question;
        this.options=options;
        this.answer=answer;
        this.id=id;
        
    }

}