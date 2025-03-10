using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Interface;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/email")]
    public class EmailController : ControllerBase
    {

        private readonly IEmailService _emailService;

        public EmailController(IEmailService emailService)
        {
            _emailService = emailService;
        }

        [HttpPost]
        public async Task <IActionResult> SendEmail(string vorname, string nachName, string absenderEmail, string empfaengerEmail, string betreff, string body)
        {
            await _emailService.SendEmailAsync(vorname, nachName, absenderEmail, empfaengerEmail, betreff, body);
            
            return Ok("Die Email wurde gesendet.");
        }
    }
}

