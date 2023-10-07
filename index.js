let text;
text = document.getElementById('pickme').value;

function zero() {
    text += 0;
    document.getElementById('pickme').value += 0
}

function one() {
    text += 1;
    console.log(text);
    document.getElementById('pickme').value += 1
}

function two() {
    text += 2;
    console.log(text);
    document.getElementById('pickme').value += 2
}

function three() {
    text += 3;
    console.log(text);
    document.getElementById('pickme').value += 3
}

function four() {
    text += 4;
    console.log(text);
    document.getElementById('pickme').value += 4
}

function five() {
    text += 5;
    console.log(text);
    document.getElementById('pickme').value += 5
}

function six() {
    text += 6;
    console.log(text);
    document.getElementById('pickme').value += 6
}

function seven() {
    text += 7;
    console.log(text);
    document.getElementById('pickme').value += 7
}

function eight() {
    text += 8;
    console.log(text);
    document.getElementById('pickme').value += 8
}

function nine() {
    text += 9;
    console.log(text);
    document.getElementById('pickme').value += 9
}

function dot() {
    text += '.';
    document.getElementById('pickme').value += '.'
}

function plus() {
    text += '+';
    document.getElementById('pickme').value += '+'
}

function mini() {
    text += '-';
    document.getElementById('pickme').value += '-'
}

function mul() {
    text += '*';
    document.getElementById('pickme').value += 'x'
}

function div() {
    text += '/';
    document.getElementById('pickme').value += '/'
}

function ac() {
    text = '';
    document.getElementById('pickme').value = ''
}

function del() {
    text = text.slice(0,-1)
    document.getElementById('pickme').value = text
}
function openb() {
    text += '(';
    document.getElementById('pickme').value += '('
}
function closeb() {
    text += ')';
    document.getElementById('pickme').value += ')'
}

function checkpn() {
    text = text.replace("++", "+")
    text = text.replace("+-", "-")
    text = text.replace("--", "+")
    text = text.replace("-+", "-")

    text = text.replace("()", "")

}

function calculate() {
    checkpn();
    text = eval(text);
    console.log(text)
    document.getElementById('pickme').value = "";
    document.getElementById('result').value = text;
    text = "";
}