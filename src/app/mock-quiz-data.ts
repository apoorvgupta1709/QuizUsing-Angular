import { Quiz } from "./Quiz";
import { QuizData } from "./QuizData2";

export class QuizMockData {

    public static questionss: Quiz[] = [

        {
            "data": new QuizData(" Which of the following option leads to the portability and security of Java?", ["Bytecode is executed by JVM", "The applet makes the Java code secure and portable", "Use of exception handling ", "Dynamic binding between objects"], 0, 2)
        },
        {
            "data": new QuizData(" Which of the following is not a Java features?", ["Dynamic", "Architecture Neutral", "Use of pointers", "Object-oriented"], 2, 3)
        },
        {
            "data": new QuizData(" _____ is used to find and fix bugs in the Java programs.", ["JVM", "JRE", "JDK", "JDB"], 3, 1)
        },
        {
            "data": new QuizData(" What does the expression float a = 35/0 return?", ["0", "Not a Number", "Infinity", "Run Time Exception"], 2, 1)
        },
        {
            "data": new QuizData("In which process, a local variable has the same name as one of the instance variables?", ["Serialization", "Variable Shadowing", "Abstraction", "Multi-Threading"], 1, 1)
        },


    ];


}