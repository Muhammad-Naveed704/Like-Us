
import { 
    auth,
    app,
    db,
    doc,
    getDoc,
    onAuthStateChanged,
    signOut,
    getDocs,
    collection,
    addDoc, } from "../firebaseConfig.js";

    const userName = document.getElementById('userName');
    const email = document.getElementById('email');
    const userDesc = document.getElementById('userDesc');
    const postInput = document.getElementById('postInput');
    const postBtn = document.getElementById('postBtn');
    const postContentArea = document.querySelector('.postContentArea');
// console.log(postBtn,postInput/)
  // console.log(userDesc,userName,email);

let loggedInUser;

onAuthStateChanged(auth, (user) => {
  if (user) {
    
    const uid = user.uid;
    // console.log(uid);

    getActiveUserData(uid)
    loggedInUser = uid    
  } else {
    // User is signed out
  window.location.href = "../index.html"
  
  }
});


async function getActiveUserData(uid){
  
  const docRef = doc(db, "users", uid);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  // console.log("Document data:", docSnap.data());
   
  const {firstName, lastName, email: emailformDB} = docSnap.data()
  userName.innerHTML = `${firstName} ${lastName}`
  email.innerHTML = `${emailformDB}`
  userDesc.innerHTML = "Web Developer Operation supervisor at Connect Logistic"
  
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
}

postBtn.addEventListener("click", postDataHandler)

async function postDataHandler(){

// console.log("function working")

try {
  const docRef = await addDoc(collection(db, "posts"), {
    activeUserId: loggedInUser,
    postContent: postInput.value
  });
  getPostData()
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}

async function getPostData(){

  
const querySnapshot = await getDocs(collection(db, "posts"));
querySnapshot.forEach((doc) => {
  
  console.log(doc.id, " => ", doc.data());

  const {activeUserId, postContent} = doc.data();

  const postElm = document.createElement('div');
  postElm.setAttribute('class','ContentBox');

  postElm.innerHTML = ` <p id="userName" ></p>
  <p id="userEmail" ></p>
  <p id="postDisplay">${postContent}</p>
  `
postContentArea.appendChild(postElm); 

  // doc.data() is never undefined for query doc snapshots

});

}

}