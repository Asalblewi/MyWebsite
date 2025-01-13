using Microsoft.AspNetCore.Mvc.RazorPages;

namespace MyWebsite
{
    public class IndexModel : PageModel
    {
        // A property to store data to display on the Razor Page
        public string WelcomeMessage { get; set; }

        // This method runs when the page is accessed via HTTP GET
        public void OnGet()
        {
            WelcomeMessage = "Welcome to my ASP.NET Core Razor Page!";
        }
    }
}