

const form = document.getElementById("add_user") || {};
const pError = document.querySelector("p.error");

//
form.onsubmit = async function (event) {
  event.preventDefault();
  const formData = new FormData(form);
  let response = await fetch("/", {
    body: formData,
    method: "post",
  });
  let result = await response.json();

  if (result.errors) {
    Object.keys(result.errors).forEach((fildName) => {
      document.querySelector(`.${fildName}-error`).textContent =
        result.errors[fildName].msg;
      document.querySelector(`.${fildName}-error`).style.display = "block";
      let array = Object.keys(result.errors);
      //
      function find(arr, findObj) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] == findObj) return true;
        }
      }
      if (find(array, "name")) {
      } else {
        document.querySelector(`.name-error`).style.display = "none";
      }
      if (find(array, "email")) {
      } else {
        document.querySelector(`.email-error`).style.display = "none";
      }
      if (find(array, "gender")) {
      } else {
        document.querySelector(`.gender-error`).style.display = "none";
      }
      if (find(array, "status")) {
      } else {
        document.querySelector(`.status-error`).style.display = "none";
      }
    });
  } else {
    setTimeout(() => {
      alert("thanks for submit!");
      location.reload();
    }, 500);
  }
};
// form end

//  update form

const updateForm = document.getElementById("update_user") || {};
updateForm.onsubmit = async function (event) {
  event.preventDefault();
  let formData = new FormData(updateForm);
  let id=document.getElementById('hidden').value;
  console.log(formData);
  let response = await fetch(`/update_a/${id}`, {
    method: "put",
    body:formData
  }
  );
  let result= await response.json();
  console.log(result);
  if (result.errors) {
    Object.keys(result.errors).forEach((fildName) => {
      document.querySelector(`.${fildName}-error`).textContent =
        result.errors[fildName].msg;
      document.querySelector(`.${fildName}-error`).style.display = "block";
      let array = Object.keys(result.errors);
      //
      function find(arr, findObj) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] == findObj) return true;
        }
      }
      if (find(array, "name")) {
      } else {
        document.querySelector(`.name-error`).style.display = "none";
      }
      if (find(array, "email")) {
      } else {
        document.querySelector(`.email-error`).style.display = "none";
      }
      if (find(array, "gender")) {
      } else {
        document.querySelector(`.gender-error`).style.display = "none";
      }
      if (find(array, "status")) {
      } else {
        document.querySelector(`.status-error`).style.display = "none";
      }
    });
  } else{
    setTimeout(()=>{
      alert('Update successfull...');
      // location.reload();
    },500)
  }
};


// delete user

async function deleteUser(id){
 
  if(confirm('Delete this user..?')){
   const response= await fetch(`/remove/${id}`,{
    method:'DELETE'
   });
   let result= await response.json();
   console.log(result)
   if(result.errors){

   }else{
    setTimeout(()=>{
      alert('User was deleted successfully.!');
      location.reload();
    },500)
   }
  }
}
console.log