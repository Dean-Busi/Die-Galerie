using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using Backend.Interface;

namespace Backend.Services
{
    public class EmailService : IEmailService
    {
        private readonly IConfiguration _configuration;

        public EmailService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task SendEmailAsync(string vorname, string nachName, string absenderEmail, string empfaengerEmail, string betreff, string body)
        {
            var smtpHost = _configuration.GetValue<string>("EMAIL_CONFIGURATION:SMTP_HOST");
            var smtpServerEmail = _configuration.GetValue<string>("EMAIL_CONFIGURATION:SMTP_EMAIL");
            var password = _configuration.GetValue<string>("EMAIL_CONFIGURATION:PASSWORD");
            var port = _configuration.GetValue<int>("EMAIL_CONFIGURATION:PORT");

            var smtpClient = new SmtpClient(smtpHost, port);
            smtpClient.EnableSsl = true;
            smtpClient.UseDefaultCredentials = false;

            smtpClient.Credentials = new NetworkCredential(smtpServerEmail, password);

            // Dieser Teil kommt von ChatGPT ↓
            var message = new MailMessage
            {
                From = new MailAddress(smtpServerEmail, $"Von: {vorname} {nachName}"),
                Subject = betreff,
                Body = body,
                IsBodyHtml = true
            };

            message.To.Add(new MailAddress(empfaengerEmail));
            message.ReplyToList.Add(new MailAddress(absenderEmail));
            // Dieser Teil kommt von ChatGPT ↑

            await smtpClient.SendMailAsync(message);
        }
    }
}

