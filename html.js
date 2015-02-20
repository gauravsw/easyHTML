function form(actionUrl)
{
var str = "<div id='form'><form method='post' action=" + actionUrl + "><br />";
str+="Username: <input type='text' /><br /><br />Password: <input type='password' /><br />";
str+="</form></div>";
document.write(str);
return str;
}

function br()
{
document.write(str = "<br /><br /><br />");
return str;
}

function abbr(title,abbr) { document.write(str="<abbr title='" + title + "'>" + abbr + "</abbr>"); return str;}

function acronym(title,abbr) { document.write(str="<acronym title='" + title + "'>" + abbr + "</acronym>");return str; }

function address(addr) { document.write(str="<address>"+ addr + "</address>");return str; }

function button(text) { document.write(str="<button type='button'>" + text + "</button>");return str; }

function del(c) { document.write(str="<del>" + c + "</del>");return str; }

function s(c) { document.write(str="<s>" + c + "</s>");return str; }

function strike(c) { document.write(str="<strike>" + c + "</strike>");return str; }

function dl(id) { document.write(str="<dl id='" + id + "'>");return str; }

function dt(c) { document.write(str="<dt>" + c + "</dt>");return str; }

function dd(c) { document.write(str="<dd>" + c + "</dd>");return str; }

function dlc() { document.write("</dl>"); }

function input(type,name,id,val) { document.write(str="<input type='" + type + "' name='" + name + "' id='" + id + "' val='" + val +"'/>"); }

function summary(c) { document.write(str="<summary>" + c + "</summary>");return str; }

function dfn(title,c) { document.write(str="<dfn id='" +id + "' title='" + title + "'>" + c + "</dfn>");return str; }

function dfnabbr(title,abbr) { document.write(str="<dfn id='" + id + "'><abbr title='" + title + "'>" + "</abbr></dfn>");return str; }

function meter(min,max,value) { document.write(str="<meter min='" + min + "' max='" + max + "' value='" + value + "'></meter>");return str; }

function meter2(val,percent) { document.write(str="<meter value='" + value + "'>" + percent + "%" + "</meter>");return str; }

function progress(value,max) { document.write(str="<progress value='" + value + "' max='" + max +"'></progress>");return str; }

function code(c) { document.write(str="<code>" + c + "</code>");return str; }

function samp(c) { document.write(str="<samp>" + c + "</samp>");return str; }

function cite(c) { document.write(str="<cite>" + c + "</cite>");return str; }

function q(c) { document.write(str="<q>" + c + "</q>");return str; }

function header(c) { document.write(str="<header>" + c + "</header>");return str; }

function footer(c) { document.write(str="<footer>" + c + "</footer>");return str; }

function section(c) { document.write(str="<section>" + c + "</section>");return str; }

function article(c) { document.write(str="<article>" + c + "</article>");return str; }

function ins(c) { document.write(str="<ins>" + c + "</ins>");return str; }

function var2(c) { document.write(str="<var>" + c + "</var>");return str; }

function source(c) { document.write(str="<source>" + c + "</source>");return str; }

function kbd(c) { document.write(str="<kbd>" + c + "</kbd>");return str; }

function sup(c) { document.write(str="<sup>" + c + "</sup>");return str; }

function sub(c) { document.write(str="<sub>" + c + "</sub>");return str; }

function param(name,value)  { document.write(str="<param name='" + name + "' value='" + value + "'>");return str; }

function big(c) { document.write(str="<big>" + c + "</big>");return str; }

function small(c) { document.write(str="<small>" + c +"</small>");return str; }

function b(c)  { document.write(str="<b>"+c+"</b>");return str; }

function i(c) { document.write(str="<i>" + c + "</i>");return str; }

function bi(c) { document.write(str="<b><i>" +  c + "</i></b>");return str; }

function u(c) { document.write(str="<u>" + c + "</u>");return str; }

