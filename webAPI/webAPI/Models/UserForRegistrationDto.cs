using System.ComponentModel.DataAnnotations;

namespace webAPI.Models
{
    public class UserForRegistrationDto
    {

        [Required(ErrorMessage = "Full Name is required.")]
        public string? FullName { get; set; }

        [Required(ErrorMessage = "Password is required")]
        public string? Password { get; set; }

        [Compare("Password", ErrorMessage = "The password and confirmation password do not match.")]
        public string? ConfirmPassword { get; set; }
    
}
}
