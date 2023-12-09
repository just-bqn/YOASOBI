let expression = "";
let value = "";

function processInput(input) {
    let i, elements;

    if (input === "ac") {
        expression = "";
        value = "";
    }
    else if (input === "c") {
        expression = expression.slice(0, -1);
    }
    else if (input === "=") {
        try {
            value = eval(expression);
        }
        catch (SyntaxError) {
            value = "Syntax Error!";
        }
    }
    else
        expression += input;

    elements = document.getElementsByClassName("calculator-input");
    for (i = 0; i < elements.length; i++) {
        if (expression === "")
            elements[i].innerHTML = "&nbsp;";
        else
            elements[i].innerHTML = expression.replaceAll("*", "&times;").replaceAll("/", "&divide;");
    }

    elements = document.getElementsByClassName("calculator-output");
    for (i = 0; i < elements.length; i++) {
        if (value === "")
            elements[i].innerHTML = "&nbsp;";
        else
            elements[i].innerHTML = value;
    }
}

document.addEventListener("keydown", function(event) {
    if (/^[0-9]|[+\-*\/.=()]$/.test(event.key))
        processInput(event.key);
    else if (event.key === "Enter")
        processInput("=");
    else if (event.key === "Backspace")
        processInput("c");
    else if (event.key === "Delete")
        processInput("ac");
});