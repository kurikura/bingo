 num=1;
 flag=false;
 var cardlist="";

window.onload = function(){ //作成したカードを読み込む
  var h="";
  var card=window.localStorage.getItem("bingo");
  cardlist=JSON.parse(card);
  h+="<table border='0'><tr>";
    for(x=0;x<cardlist.length;x++){
      if(x%4==0){h+="</tr><tr>";}
      var cardnum=1;
      h+="<td><table id='card' border='1' style='float:left;' style='margin-right:2px;'>";
      h+="<tr><td colspan='5' height=30px align='center'>"+cardlist[x][0]+" さん</td></tr>";
      h+="<tr align='center'><td>B</td><td>I</td><td>N</td><td>G</td><td>O</td>";
      for(i=0;i<5;i++){
        h+="<tr>";
        for(j=0;j<5;j++){
          h+="<td width=30px align='center' >"+cardlist[x][cardnum]+"</td>";
          cardnum++;
        }
        h+="</tr></td>";
      }
      h+="</table>";
    }
    h+="</tr></table>";
    document.getElementById("card").innerHTML=h;
}

 numberlist=new Array(); //数字を配列に代入
 Usedlist=new Array();
 for(i=0;i<75;i++){
   numberlist[i]=i+1;
   Usedlist[i]=i+1;
 }

 for(i=0;i<75;i++){ //アイテムをシャッフル
 var r=Math.floor(Math.random()*numberlist.length);
 var tmp1=numberlist[i];
 numberlist[i]=numberlist[r];
 numberlist[r]=tmp1;

 var tmp2=Usedlist[i];
 Usedlist[i]=Usedlist[r];
 Usedlist[r]=tmp2;
 }

 function Start(){
   if(flag==false){
    flag=true;
    setTimeout("Stop()",2000)
    document.getElementById("button1").disabled="disabled";
   }
   var bingo=numberlist[Math.floor(Math.random()*75)];
   document.getElementById("output1").innerHTML=bingo;
   timer=setTimeout("Start()",30);
 }

 function Stop(){
   clearTimeout(timer);
   document.getElementById("button1").disabled="";
   tyusen();
 }

 function tyusen(){
   var tx="";
   flag=false;
   bingo1=document.getElementById("output1");
   bingo2=document.getElementById("output2");
   list=document.getElementById("list5");

   number=numberlist[num-1];
   bingo1.innerHTML=number;
   bingo2.innerHTML=num+"球目&nbsp;&nbsp;";
   var a=Usedlist[num-1];

   tx+="<table border='0'><tr>";
   for(x=0;x<cardlist.length;x++){
     if(x%4==0){tx+="</tr><tr>";}
     var cardnum=1;
     tx+="<td><table id='card' border='1' style='float:left;' style='margin-right:2px;'>";
     tx+="<tr><td colspan='5' height=30px align='center'>"+cardlist[x][0]+" さん</td></tr>";
     for(i=0;i<5;i++){
       tx+="<tr>";
       for(j=0;j<5;j++){
         if(cardlist[x][cardnum]==numberlist[num]){
           cardlist[x][cardnum]="■";
         }
         tx+="<td width=30px align='center'>"+cardlist[x][cardnum]+"</td>";
         cardnum++;
       }
       tx+="</tr></td>";
     }
     tx+="</table>";
   }
   tx+="</tr></table>";
   document.getElementById("card").innerHTML=tx;

   list.innerHTML=""; //Used　Listの処理
   for(i=0;i<num;i++){
     list.innerHTML+=Usedlist[i]+"&nbsp;";
   }
   num++;
   if(num==75){
    document.getElementById("button1").disabled="disabled";
    alert("お疲れさまでした！");
   }
 }

 function cardrmv(){
   window.localStorage.removeItem("bingo");
   document.getElementById("button3").disabled="disabled";
 }
