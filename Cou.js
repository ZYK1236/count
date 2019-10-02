var flag = 0;
var sum = 0;
<<<<<<< HEAD
=======

>>>>>>> 87698a96350f393f727476a5a0777725733ce3ad
function fresh1()
{
    window.location.href = "update.html"
}

function fresh2()
{
    window.location.href = "Thanks.html"
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
    if(num2.length >=10)
    {
        alert("超过限定数字个数");
        num2 = num2.substr(0,num2.length-1);
    }
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
        if((str2 == '-' && flag == 0)||(str2 == 'sin'&&flag == 0)||(str2 == 'cos'&&flag == 0)||(str2 == 'tan'&&flag == 0))
        {
            document.getElementById("text").innerHTML = str2;
            flag = 1;
        }
        else{
            str1 = str1+str2;
            document.getElementById("text").innerHTML = str1;
        }
    }
    else
    {
        var str1 = document.getElementById("text").innerHTML;
        var tempstr1 = str1;
        for(var i = 10;i<100;i++)
        {
            var tstr = 'sin'+String(i);
            tstr1 = tstr.substr(3);
            var num = Math.sin(parseFloat(tstr1));
            str1 = str1.replace(tstr,String(num));
            if(tstr == tempstr1)
                break;
        }
        for(var i = 0;i<10;i++)
        {
            var tstr = 'sin'+String(i);
            tstr1 = tstr.substr(3);
            var num = Math.sin(parseFloat(tstr1));
            str1 = str1.replace(tstr,String(num));
            if(tstr == tempstr1)
                break;
        }
        // ---------------------------------------------------sin
        for(var i = 10;i<100;i++)
        {
            var tstr = 'cos'+String(i);
            tstr1 = tstr.substr(3);
            var num = Math.cos(parseFloat(tstr1));
            str1 = str1.replace(tstr,String(num));
            if(tstr == tempstr1)
                break;
        }
        for(var i = 0;i<10;i++)
        {
            var tstr = 'cos'+String(i);
            tstr1 = tstr.substr(3);
            var num = Math.cos(parseFloat(tstr1));
            str1 = str1.replace(tstr,String(num));
            if(tstr == tempstr1)
                break;
        }
        // -----------------------------------------------------cos
        for(var i = 10;i<100;i++)
        {
            var tstr = 'tan'+String(i);
            tstr1 = tstr.substr(3);
            var num = Math.tan(parseFloat(tstr1));
            str1 = str1.replace(tstr,String(num));
            if(tstr == tempstr1)
                break;
        }
        for(var i = 0;i<10;i++)
        {
            var tstr = 'tan'+String(i);
            tstr1 = tstr.substr(3);
            var num = Math.tan(parseFloat(tstr1));
            str1 = str1.replace(tstr,String(num));
            if(tstr == tempstr1)
                break;
        }
        str1 = str1.replace(/π/g, 'Math.PI');
        str1 = str1.replace(/e/g,'Math.E');
        // str1 = str1.replace(/^/g,'**');
        sum = eval(str1);
        document.getElementById("text").innerHTML = String(sum);
        sum = 0;
    }
}
