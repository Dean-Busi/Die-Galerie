using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Interface
{
    public interface IEmailService
    {
        Task SendEmailAsync(
            string vorname, 
            string nachName, 
            string absenderEmail, 
            string empfaengerEmail, 
            string betreff, 
            string body);
    }
}

