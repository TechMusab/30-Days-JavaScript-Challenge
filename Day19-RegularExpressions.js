let pattern = /JavaScript/g;
let str = "JavaScript is a versatile language. Many developers love JavaScript because it is powerful.";
let matches = str.match(pattern);
console.log(matches); 
let pattern2 = /\d/g;  
let str2="Matchs 1 2 3 4";
let matches2 = str2.match(pattern2);
function findCapitalizedWords() {
    let pattern = /[A-Z][a-z]*/g;
    let str = "Alice went to the Wonderland and met the Queen of Hearts.";
    
    let matches = str.match(pattern);
    
    console.log(matches);
}

findCapitalizedWords();
let pattern3=/\d+/g
let str3="Matchs 1 2 3 46";
let matches3 = str3.match(pattern3);
console.log(matches3);
let pattern4 = /a+/g;
let str4 = "aaa";
console.log(str4.match(pattern4));  
function capturePhoneNumberParts(phoneNumber) {
    let pattern = /\((\d{3})\)\s(\d{3})-(\d{4})/;
    let matches = phoneNumber.match(pattern);
    
    if (matches) {
        let areaCode = matches[1];
        let centralOfficeCode = matches[2];
        let lineNumber = matches[3];
        
        console.log("Area Code:", areaCode);
        console.log("Central Office Code:", centralOfficeCode);
        console.log("Line Number:", lineNumber);
    } else {
        console.log("No match found.");
    }
}
let phoneNumber = "(123) 456-7890";
capturePhoneNumberParts(phoneNumber);
function captureEmailParts(email) {
    let pattern = /([^@]+)@([^@]+)/;
    let matches = email.match(pattern);
    
    if (matches) {
        let username = matches[1];
        let domain = matches[2];
        
        console.log("Username:", username);  
        console.log("Domain:", domain);     
    } else {
        console.log("No match found.");
    }
}
let email = "user@example.com";
captureEmailParts(email);
//Assertions and boundries
let pattern5 = /^word/g;  
let str5 = "word wordy sword";
console.log(str5.match(pattern5)); 
let pattern6 = /word$/g;   
let str6 = "word wordy word";
console.log(str6.match(pattern6)); 

//practical applications

function validatePassword(password) {
    let pattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!#$%^&*])[A-Za-z\d@!#$%^&*]{8,}$/;
    if (pattern.test(password)) {
        console.log("Password is valid.");
    } else {
        console.log("Password is invalid.");
    }
}
validatePassword(" Passw0rd!"); 
validatePassword("password"); 
validatePassword("PASSWORD1!"); 
validatePassword("P@ss1");      
function isValidURL(url) {
    const pattern = /^(https?:\/\/)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/\S*)?$/;
    return pattern.test(url);
}

// Example usage
console.log(isValidURL("https://example.com"));   
console.log(isValidURL("ftp://example.com"));                
