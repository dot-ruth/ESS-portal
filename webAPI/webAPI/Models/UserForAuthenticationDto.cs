using System.ComponentModel.DataAnnotations;

namespace webAPI.Models
{
    public class UserForAuthenticationDto
    {
        [Required(ErrorMessage = "Full Name is required.")]
        public string? FullName { get; set; }
        [Required(ErrorMessage = "Password is required.")]
        public string? Password { get; set; }
    }
}
