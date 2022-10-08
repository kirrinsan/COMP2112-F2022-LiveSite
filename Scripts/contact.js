class Contact {
    //private instance variables
    fullName;
    contactNumber;
    emailAddress;
    //public properties /or/ setters and getters
    get FullName() {
        return this.fullName;
    }
    set FullName(fullName) {
        this.fullName = fullName;
    }
    get ContactNumber() {
        return this.contactNumber;
    }
    set ContactNumber(contactNumber) {
        this.contactNumber = contactNumber;
    }
    get EmailAddress() {
        return this.emailAddress;
    }
    set EmailAddress(emailAddress) {
        this.emailAddress = emailAddress;
    }
    //constructor
    /**
     * Creates an instance of Contact.
     * @param {string} [fullName="Unknown Name"]
     * @param {string} [contactNumber="Contact Number Unavailable"]
     * @param {string} [emailAddress="Unkown Email Address"]
     * @memberof Contact
     */
    constructor(fullName = "Unknown Name", contactNumber = "Contact Number Unavailable", emailAddress = "Unkown Email Address") {
        this.fullName = fullName;
        this.contactNumber = contactNumber;
        this.emailAddress = emailAddress;
    }
    //public methods
    /**
     * This method overrides the built-in toString method for the Contact class
     *
     * @return {string}
     * @memberof Contact
     */
    toString() {
        let output = "";
        output += `Full Name: ${this.fullName}\n`;
        output += `Contact Number: ${this.contactNumber}\n`;
        output += `Email Address: ${this.emailAddress}\n`;
        return output;
    }
    /**
     * This method converts class Data Members to a comma-seperated list compatible with JSOn
     *
     * @return {*}  {string}
     * @memberof Contact
     */
    toJSON() {
        return `${this.fullName}, ${this.contactNumber}, ${this.emailAddress}`;
    }
    /**
     * This method reads data fromm a comma-seperated list and assigns it to class Data Members
     *
     * @param {string} data
     * @memberof Contact
     */
    fromJSON(data) {
        let stringArray = data.split(",");
        this.fullName = stringArray[0];
        this.contactNumber = stringArray[1];
        this.emailAddress = stringArray[2];
    }
}
//# sourceMappingURL=contact.js.map