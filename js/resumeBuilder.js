
//Put this in at some point.


//Biography formatting block
var bio = {
    "name": "Gabe Kagan",
    "role": "Placeholder role",
    "age": 22,
    "contact": "Contact placeholder",
    "picture": "images/197x148.gif",
    "message": "Doopy doopy doop",
    "skills": [
        "Placeholder","More placeholder","Are you done yet?", "Guess not.", 
        "This one shouldn't even show."
        ] //Turn this into an array at some point
};

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedContact = HTMLcontactGeneric.replace("%data%",bio.contact);

//Add the more detailed contacts!
//var formattedMobile = HTMLmobile.replace("%data%",bio.mobile);

var formattedImg = HTMLbioPic.replace("%data%",bio.picture);
var formattedMessage = HTMLWelcomeMsg.replace("%data%",bio.message);

//Work experience
var work = {
    "employer":"InstaEDU",
    "title":"Contract Tutor",
    "dates":"May 2014 -> Present",
    "location":"Virtual",
    "description":"Blah blah blah. Tutor tutor. This is a placeholder.",
};

//Fake work experience to use for Lesson 2 quiz
var work2 = {
    "employer":"Nobody",
    "title":"Not A Job",
    "dates":"Never",
    "location":"Nowhere",
    "description":"It sure pays to not be unemployed!",
};

var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",work.employer);
var formattedWorkTitle = HTMLworkTitle.replace("%data%",work.title);
var formattedWorkDates = HTMLworkDates.replace("%data%",work.dates);
var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.location);
var formattedWorkDescription = HTMLworkDescription.replace("%data%",work.description);

//Education
var school = {
    "name":"University of Rochester",
    "degree":"Bachelor of Arts",
    "dates":"Fall 2009 -> Summer 2013",
    "location":"Rochester, New York, United States of America",
    "major":"History",
};

var formattedSchoolName = HTMLschoolName.replace("%data%",school.name);
var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",school.degree);
var formattedSchoolDates = HTMLschoolDates.replace("%data%",school.dates);
var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",school.location);
var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",school.major);

//Project #1 (placeholder)
var project1 = {
    "name":"Placeholder",
    "dates": "Dates are a type of fruit.",
    "description": "I did stuff",
    "image": "images/350x350.gif",
};

var formattedProject1Name = HTMLprojectTitle.replace("%data%",project1.name);
var formattedProject1Dates = HTMLprojectDates.replace("%data%",project1.dates);
var formattedProject1Description = HTMLprojectDescription.replace("%data%",project1.description);
var formattedProject1Image = HTMLprojectImage.replace("%data%",project1.image);

//Add all this data to the page. Change where it's appended. 
//For some (all?) of these it may be neccesary to move them in-line.
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedImg);
$("#header").append(formattedMessage);

//Append a skill list if we have one.
//For each instance, replace either the placeholder %data%, or the last thing we had.
if(bio.skills.length > 0) {
    for( i = 0; i < bio.skills.length; i++) {
        if (i === 4) { break }  //Don't append more than 4 items.
        var formattedSkills = HTMLskills.replace(("%data%" || bio.skills[i-1]),bio.skills[i]); 
        $("#header").append(formattedSkills);
    } 
}


$("#workExperience").append(HTMLworkStart);
$(".work-entry").append(formattedWorkEmployer);
$(".work-entry").append(formattedWorkTitle);
$(".work-entry").append(formattedWorkDates);
$(".work-entry").append(formattedWorkLocation);
$(".work-entry").append(formattedWorkDescription);

$("#projects").append(HTMLprojectStart);
$(".project-entry").append(formattedProject1Dates);
$(".project-entry").append(formattedProject1Description);
$(".project-entry").append(formattedProject1Image);

$("#education").append(HTMLschoolStart);
$(".education-entry").append(formattedSchoolName);
$(".education-entry").append(formattedSchoolDegree);
$(".education-entry").append(formattedSchoolDates);
$(".education-entry").append(formattedSchoolLocation);
$(".education-entry").append(formattedSchoolMajor);

$("#skillsChart").append(HTMLskillsStart);
$("#skillsChart").append(formattedSchoolName);

$("#letsConnect").append(formattedContact); //Contact info goes at the bottom! 