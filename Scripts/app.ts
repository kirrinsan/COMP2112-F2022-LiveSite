//IIFE -- Immediately Invoked Function Expression
//aka > Self Executing Function
(function()
{
    
    /**
     * This method saves our data to the localStorage
     *
     * @param {any[]} contactList
     */
    function SaveContactListData(contactList: any[])
    {
        let count = 0;

        for (const contact of contactList) 
        {
            let newContact = new Contact(contact.FullName, contact.ContactNumber, contact.EmailAddress);
            //console.log(newContact.toString());
            localStorage.setItem(count.toString(), newContact.toJSON());
            count++;
        }
    }

    
    /**
     * This method reads our data from the localStorage and returns a Contact Array
     *
     * @return {*}  {Contact[]}
     */
    function LoadContactListData(): Contact[]
    {
        // Create an empty Contact Array Container
        let ContactArray = new Array<Contact>(); //or Array[];

        let keys = Object.keys(localStorage)

        for (let key of keys) 
        {
            let newContact = new Contact();
            //console.log(localStorage.getItem(key));
            newContact.fromJSON(localStorage.getItem(key));
            //console.log(newContact.toString());
            ContactArray.push(newContact);
        }

        return ContactArray;
    }

    /**
     * This method loads the Header and the Page content
     *
     */
    function LoadHeader():void
    {
        console.log("Loading Header..");
        // jQuery gets header from folder, run function to display html data
        $.get("./Views/components/header.html", function(html_data)
        {
            $("header").html(html_data);

            // Activate Home link on initial load
            $("li>a#Home").addClass("active");

            $("li>a").on("click", function(event)
            {
                event.preventDefault();
                // Change title
                document.title  = $(this).prop("id") as string;

                // Change URL
                history.pushState({}, "", "/" + document.title);

                // Remove active class from each list item
                $("li>a").each(function(){
                    $(this).removeClass("active");
                })

                // Activate current link
                $("li>a#" + document.title).addClass("active");

                LoadContent();
            })
        })

    }

    /**
     * This method injects the Page content
     *
     */
    function LoadContent():void
    {
        console.log("Loading Content..");

        let contentLink = document.title.toLowerCase();

        $.get("./Views/content/" + contentLink + ".html", function (html_data)
        {
            $("main").html(html_data);
        });
    }

    /**
     * This method loads and injects footer content
     *
     */
    function LoadFooter():void
    {
        console.log("Loading Footer..");

        $.get("./Views/components/footer.html", function(html_data)
        {
            $("footer").html(html_data);
        })
    }

    function Start()
    {
        console.log("App Started!");

        // Initial Load
        document.title = "Home";
        // Change URL
        history.pushState({}, "", "/Home");

        LoadContent();

        LoadHeader();

        // LoadContent();

        LoadFooter();
    }

    window.addEventListener("load", Start);

})();