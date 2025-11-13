
export default function Calc(){

    function calculate(): number{
        let a: number = (document.getElementById("a") as HTMLInputElement).value as unknown as number;
        let b: number = (document.getElementById("b") as HTMLInputElement).value as unknown as number;
        let operation: string = (document.getElementById("operation")as HTMLInputElement).value as unknown as string;

        switch(operation){
            case "+": return a + b;
            case "-": return a - b;
            case "*": return a * b;
            case "/": return a / b;
            default : console.log("you are gay ");  
        }
        return 0;
    }

        function returnAnswer(): void{
            let answer: number = calculate();
            (document.getElementById("answer") as HTMLInputElement).textContent = String(answer);
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