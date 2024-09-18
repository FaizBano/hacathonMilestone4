// get refernces to the form and display area
const form =document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement=document.getElementById("resumeDisplay") as HTMLDivElement;
// Handling form submission
form.addEventListener("submit",(event: Event)=>{
    event.preventDefault();
    // collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const phone =(document.getElementById("phone no") as HTMLInputElement).value;
    const email =(document.getElementById("email") as HTMLInputElement).value;
    const education =(document.getElementById("education") as HTMLInputElement).value;
    const skills =(document.getElementById("skills") as HTMLInputElement).value;
    const experience =(document.getElementById("experience") as HTMLInputElement).value;
// generate the resume contant dynamically

const reumeFormHTML=`
<h2><b><u>Editable Resume<u></b></h2>
<h2><b><u>Personal Inforamtion</></b></h2>
<p><b>Name:</b><span contenteditable="true">${name}</span></p>
<p><b>Phone No.:</b><span contanteditable="true">${phone}</span></p>
<p><b>Email:</b><span contenteditable="true">${email}</span></p>

<h2><b><u>Education</u></b></h2>
<p contenteditable = "true">${education}</p>

<h2><b><u>Skills</u></b></h2>
<p contenteditable = "true">${skills}</p>

<h2><b><u>Experience</u></b></h2>
<p contenteditable = "true">${experience}</p>

`;
// display generated Resume

if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = reumeFormHTML;
}
else{ 
     console.error("the Reume Element is missing");
    }

});