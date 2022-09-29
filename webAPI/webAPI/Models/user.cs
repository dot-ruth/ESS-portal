using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore.Metadata;

namespace webAPI.Models
{
    public class user: IdentityUser
    {
        public string fullname { get; set; }
    }
}
