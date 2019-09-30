var flag = 0;
var sum = 0;

function fresh()
{
    window.location.href = "update.html"
}
function clea()
{
    sum = 0;
    document.getElementById("text").innerHTML = '0';
}

function de()
{
    var num_len = document.getElementById("text").innerHTML.length;
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
}

function display_tool(n)
{
    if(n!='=')
    {
        switch(n)
        {
            case "+":flag = 1;
            break;
            case "-":flag = 2;
            break;
            case "/":flag = 3;
            break;
            case "*":flag = 4;
            break;
            // case "Math.PI":flag = 5;
            // break;
            // case "Math.E" :flag = 6;
            // break;
        }    // flag代表加减乘除等符号的代号
        var str1 = document.getElementById("text").innerHTML;
        var str2 = document.getElementById(n).innerHTML;
        str1 = str1+str2;
        document.getElementById("text").innerHTML = str1;
    }
    else
    {
        var str1 = document.getElementById("text").innerHTML;
        /*switch(flag)
        {
            case 1: var my_num = str1.split("+");
                    num_len = my_num.length;
                    for (var i = 0;i < num_len;i++){
                        if(my_num[i] == 'π')
                            sum = sum + Math.PI;
                        else
                            sum = sum + parseFloat(my_num[i]);
                    }
                    break;
            case 2: var my_num = str1.split("-");
                    num_len = my_num.length;
                    if(my_num[0] == 'π')
                        sum = Math.PI;
                    else
                        sum = parseFloat(my_num[0]);
                    for (var i = 1;i < num_len;i++)
                    {
                        if(my_num[i] == 'π')
                            sum = sum - Math.PI;
                        else
                            sum = sum - parseFloat(my_num[i]);
                    }
                     break;
            case 3: var my_num = str1.split("/");
                    num_len = my_num.length;
                    if(my_num[0] == 'π')
                        sum = Math.PI;
                    else
                        sum = parseFloat(my_num[0]);
                    for (var i = 1;i < num_len;i++)
                    {
                        if(my_num[i] == 'π')
                            sum = sum / Math.PI;
                        else
                            sum = sum / parseFloat(my_num[i]);
                    }
                    break;   
            case 4: var my_num = str1.split("*");
                    num_len = my_num.length;
                    sum = 1;
                    for (var i = 0;i < num_len;i++)
                    {
                        if(my_num[i] == 'π')
                            sum = sum * Math.PI;
                        else
                            sum = sum * parseFloat(my_num[i]);
                    }
                    break;                              
        }*/
        var num_len = str1.length;
        str1 = str1.replace(/π/g, 'Math.PI');
        str1 = str1.replace(/e/g,'Math.E');
        sum = eval(str1);
        document.getElementById("text").innerHTML = String(sum);
        sum = 0;
    }
}