var name_of_the_student_array=[];
var display_student_array=[];
var removecomma=[]
function submit(){
  for(var i=1;i<=4;i++){
      var name=document.getElementById("name_of_the_student_"+i).value;
      name_of_the_student_array.push(name);
  }
  console.log(name_of_the_student_array);
  var lenghtofarray=name_of_the_student_array.length;
  console.log(lenghtofarray);
  for(var g=0;g<lenghtofarray;g++){
      display_student_array.push("<h4>name "+name_of_the_student_array[g]+"</h4>");
  }
  document.getElementById("display_name_with_commas").innerHTML=display_student_array;
   removecomma=display_student_array.join(" ");
  document.getElementById("display_name_without_commas").innerHTML=removecomma;
  document.getElementById("submit_button").style.display="none";
  document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    var sortedarray=display_student_array.sort();
    document.getElementById("display_name_without_commas").innerHTML=sortedarray;
}

 