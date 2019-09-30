var flag = 0;
var sum = 0;

function fresh()
{
    window.location.href = "update.html"
}
function clea()
{
    sum = 0;
    flag = 0;
    document.getElementById("text").innerHTML = '0';
}

function de()
{
    var num_len = document.getElementById("text").innerHTML.length;
    if(num_len == 1)
    {
        flag = 0;
        sum = 0;
        document.getElementById("text").innerHTML = '0';
        return;
    }
    var str = document.getElementById("text").innerHTML;
    str = str.substr(0,num_len-1);
    document.getElementById("text").innerHTML = str;
}

function display_num(n)
{
    var num1 = document.getElementById(n).innerHTML;
    var num2 = document.getElementById("text").innerHTML;
    if(num2 == '0')
        document.getElementById("text").innerHTML=num1;
    else
    {
        num2 = num2 + num1;
        document.getElementById("text").innerHTML = num2;        
    }
    flag = 1;
}

function display_tool(n)
{
    if(n!='=')
    {
        var str1 = document.getElementById("text").innerHTML;
        var str2 = document.getElementById(n).innerHTML;
        if(str2 == '-' && flag == 0)
            document.getElementById("text").innerHTML = str2;
        else{
            str1 = str1+str2;
            document.getElementById("text").innerHTML = str1;
        }
    }
    else
    {
        var str1 = document.getElementById("text").innerHTML;
        var num_len = str1.length;
        str1 = str1.replace(/π/g, 'Math.PI');
        str1 = str1.replace(/e/g,'Math.E');
        sum = eval(str1);
        document.getElementById("text").innerHTML = String(sum);
        sum = 0;
    }
}
