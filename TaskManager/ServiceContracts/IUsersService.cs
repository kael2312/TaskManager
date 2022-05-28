using TaskManager.Identity;
using TaskManager.ViewModels;

namespace TaskManager.ServiceContracts
{
    public interface IUsersService
    {
        Task<ApplicationUser> Authenticate(LoginViewModel loginViewModel);
        Task<ApplicationUser> Register(SignUpViewModel signUpViewModel);
        Task<ApplicationUser> GetUserByEmail(string Email);
    }
}
