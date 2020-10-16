using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
  public class UserForRegisterDto
  {
    [Required]
    public string Username { get; set; }

    [Required]
    [StringLength(32, MinimumLength = 8, ErrorMessage = "You must specify password between 8 and 32 charaters")]
    public string Password { get; set; }

  }
}