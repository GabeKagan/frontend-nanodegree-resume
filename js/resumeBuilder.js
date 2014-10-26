
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
var formattedImg = HTMLbioPic.replace("%data%",bio.picture);
var formattedMessage = HTMLWelcomeMsg.replace("%data%",bio.message);

//Detailed contacts.
var contacts = {
    "phone": "555-555-5555",
    "email": "gabekagan@live.com",
    "github": "GabeKagan",
    "twitter": "N/A",
    "location": "Westford, MA"
};

//Add the more detailed contacts!
var formattedMobile = HTMLmobile.replace("%data%",contacts.phone);
var formattedEmail = HTMLemail.replace("%data%",contacts.email);
var formattedGithub = HTMLgithub.replace("%data%",contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%",contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%",contacts.location);

//Make this look better.
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedImg);
$("#header").append(formattedMessage);
$("#header").append(HTMLskillsStart);

//Long list of jobs, mostly fake.
var jobList = {
    
    work: {
        "employer":"InstaEDU",
        "title":"Contract Tutor",
        "dates":"May 2014 -> Present",
        "location":"Virtual",
        "description":"Blah blah blah. Tutor tutor. This is a placeholder."   
    },
    work2: {
        "employer":"Nobody",
        "title":"Not A Job",
        "dates":"Never",
        "location":"Nowhere",
        "description":"It sure pays to not be unemployed!"
    },
    work3: {
        "employer":"Everybody",
        "title":"Titleholder",
        "dates":"Whenever",
        "location":"Locationland",
        "description":"This is also a placeholder."
    },
    work4: {
        "employer":"2Everybody",
        "title":"2Titleholder",
        "dates":"2Whenever",
        "location":"2Locationland",
        "description":"2This is also a placeholder."
    },

    //Work bloc needs special code. Encapsulate this eventually.
    display: function() {
        for (var job in jobList) {

            $("#workExperience").append(HTMLworkStart);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%",(jobList[job]).title);
            var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",(jobList[job]).employer);
            //Concatenate this and add it to the page in one clean operation
            $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
            //Add everything else now
            var formattedWorkDates = HTMLworkDates.replace("%data%",(jobList[job]).dates);
            $(".work-entry:last").append(formattedWorkDates);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%",(jobList[job]).location);
            $(".work-entry:last").append(formattedWorkLocation);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%",(jobList[job]).description);
            $(".work-entry:last").append(formattedWorkDescription);        
        }
    }
}

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

//Needs to be coded properly? This parenthesis formatting is weird.
$(document).click(function(loc) { 
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x,y);
});


//Projects.
var projects = {

    projectList:  {

        project1: {
        "name":"Placeholder",
        "dates": "Dates are a type of fruit.",
        "description": "I did stuff.",
        "image": "images/350x350.gif"
        },
        project2: {
        "name":"Placeholder 2",
        "dates": "I wonder if dates are any good.",
        "description": "I did more stuff.",
        "image": "images/350x350.gif"
        },
        project3: {
        "name":"Placeholder 3",
        "dates": "I really should make up some projects.",
        "description": "I did even more stuff.",
        "image": "images/350x350.gif"
        }
    },
    //Encapsulation? Can you have a function inside an object?
    //When expressed as projects.display(), this adds an extra blank project that shouldn't exist.
    //It's parsing the function as part of the project array.
    display: function() {
        for (var newProject in projects.projectList)
        {
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%",(projects.projectList[newProject]).name);
            $(".project-entry:last").append(formattedProjectTitle);
            var formattedProjectDates = HTMLprojectDates.replace("%data%",(projects.projectList[newProject]).dates);
            $(".project-entry:last").append(formattedProjectDates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%",(projects.projectList[newProject]).description);
            $(".project-entry:last").append(formattedProjectDescription);
            var formattedProjectImage = HTMLprojectImage.replace("%data%",(projects.projectList[newProject]).image);
            $(".project-entry:last").append(formattedProjectImage);
        }
    }
    
}
projects.display();
jobList.display();

//Add all this data to the page. Change where it's appended. 

//Append a skill list if we have one.
//For each instance, replace either the placeholder %data%, or the last thing we had.
if(bio.skills.length > 0) {
    for( i = 0; i < bio.skills.length; i++) {
        if (i === 4) { break }  //Don't append more than 4 items.
        var formattedSkills = HTMLskills.replace(("%data%" || bio.skills[i-1]),bio.skills[i]); 
        $("#header").append(formattedSkills);
    } 
}

//Contacts
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);



//Rewrite to use any list that has location data later
function locationizer(locationizerList) {
    var locationArray = [];
    for (var workEntry in locationizerList) {
       locationArray.push(locationizerList[workEntry].location);
    }
    return locationArray; 
}

//Work bloc ends here.

//Capitalizes the last name in case you want to do that for some reason.
function inName(iName) {
    var changeName = bio.name.split(" ");
    var lastName = changeName.pop().toUpperCase();
    var inNameResult = changeName + " " + lastName;
    return inNameResult;
}

$("#education").append(HTMLschoolStart);
$(".education-entry").append(formattedSchoolName);
$(".education-entry").append(formattedSchoolDegree);
$(".education-entry").append(formattedSchoolDates);
$(".education-entry").append(formattedSchoolLocation);
$(".education-entry").append(formattedSchoolMajor);


$("#letsConnect").append(formattedContact); //Contact info goes at the bottom!
//This doesn't work. It shows a blank (grey) application.
$("#mapDiv").append(googleMap);

//$("#main").append(internationalizeButton); 