function biu(c) { document.write(str="<b><i><u>" + c + "</u></i></b>");return str; }

function span(c) { document.write(str="<span>" + c + "</span>");return str; }

function strong(c) { document.write(str="<strong>" + c + "</strong>");return str; }

function em(c) { document.write(str="<em>" + c + "</em>");return str; }

function strongem(c) { document.write(str="<strong><em>" + c + "</strong></em>");return str; }

function strongemu(c) { document.write(str="<strong><em><u>" + c + "</strong></em></u>");return str; }

function blockquote(c) { document.write(str="<blockquote>" + c + "</blockquote>");return str; }

function title(c) { document.write(str="<title>" + c + "</title>");return str; }

function div(id) { document.write(str="<div id='" + id + "'");return str; }

function divc() { document.write(str="</div>");return str; }

function table(id) { document.write(str="<table id='" + id + "'");return str; }

function tablec() { document.write(str="</table>");return str; }

function tr(id) { document.write(str="<tr id='" + id + "'");return str; }

function trc() { document.write(str="</tr>");return str; }

function td(c) { document.write(str="<td>" + c + "</td>");return str; }

function h1(c) { document.write(str="<h1>"+c+"</h1>");return str; }

function h2(c) { document.write(str="<h2>"+c+"</h2>");return str; }

function h3(c) { document.write(str="<h3>"+c+"</h3>");return str; }

function h4(c) { document.write(str="<h4>"+c+"</h4>");return str; }

function h5(c) { document.write(str="<h5>"+c+"</h5>");return str; }

function h6(c) { document.write(str="<h6>"+c+"</h6>");return str; }

function wbr(c) { document.write(str="<wbr>" + c + "</wbr>"); return str; }

function aside(c) { document.write(str="<aside>" + c + "</aside>"); return str; }

function tt(c) { document.write(str="<tt>" + c + "</tt>"); return str;}

function details(c) { document.write(str="<details>" + c + "</details>"); return str; }

function bdi(c) { document.write(str="<bdo>" + c + "</bdo>"); return str;}

function bdo(c) { document.write(str="<bdi>" + c + "</bdi>"); return str;}

function rt(c) { document.write(str="<rt>" + c + "</rt>"); return str;}

function time(c) { document.write(str="<time>" + c + "</time>"); return str; } 

function center(c) { document.write(str="<center>" + c + "</center>"); return str; }

function caption(c) { document.write(str="<caption>"+ c + "</caption>"); return str;}

function img(src,alt,width,height) { document.write(str="<img src='" + src + "' alt='" + alt + "' width='" + width + "' height='" + height + "/>");
return str; }

function figure(c)  { document.write(str="<figure>" + c + "</figure>"); return str; }

function legend(c) { document.write(str="<legend>" + c + "</legend>"); return str; }

function fieldset(c) { document.write(str="<fieldset>" + c + "</fieldset>"); return str; } 

function canvas(id ,text) { document.write(str="<canvas id='" + id + "'>"+ text + "</canvas>"); return str; }

function mark(c) {  document.write(str="<mark>" + c + "</mark>"); return str; }

function label(for,text) { document.write(str="<label for='" + for + "'>" + text + "</label>"); return str; }

function main(c) { document.write(str="<main>"+c+ "</main>"); return str; }

function keygen(c) { document.write(str="<keygen name='" + c + "'>"); return str; }

function figcaption(c) { document.write(str="<figcaption>" + c + "</figcaption>"); return str; }

function selectlistday() 
{
  document.write(str="<select>");
  for(i=1;i<=31;i++)
  {
    document.write(str+="<option>" + i + "</option>")
  }
  document.write(str+="</select>");
  return str;
}

function selectlistmonth() 
{
document.write(str="<select>");
for(i=1;i<=12;i++)
{
  document.write(str+="<option>" + i + "</option>");
}
document.write(str+="</select>");
return str;
}

