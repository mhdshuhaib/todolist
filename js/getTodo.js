function getList() {
  console.log("started")
  let request = new XMLHttpRequest();
  var xmlhttp = new XMLHttpRequest();


  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      myFunction(myArr);
    }
  };
  xmlhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
  xmlhttp.send();
  function myFunction(arr) {
    var out = "";
    var i;
    var check = "";
    for (i = 0; i < arr.length; i++) {
      // out += '<a href="' + arr[i].url + '">' + 
      // arr[i].userId + '</a><br>';
      console.log(arr[i].userId);
      if (arr[i].completed == false) {
        check = ` <td>
        <input class="form-check-input" type="checkbox" value=""  onchange="return Validate()"};>

        </td>`

      } else {
        check = ` <td>
        <input class="form-check-input" type="checkbox" disabled checked value="" id="flexCheckChecked" >

        </td>`
      }

      out += `<tr>
      <th scope="row">${arr[i].userId}</th>
      <td>${arr[i].title}</td>
${check}
      
    </tr > `


    }
    document.getElementById("update").innerHTML = out;
  }
}


function Validate() {
  console.log("hreeeeeeeeeeeeeeeeeeeeeee");
  var checked = 0;

  //Reference the Table.
  var table = document.getElementById("table");

  //Reference all the CheckBoxes in Table.
  var chks = table.getElementsByTagName("input");

  //Loop and count the number of checked CheckBoxes.
  for (var i = 0; i < chks.length; i++) {
    if (chks[i].checked) {
      checked++;
    }
  }
  if (checked % 5 == 0 && checked != 90) {
    alert("Congrats, You completed 5 tasks successfully.");
    return true;
  } else {
    return false;
  }
};
