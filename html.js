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

function selectlistday() { document.write("<select><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>"+
"<option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option>"+
"<option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option>"+
"<option>22</option><option>23</option><option>24</option><option>25</option><option>26</option><option>27</option><option>28</option><option>29</option>"+
"<option>30</option><option>31</option></select>");
}

function selectlistmonth() { document.write("<select><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>"+
"<option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option>");
}


