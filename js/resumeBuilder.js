
//Biography formatting block. ENCAPSULATE!
var bio = {
    "name": "Gabe Kagan",
    "role": "Web Developer and Content Creator",
    "age": 22,
    "contact": "Contact placeholder",

    "contacts": {
        "phone": "555-555-5555",
        "email": "gabekagan@live.com",
        "github": "GabeKagan",
        "twitter": "N/A",
        "location": "Westford, MA"
    },

    "picture": "images/photo.jpg",
    "message": "Doopy doopy doop",
    "skills": ["Placeholder","More placeholder","Are you done yet?", "Guess not.", 
        "This one shouldn't even show."],

    display: function(){
        var formattedName = HTMLheaderName.replace("%data%",bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
        var formattedContact = HTMLcontactGeneric.replace("%data%",bio.contact); //Remove? Rebuild?
        var formattedImg = HTMLbioPic.replace("%data%",bio.picture);
        var formattedMessage = HTMLWelcomeMsg.replace("%data%",bio.message);

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#header").append(formattedImg);
        $("#header").append(formattedMessage);
        $("#header").append(HTMLskillsStart);

        var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.phone);
        var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
        var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
        var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
        $("#topContacts").append(formattedMobile);
        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formattedGithub);
        $("#topContacts").append(formattedTwitter);
        $("#topContacts").append(formattedLocation);
        //Duplicate of the contact info at the bottom?
        $("#footerContacts").append(formattedMobile);
        $("#footerContacts").append(formattedEmail);
        $("#footerContacts").append(formattedGithub);
        $("#footerContacts").append(formattedTwitter);
        $("#footerContacts").append(formattedLocation);

        //Append a skill list if we have one.
        //Refactor out the boolean compare. ".replace" isn't changing the original.
        //CSS needs to be changed.
        if(bio.skills.length > 0) {
            for( i = 0; i < bio.skills.length; i++) {
                if (i === 4) { break }  //Don't append more than 4 items in order to keep formatting easy.
                var formattedSkills = HTMLskills.replace(("%data%" || bio.skills[i-1]),bio.skills[i]); 
                $("#header").append(formattedSkills);
            } 
        }
    } 
};

//Long list of jobs, mostly fake.
var jobs = {
    jobList: {
        work: {
            "employer":"InstaEDU",
            "title":"Contract Tutor",
            "dates":"May 2014 -> Present",
            "location":"Westford, MA",
            "description":"I provide online tutoring to students on demand. Virtual job."   
        },
        work2: {
            "employer":"Nobody",
            "title":"Not A Job",
            "dates":"Never",
            "location":"Harrison, OH",
            "description":"It sure pays to not be unemployed!"
        },
        work3: {
            "employer":"Everybody",
            "title":"Titleholder",
            "dates":"Whenever",
            "location":"Round Rock, TX",
            "description":"If I put real place names in my location fields, it might make the map happier."
        },
        work4: {
            "employer":"2Everybody",
            "title":"2Titleholder",
            "dates":"2Whenever",
            "location":"Erie, PA",
            "description":"This is also a placeholder."
        },
    },

    display: function() {
        for (var job in jobs.jobList) {
            $("#workExperience").append(HTMLworkStart);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%",(jobs.jobList[job]).title);
            var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",(jobs.jobList[job]).employer);
            //Concatenate this and add it to the page in one clean operation
            $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
            //Add everything else now
            var formattedWorkDates = HTMLworkDates.replace("%data%",(jobs.jobList[job]).dates);
            $(".work-entry:last").append(formattedWorkDates);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%",(jobs.jobList[job]).location);
            $(".work-entry:last").append(formattedWorkLocation);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%",(jobs.jobList[job]).description);
            $(".work-entry:last").append(formattedWorkDescription);        
        }
    }
}

var schools = {
    schoolList: {
        school1: {
            "name":"University of Rochester",
            "degree":"Bachelor of Arts",
            "dates":"Fall 2009 -> Summer 2013",
            "location":"Rochester, New York, United States of America",
            "major":"History",
        },
        school2: {
            "name":"Udacity Online Nanodegree Program",
            "degree":"Front End Web Development",
            "dates":"October 2014 -> Ongoing",
            "location":"Westford, MA",
            "major":"?",
        },
    },

    display: function(){
        for (var school in schools.schoolList) {
            $("#education").append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%",schools.schoolList[school].name);
            $(".education-entry:last").append(formattedSchoolName);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",schools.schoolList[school].degree);
            $(".education-entry:last").append(formattedSchoolDegree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%",schools.schoolList[school].dates);
            $(".education-entry:last").append(formattedSchoolDates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",schools.schoolList[school].location);
            $(".education-entry:last").append(formattedSchoolLocation);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",schools.schoolList[school].major);
            $(".education-entry:last").append(formattedSchoolMajor);
        }

    }
};

//Projects.
var projects = {
    projectList:  {
        //Work on Project 1's formatting.
        project1: {
        "name":"Planepacked - Quantum Artifacts",
        "dates": "February -> July 2012",
        "description": "One of my earlier musical compilations. Quantum Artifacts is an EP of chiptune metal freely available in multiple places on the internet. For the best experience, download it here: <a href='https://www.jamendo.com/en/list/a112206/planepacked-ii-quantum-artifacts'>https://www.jamendo.com/en/list/a112206/planepacked-ii-quantum-artifacts</a>",
        "image": "images/music.jpg"
        },
        project2: {
        "name":"Placeholder",
        "dates": "All times",
        "description": "Coming soon! Check back often.",
        "image": "images/350x350.gif"
        },
        project3: {
        "name":"Placeholder 3",
        "dates": "I really should make up some projects.",
        "description": "I did even more stuff.",
        "image": "images/350x350.gif"
        }
    },

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

//Add all this data to the page. Change where it's appended?
bio.display();
projects.display();
jobs.display();
schools.display();

//"Educational" functions.

//Note to self: This uses an anonymous function.
$(document).click(function(loc) { 
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x,y);
});

//Rewrite to use any list that has location data later
function locationizer(locationizerList) {
    var locationArray = [];
    for (var workEntry in locationizerList) {
        //Tossing out "virtual".
        if(workEntry !== "Virtual"){locationArray.push(locationizerList[workEntry].location);} 
    }
    return locationArray; 
}

//Capitalizes the last name in case you want to do that for some reason.
function inName(iName) {
    var changeName = bio.name.split(" ");
    var lastName = changeName.pop().toUpperCase();
    var inNameResult = changeName + " " + lastName;
    return inNameResult;
}

//This doesn't work. It takes an incredibly long time to load. Fix it!
$("#mapDiv").append(googleMap);

//$("#main").append(internationalizeButton); 