function selectlistyear(start,end) 
{ 
document.write(str="<select>");
for(i=start;i<=end;i++)

document.write(str+="<option>" + i + "</option>")

document.write(str+="</select>");
return str;
}

function selectstatelist()
{
  document.write(str='<select id="statelist>"' +
'<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>' +
'<option value="Andhra Pradesh">Andhra Pradesh</option>' +
'<option value="Arunachal Pradesh">Arunachal Pradesh</option>' +
'<option value="Assam">Assam</option>' +
'<option value="Bihar">Bihar</option>' +
'<option value="Chandigarh">Chandigarh</option>' +
'<option value="Chhattisgarh">Chhattisgarh</option>' +
'<option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>' +
'<option value="Daman and Diu">Daman and Diu</option>' +
'<option value="Delhi">Delhi</option>' +
'<option value="Goa">Goa</option>' +
'<option value="Gujarat">Gujarat</option>' +
'<option value="Haryana">Haryana</option>' +
'<option value="Himachal Pradesh">Himachal Pradesh</option>' +
'<option value="Jammu and Kashmir">Jammu and Kashmir</option>' +
'<option value="Jharkhand">Jharkhand</option>' +
'<option value="Karnataka">Karnataka</option>' +
'<option value="Kerala">Kerala</option>' +
'<option value="Lakshadweep">Lakshadweep</option>' +
'<option value="Madhya Pradesh">Madhya Pradesh</option>' +
'<option value="Maharashtra">Maharashtra</option>' +
'<option value="Manipur">Manipur</option>' +
'<option value="Meghalaya">Meghalaya</option>' +
'<option value="Mizoram">Mizoram</option>' +
'<option value="Nagaland">Nagaland</option>' +
'<option value="Orissa">Orissa</option>' +
'<option value="Pondicherry">Pondicherry</option>' +
'<option value="Punjab">Punjab</option>' +
'<option value="Rajasthan">Rajasthan</option>' +
'<option value="Sikkim">Sikkim</option>' +
'<option value="Tamil Nadu">Tamil Nadu</option>' +
'<option value="Tripura">Tripura</option>' +
'<option value="Uttarakhand">Uttarakhand</option>' +
'<option value="Uttar Pradesh">Uttar Pradesh</option>' +
'<option value="West Bengal">West Bengal</option>' +
'</select>');
return str;
}

