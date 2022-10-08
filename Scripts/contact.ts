class Contact
{
    //private instance variables
    private fullName: string;
    private contactNumber: string;
    private emailAddress: string;

    //public properties /or/ setters and getters
    get FullName(): string
    {
        return this.fullName;
    }

    set FullName(fullName: string)
    {
        this.fullName = fullName;
    }

    get ContactNumber(): string
    {
        return this.contactNumber;
    }

    set ContactNumber(contactNumber: string)
    {
        this.contactNumber = contactNumber;
    }

    get EmailAddress(): string
    {
        return this.emailAddress;
    }

    set EmailAddress(emailAddress: string)
    {
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
    constructor(fullName: string = "Unknown Name", contactNumber: string = "Contact Number Unavailable", emailAddress: string = "Unkown Email Address")
    {
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
    public toString(): string
    {
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
    public toJSON(): string
    {
        return `${this.fullName}, ${this.contactNumber}, ${this.emailAddress}`;
    }

    /**
     * This method reads data fromm a comma-seperated list and assigns it to class Data Members
     *
     * @param {string} data
     * @memberof Contact
     */
    public fromJSON(data: any):void
    {
        let stringArray: string[] = data.split(",")
        this.fullName = stringArray[0];
        this.contactNumber = stringArray[1];
        this.emailAddress = stringArray[2];
    }

    //private methods
}