
export default function Calc(){

    function calculate(): number{
        let a: number = Number((document.getElementById("a") as HTMLInputElement).value);
        let b: number = Number((document.getElementById("b") as HTMLInputElement).value);
        let operation: string = (document.getElementById("operation")as HTMLInputElement).value as string;

        switch(operation){
            case "+": return a + b;
            case "-": return a - b;
            case "*": return a * b;
            case "/": return a / b;
            default : return 1;
        }
    }

        function returnAnswer(): void{
            let answer: number = calculate();
            (document.getElementById("answer") as HTMLHeadingElement).textContent = String(answer);
        }

    return(
        <>
        <div>
            <input id="a" type="number"/>
            <input id="b" type="number"/>
            <input id="operation" type="text"/>
            <h2 id = "answer"></h2>

            <button onClick={returnAnswer}/>
        </div>
        </>
    )
}