 var x=0;
 cardlist=new Array();

 function check(){
  if(document.cardname.bingoname.value=="") {
    alert("名前が空欄です");
    return false;
  }
  else
   return true;
 }

function newcard(){
  numlistB=new Array(15); //数字を配列に代入
  numlistI=new Array(15);
  numlistN=new Array(15);
  numlistG=new Array(15);
  numlistO=new Array(15);
  for(i=1;i<=15;i++){
    numlistB[i-1]=i;
    numlistI[i-1]=i+15;
    numlistN[i-1]=i+30;
    numlistG[i-1]=i+45;
    numlistO[i-1]=i+60;
  }

  for(i=0;i<numlistB.length;i++){ //数字をシャッフル
    var r=Math.floor(Math.random()*numlistB.length);
    var b=numlistB[i];
    numlistB[i]=numlistB[r];
    numlistB[r]=b;

    r=Math.floor(Math.random()*numlistI.length);
    b=numlistI[i];
    numlistI[i]=numlistI[r];
    numlistI[r]=b;

    r=Math.floor(Math.random()*numlistN.length);
    b=numlistN[i];
    numlistN[i]=numlistN[r];
    numlistN[r]=b;

    r=Math.floor(Math.random()*numlistG.length);
    b=numlistG[i];
    numlistG[i]=numlistG[r];
    numlistG[r]=b;

    r=Math.floor(Math.random()*numlistO.length);
    b=numlistO[i];
    numlistO[i]=numlistO[r];
    numlistO[r]=b;
  }

  var num=0;
  card=new Array(31);
  var name=cardname.bingoname.value;
  card[0]=name;
  for(i=0;i<5;i++){ //カードに数字を入れる
    card[num+1]=numlistB[i];
    card[num+2]=numlistI[i];
    card[num+3]=numlistN[i];
    card[num+4]=numlistG[i];
    card[num+5]=numlistO[i];
    num=num+5;
  }
  card[13]="★"; //フリーマス作成

  var n=1; //カード表示
  var h="<br><table id='card' border='1'>";
  h+="<tr><td colspan='5' height=30px align='center'>"+name+" さん</td></tr>";
  h+="<tr align='center'><td>B</td><td>I</td><td>N</td><td>G</td><td>O</td>";
  for(i=0;i<5;i++){
    h+="<tr>";
    for(j=0;j<5;j++){
      h+="<td align='center' width=30px>"+card[n]+"</td>";
      n++;
    }
    h+="</tr>";
  }
  h+="</table><br>";
  document.getElementById("b").innerHTML=h;
  cardlist[x]=card; //カードを保存用配列に入れる
  document.getElementById("c").innerHTML=x+1+"枚目";
  x++;
 }

function hozon(){
  document.getElementById("a").disabled="disabled";
  var json_txt=JSON.stringify(cardlist);
  window.localStorage.setItem("bingo",json_txt);
  document.write("ストレージに保存しました");
}
