function polygon(x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,color,strokecolor,strokewidth,fillrule)
{
document.write("<polygon points=" + x1 + "," + y1 + " " + x2 + "," + y2 + " " + x3 + "," + y3 + " " + x4 + "," + y4 + " " + x5 + "," + y5 + " style='" +
"fill:" + color + ";stroke:" + strokecolor + ";stroke-width:" + strokewidth + ";fill-rule:"+ fillrule + "' />");
}

function ellipse(cxc,cy,rx,ry,fill)
{
document.write("<ellipse cx=" + cx + " cy=" + cy + " rx=" + rx + " ry=" + ry + " fill=url(" + fill + ") />");
}

function ellipse(cx,cy,rx,ry)
{
document.write("<ellipse cx=" + cx + " cy=" + cy + " rx=" + rx + " ry=" + ry + " />");
}

function circle(cx,cy,r,stroke,strokewidth,fill)
{
document.write("<circle cx=" + cx + " cy=" + cy + " r=" + r+ " stroke=" + stroke + " stroke-width=" + strokewidth + " fill=" + fill + " />");
}

function line(x1,y1,x2,y2)
{
document.write("<line x1=" + x1 + " y1=" + y1 + " x2=" + x2 + " y2=" + y2 + " />");
}

function text(x1,y1,fill,transform,t)
{
alert(t);
document.write("<text " + " x1=" + x1 + " y1=" + y1 + " fill=" + fill + " transform=" + transform + " >"+ t+ "</text>");
}

function text(x1,y1,fill,t)
{
alert(t);
document.write("<text " + "x1=" + x1 + " y1=" + y1 + " fill=" + fill + " >"+ t+ "</text>");
}