function countryselectlist()
{
  document.write(str='<select name="countrylist"> \
<option value="" selected="selected">Select Country</option> \
<option value="United States">United States</option> \
<option value="United Kingdom">United Kingdom</option> \
<option value="Afghanistan">Afghanistan</option> \
<option value="Albania">Albania</option> \
<option value="Algeria">Algeria</option> \
<option value="American Samoa">American Samoa</option> \
<option value="Andorra">Andorra</option> \
<option value="Angola">Angola</option> \
<option value="Anguilla">Anguilla</option> \
<option value="Antarctica">Antarctica</option> \
<option value="Antigua and Barbuda">Antigua and Barbuda</option> \
<option value="Argentina">Argentina</option> \
<option value="Armenia">Armenia</option> \
<option value="Aruba">Aruba</option> \
<option value="Australia">Australia</option> \
<option value="Austria">Austria</option> \
<option value="Azerbaijan">Azerbaijan</option> \
<option value="Bahamas">Bahamas</option> \
<option value="Bahrain">Bahrain</option> \
<option value="Bangladesh">Bangladesh</option> \
<option value="Barbados">Barbados</option> \
<option value="Belarus">Belarus</option> \
<option value="Belgium">Belgium</option> \
<option value="Belize">Belize</option> \
<option value="Benin">Benin</option> \
<option value="Bermuda">Bermuda</option> \
<option value="Bhutan">Bhutan</option>\
<option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option> \
<option value="Botswana">Botswana</option> \
<option value="Bouvet Island">Bouvet Island</option> \
<option value="Brazil">Brazil</option> \
<option value="British Indian Ocean Territory">British Indian Ocean Territory</option> \
<option value="Brunei Darussalam">Brunei Darussalam</option> \
<option value="Bulgaria">Bulgaria</option> \
<option value="Burkina Faso">Burkina Faso</option> \
<option value="Burundi">Burundi</option> \
<option value="Cambodia">Cambodia</option>\
<option value="Cameroon">Cameroon</option> \
<option value="Canada">Canada</option> \
<option value="Cape Verde">Cape Verde</option> \
<option value="Cayman Islands">Cayman Islands</option> \
<option value="Central African Republic">Central African Republic</option> \
<option value="Chad">Chad</option> \
<option value="Chile">Chile</option>\
<option value="China">China</option> \
<option value="Christmas Island">Christmas Island</option> \
<option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option> \
<option value="Colombia">Colombia</option> \
<option value="Comoros">Comoros</option> \
<option value="Congo">Congo</option> \
<option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option> \
<option value="Cook Islands">Cook Islands</option> \
<option value="Costa Rica">Costa Rica</option> \
<option value="Cote D ivoire">Cote D ivoire</option> \
<option value="Croatia">Croatia</option> \
<option value="Cuba">Cuba</option> \
<option value="Cyprus">Cyprus</option> \
<option value="Czech Republic">Czech Republic</option> \
<option value="Denmark">Denmark</option> \
<option value="Djibouti">Djibouti</option> \
<option value="Dominica">Dominica</option> \
<option value="Dominican Republic">Dominican Republic</option> \
<option value="Ecuador">Ecuador</option> \
<option value="Egypt">Egypt</option> \
<option value="El Salvador">El Salvador</option> \
<option value="Equatorial Guinea">Equatorial Guinea</option> \
<option value="Eritrea">Eritrea</option>  \
<option value="Estonia">Estonia</option>  \
<option value="Ethiopia">Ethiopia</option> \
<option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option> \
<option value="Faroe Islands">Faroe Islands</option> \
<option value="Fiji">Fiji</option> \
<option value="Finland">Finland</option> \
<option value="France">France</option> \
<option value="French Guiana">French Guiana</option>  \
<option value="French Polynesia">French Polynesia</option> \
<option value="French Southern Territories">French Southern Territories</option> \
<option value="Gabon">Gabon</option> \
<option value="Gambia">Gambia</option>' +  
'<option value="Georgia">Georgia</option>' +
'<option value="Germany">Germany</option>  \
<option value="Ghana">Ghana</option>  \
<option value="Gibraltar">Gibraltar</option>  \
<option value="Greece">Greece</option>  \
<option value="Greenland">Greenland</option>  \
<option value="Grenada">Grenada</option>  \
<option value="Guadeloupe">Guadeloupe</option>  \
<option value="Guam">Guam</option>  \
<option value="Guatemala">Guatemala</option>  \
<option value="Guinea">Guinea</option>  \
<option value="Guinea-bissau">Guinea-bissau</option>  \
<option value="Guyana">Guyana</option>  \
<option value="Haiti">Haiti</option> \
<option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>  \
<option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>  \
<option value="Honduras">Honduras</option>  \
<option value="Hong Kong">Hong Kong</option>  \
<option value="Hungary">Hungary</option>  \
<option value="Iceland">Iceland</option>  \
<option value="India">India</option>  \
<option value="Indonesia">Indonesia</option>  \
<option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>  \
<option value="Iraq">Iraq</option>  \
<option value="Ireland">Ireland</option>' + 
'<option value="Israel">Israel</option> \
<option value="Italy">Italy</option>  \
<option value="Jamaica">Jamaica</option>' + 
'<option value="Japan">Japan</option>  \
<option value="Jordan">Jordan</option>  \
<option value="Kazakhstan">Kazakhstan</option>  \
<option value="Kenya">Kenya</option>  \
<option value="Kiribati">Kiribati</option>  \
<option value="Korea, Democratic Peoples Republic of">Korea, Democratic Peoples Republic of</option>  \
<option value="Korea, Republic of">Korea, Republic of</option>  \
<option value="Kuwait">Kuwait</option>  \
<option value="Kyrgyzstan">Kyrgyzstan</option>  \
<option value="Lao Peoples Democratic Republic">Lao Peoples Democratic Republic</option>  \
<option value="Latvia">Latvia</option>  \
<option value="Lebanon">Lebanon</option>  \
<option value="Lesotho">Lesotho</option>  \
<option value="Liberia">Liberia</option>  \
<option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>  \
<option value="Liechtenstein">Liechtenstein</option>  \
<option value="Lithuania">Lithuania</option>  \
<option value="Luxembourg">Luxembourg</option>  \
<option value="Macao">Macao</option>  \
<option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option> \
<option value="Madagascar">Madagascar</option>  \
<option value="Malawi">Malawi</option>  \
<option value="Malaysia">Malaysia</option>' + 
'<option value="Maldives">Maldives</option>  \
<option value="Mali">Mali</option>  \
<option value="Malta">Malta</option>  \
<option value="Marshall Islands">Marshall Islands</option>  \
<option value="Martinique">Martinique</option>  \
<option value="Mauritania">Mauritania</option>  \
<option value="Mauritius">Mauritius</option>  \
<option value="Mayotte">Mayotte</option>  \
<option value="Mexico">Mexico</option>  \
<option value="Micronesia, Federated States of">Micronesia, Federated States of</option>  \
<option value="Moldova, Republic of">Moldova, Republic of</option> \
<option value="Monaco">Monaco</option>  \
<option value="Mongolia">Mongolia</option>' + 

'<option value="Montserrat">Montserrat</option>' + 

'<option value="Morocco">Morocco</option>  \
<option value="Mozambique">Mozambique</option> \
<option value="Myanmar">Myanmar</option>  \
<option value="Namibia">Namibia</option>  \
<option value="Nauru">Nauru</option>  \
<option value="Nepal">Nepal</option>  \
<option value="Netherlands">Netherlands</option> \
<option value="Netherlands Antilles">Netherlands Antilles</option> \
<option value="New Caledonia">New Caledonia</option>  \
<option value="New Zealand">New Zealand</option>  \
<option value="Nicaragua">Nicaragua</option>  \
<option value="Niger">Niger</option>  \
<option value="Nigeria">Nigeria</option>' + 

'<option value="Niue">Niue</option>  \
<option value="Norfolk Island">Norfolk Island</option>  \
<option value="Northern Mariana Islands">Northern Mariana Islands</option>  \
<option value="Norway">Norway</option> \
<option value="Oman">Oman</option>  \
<option value="Pakistan">Pakistan</option>  \
<option value="Palau">Palau</option> \
<option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>  \
<option value="Panama">Panama</option>  \
<option value="Papua New Guinea">Papua New Guinea</option>  \
<option value="Paraguay">Paraguay</option>  \
<option value="Peru">Peru</option>  \
<option value="Philippines">Philippines</option>  \
<option value="Pitcairn">Pitcairn</option>  \
<option value="Poland">Poland</option>  \
<option value="Portugal">Portugal</option>  \
<option value="Puerto Rico">Puerto Rico</option>  \
<option value="Qatar">Qatar</option>  \
<option value="Reunion">Reunion</option>  \
<option value="Romania">Romania</option>  \
<option value="Russian Federation">Russian Federation</option>  \
<option value="Rwanda">Rwanda</option>  \
<option value="Saint Helena">Saint Helena</option> \
<option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>  \
<option value="Saint Lucia">Saint Lucia</option>  \
<option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>  \
<option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>  \
<option value="Samoa">Samoa</option>  \
<option value="San Marino">San Marino</option>  \
<option value="Sao Tome and Principe">Sao Tome and Principe</option>  \
<option value="Saudi Arabia">Saudi Arabia</option>  \
<option value="Senegal">Senegal</option>  \
<option value="Serbia and Montenegro">Serbia and Montenegro</option>  \
<option value="Seychelles">Seychelles</option>  \
<option value="Sierra Leone">Sierra Leone</option>  \
<option value="Singapore">Singapore</option>  \
<option value="Slovakia">Slovakia</option>  \
<option value="Slovenia">Slovenia</option>  \
<option value="Solomon Islands">Solomon Islands</option>  \
<option value="Somalia">Somalia</option>  \
<option value="South Africa">South Africa</option>  \
<option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>  \
<option value="Spain">Spain</option>  \
<option value="Sri Lanka">Sri Lanka</option>  \
<option value="Sudan">Sudan</option>  \
<option value="Suriname">Suriname</option>  \
<option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>  \
<option value="Swaziland">Swaziland</option>  \
<option value="Sweden">Sweden</option> \
<option value="Switzerland">Switzerland</option>  \
<option value="Syrian Arab Republic">Syrian Arab Republic</option>  \
<option value="Taiwan, Province of China">Taiwan, Province of China</option>  \
<option value="Tajikistan">Tajikistan</option>  \
<option value="Tanzania, United Republic of">Tanzania, United Republic of</option>  \
<option value="Thailand">Thailand</option>  \
<option value="Timor-leste">Timor-leste</option>  \
<option value="Togo">Togo</option>' + 

'<option value="Tokelau">Tokelau</option>' +  

'<option value="Tonga">Tonga</option>  \
<option value="Trinidad and Tobago">Trinidad and Tobago</option>  \
<option value="Tunisia">Tunisia</option>  \
<option value="Turkey">Turkey</option>  \
<option value="Turkmenistan">Turkmenistan</option>  \
<option value="Turks and Caicos Islands">Turks and Caicos Islands</option>' + 
'<option value="Tuvalu">Tuvalu</option>  \
<option value="Uganda">Uganda</option>  \
<option value="Ukraine">Ukraine</option>  \
<option value="United Arab Emirates">United Arab Emirates</option>  \
<option value="United Kingdom">United Kingdom</option>  \
<option value="United States">United States</option>  \
<option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>  \
<option value="Uruguay">Uruguay</option>  \
<option value="Uzbekistan">Uzbekistan</option>  \
<option value="Vanuatu">Vanuatu</option>  \
<option value="Venezuela">Venezuela</option>  \
<option value="Viet Nam">Viet Nam</option>  \
<option value="Virgin Islands, British">Virgin Islands, British</option>  \
<option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>  \
<option value="Wallis and Futuna">Wallis and Futuna</option>  \
<option value="Western Sahara">Western Sahara</option>  \
<option value="Yemen">Yemen</option>  \
<option value="Zambia">Zambia</option>  \
<option value="Zimbabwe">Zimbabwe</option> \
</select>');
return str;
}

function datalist()
{
  document.write(str="<datalist>");
  for(i in arguments)
  {
    document.write(str+="<option value='" + i + "'>");
  }
  document.write(str+="</datalist>");
}


function olist()
{
  var id=arguments[0];
  document.write("<ol id='" + id + "'>");
  for(i=1 ;i<arguments.length;i++)
  {
    document.write("<li>" + arguments[i] + "</li>");
  }
  document.write("</ol>");
  }

function ulist()
{
  var id = arguments[0];
  document.write("<ul id='" + id +"'>");
  for(i=1;i<arguments.length;i++)
  {
    document.write("<li>" + i + "</li>");
  }
  document.write("</ul>");
}

function stylesheet()
{
  for(i in arguments)
  {
   document.write("<link rel='stylesheet' href='"+ i +"' type='text/css'");
  }
  
}


