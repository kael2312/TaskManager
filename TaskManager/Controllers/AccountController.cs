﻿using Microsoft.AspNetCore.Mvc;
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

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody] SignUpViewModel signUpViewModel)
        {
            var user = await _usersService.Register(signUpViewModel);
            if (user == null)
                return BadRequest(new { message = "Invalid Data" });

            //HttpContext.User = await _applicationSignInManager.CreateUserPrincipalAsync(user);
            //var tokens = _antiforgery.GetAndStoreTokens(HttpContext);
            //Response.Headers.Add("Access-Control-Expose-Headers", "XSRF-REQUEST-TOKEN");
            //Response.Headers.Add("XSRF-REQUEST-TOKEN", tokens.RequestToken);

            return Ok(user);
        }

        [HttpGet]
        [Route("api/getUserByEmail/{Email}")]
        public async Task<IActionResult> GetUserByEmail(string Email)
        {
            var user = await _usersService.GetUserByEmail(Email);
            return Ok(user);
        }

        //[Route("api/getallemployees")]
        //public async Task<IActionResult> GetAllEmployees()
        //{
        //    List<ApplicationUser> users = this.db.Users.ToList();
        //    List<ApplicationUser> employeeUsers = new List<ApplicationUser>();

        //    foreach (var item in users)
        //    {
        //        if ((await this.applicationUserManager.IsInRoleAsync(item, "Employee")))
        //        {
        //            employeeUsers.Add(item);
        //        }
        //    }
        //    return Ok(employeeUsers);
        //}
    }
}
