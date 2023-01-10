//check if input is null, if not null then label with applied with style according in reserve.css
//if null then label style back to its original style in reserve.css

window.addEventListener('load', function () {
  var x = document.getElementsByClassName("form-input");
  for (var i = 0; i < x.length; i++) {
    x[i].addEventListener('change', function () {
      this.setAttribute("value", this.value);
    })
  }
})

//create options on motorName according to selected motor (Kawasako | Vixian)
function dropdownChange(motor, motorName) {
  var kawasako = ['Kawasako x56', 'Kawasako x57', 'Kawasako Black Sun', 'Kawasako Cross950', 'Kawasako Monster-21', 'Kawasako 21SF'];
  var vixian = ['Vixian XF262', 'Vixian CF300', 'Vixian Lumiere160', 'Vixian MT-1260', 'Vixian MT-V4', 'Vixian SP01'];

  switch (motor.value) {
    case 'Kawasako':
      motorName.options.length = 0;
      for (i = 0; i < kawasako.length; i++) {
        createOption(motorName, kawasako[i], kawasako[i]);
      }
      break;
    case 'Vixian':
      motorName.options.length = 0;
      for (i = 0; i < vixian.length; i++) {
        createOption(motorName, vixian[i], vixian[i]);
      }
      break;
    default:
      motorName.options.length = 0;
      break;
  }
}
//create option element on motorName
function createOption(motor, text, value) {
  var opt = document.createElement('option');
  opt.value = value;
  opt.text = text;
  motor.options.add(opt);
}


//validation

function submitForm(form) {
  if (!nullForm(form.name.value, form.phone.value, form.address.value, form.motor.value, form.qty.value)) {
    alert("No blank fields!");
    return false;
  }
  else if (!countName(form.name.value)) {
    alert("Name must be more than 1 word!");
    return false
  }
  else if (!numberOnly(form.phone.value)) {
    alert("Phone must be number only!");
    return false;
  }
  else if (!validateColor()) {
    alert("Please choose a color!");
    return false;
  }
  alert("Form submitted succesfully!")
  return true;
}
//if fields null
function nullForm(name, phone, address, motor, qty, color) {
  if (name == "" || phone == "" || address == "" || motor == "" || qty == "") {
    return false;
  }
  return true
}

//phone must be number only
function numberOnly(phone) {
  var num = /^[0-9]+$/;
  if (phone.match(num)) {
    return true;
  }
  return false;

}

//if radio not checked
function validateColor() {
  var radios = document.getElementsByName("color");
  var valid = false;

  var i = 0;
  while (!valid && i < radios.length) {
    if (radios[i].checked) {
      valid = true;
    }
    i++;
  }

  if (!valid) {
    return false;
    console.log("salah")
  }
  return true;

}

//if name words less than 1

function countName(name) {
  var count = 0;
  var str = name.split(" ");
  for (var i = 0; i < str.length; i++) {
    if (str[i] != "") {
      count += 1;
      //console.log(str[i])
    }
  }

  if (count < 2) {
    return false;
  }
  return true;
}