const firstName = document.querySelector("#fname input");
const lastName = document.querySelector("#lname input");
const emailInput = document.querySelector("#input-email input");
const country = document.querySelector("#input-country input");
const zipCode = document.querySelector("#input-zip input");
const passwordInput = document.querySelector("#input-password input");
const confirmPassword = document.querySelector("#confirm-password input");

// empty  array for pushing errors
// const errors = [];

 // maping the elements
const elements = [
  { value: firstName, id: "#fname" },
  { value: lastName, id: "#lname" },
  { value: emailInput, id: "#input-email" },
  {value:country, id:"#input-country"},
  {value:zipCode, id:"#input-zip"},
  {value:passwordInput, id:"#input-password"},
  {value:confirmPassword, id:"#confirm-password"}
];
 

const validate = () => {
 
 
  elements.map((element) => {
    if (!element.value.value) {
      const span = document.querySelector(`${element.id} span`);
      span.innerText = `${element.value.name} is required!`;
      // pushing the errors in the empty errors array
      // errors.push(`${element.value.name} is required!`);
    }
  });
};

const unchange = () => {
  console.log("change");
  elements.map((element) => {
    if (element.value.value) {
      const span = document.querySelector(`${element.id} span`);
      span.innerText = '';
  
    }
  });
 
}

elements.map(element => {

  return element.value.addEventListener('keypress', unchange);
})


// function to alert user if submission is succesful
// const submitEntry = () => {
//   validate();
//   if (errors.length>0) {
//     alert("please required field");
//   } else {
//     alert("form submitted")
//  }
//  }

// console.log(errors);
 