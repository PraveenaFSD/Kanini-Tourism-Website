using System.ComponentModel.DataAnnotations;

namespace LoginAPI.Models.DTO
{
    public class UserDTO:User
    {
        [Required(ErrorMessage = "Password string is required")]
        public string? PasswordString { get; set; }
    }
}
