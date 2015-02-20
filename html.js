function form(actionUrl)
{
var str = "<div id='form'><form method='post' action=" + actionUrl + "><br />";
str+="Username:<input type='text' /><br />Password:<input type='password' /><br />";
str+="</form></div>";
document.write(str);
}

function br()
{
document.write("<br /><br /><br />");
}

function h1(c) { document.write("<h1>"+c+"</h1>"); }

function h2(c) { document.write("<h2>"+c+"</h2>"); }

function h3(c) { document.write("<h3>"+c+"</h3>"); }

function h4(c) { document.write("<h4>"+c+"</h4>"); }

function h5(c) { document.write("<h5>"+c+"</h5>"); }

function h6(c) { document.write("<h6>"+c+"</h6>"); }

function selectlistday() 
{
  document.write("<select>");
  for(i=1;i<=31;i++)
  {
    document.write("<option>" + i + "</option>")
  }
  document.write("</select>");
}

function selectlistmonth() 
{
document.write("<select>");
for(i=1;i<=12;i++)
{
  document.write("<option>" + i + "</option>");
}
document.write("</select>");
}

function selectlistyear(start,end) 
{ 
document.write("<select>");
for(i=start;i<=end;i++)

document.write("<option>" + i + "</option>")

document.write("</select>");
}

function olist()
{
  document.write("<ol>");
  for(i in arguments)
  {
    document.write("<li>" + i + "</li>");
  }
  document.write("</ol>");
  }
}

function ulist()
{
  document.write("<ul>");
  for(i in arguments)
  {
    document.write("<li>" + i + "</li>");
  }
  document.write("</ul>");
  }
}

function stylesheet()
{
  for(i in arguments)
  {
   document.write("<link rel='stylesheet' href='"+ i +"' type='text/css'");
  }
  }

function 
}
