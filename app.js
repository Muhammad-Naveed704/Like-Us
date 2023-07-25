import {
  auth,
  app,
  db,
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
  getDoc,
  getAuth,
  createUserWithEmailAndPassword,
  query,
  where,
  getDocs,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,

} from "./firebaseConfig.js";

// connect to firebase
//signup
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const signupBtn = document.getElementById("signupBtn");
const date = document.getElementById("date");


//signin

const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const phnNumber = document.getElementById("phnNumber");
const signinBtn = document.getElementById("signinbtn");
// console.log(signinBtn);

// form layout handler
const gotoLoginPage = document.getElementById("gotoLoginPage");
const gotoSignupPage = document.getElementById("gotoSignupPage");
// console.log(gotoLoginPage);

const loginArea = document.querySelector(".login");
const signArea = document.querySelector(".signup");

gotoLoginPage.addEventListener("click", hiddenHandler);

function hiddenHandler() {
  console.log("function work");
  loginArea.classList.remove("hidden");
}

gotoSignupPage.addEventListener("click", showHandler);

function showHandler() {
  console.log("function work")
  loginArea.classList.add("hidden");
} //compelete


signupBtn.addEventListener("click", signupHandler);

function signupHandler() {

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      addData(user.uid);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
}

async function addData(uid) {
  try {
    await setDoc(doc(db, "users", uid), {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
      phnNumber: phnNumber.value,
      id: uid,
    });
    
    console.log("data added");
    alert("user registered")
    hiddenHandler()
      firstName.value = ""
      lastName.value = ""
      email.value = ""
      password.value = ""
      phnNumber.value = ""
      date.value = ""

  } catch (error) {
    console.log(error, "data not added");
  }
}


// Signed in
signinBtn.addEventListener("click", signinHandler);
function signinHandler() {
  signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
    .then((userCredential) => {
      const user = userCredential.user;
      if (user) {
        window.location.href = "./dashboard/index.html";
        alert("user logged in")
      }

      // console.log(user, "user logged in");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage+ " aby dek kr type kr");
    });
}
