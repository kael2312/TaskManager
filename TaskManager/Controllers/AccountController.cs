using Microsoft.AspNetCore.Mvc;
using TaskManager.Identity;
using TaskManager.ServiceContracts;
using TaskManager.ViewModels;

namespace TaskManager.Controllers
{
    public class AccountController : Controller
    {
        private readonly IUsersService _usersService;
        

        public AccountController(IUsersService usersService)
        {
            this._usersService = usersService;
            
        }

        [HttpPost]
        [Route("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody] LoginViewModel loginViewModel)
        {
            if (loginViewModel.Username != null || loginViewModel.Password != null)
            {
                var user = await _usersService.Authenticate(loginViewModel);
                if (user == null)
                    return BadRequest(new { message = "Username or password is incorrect" });                

                return Ok(user);
            }
            else
            {
                return BadRequest(new { message = "Username or password is incorrect" });
            }
        }
    }
}
