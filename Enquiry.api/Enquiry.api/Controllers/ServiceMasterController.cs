using Enquiry.api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Enquiry.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiceMasterController : ControllerBase
    {
        private readonly EnquiryDbContext _context;

        public ServiceMasterController(EnquiryDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public List<Services> getAllService()
        {
            var services = _context.Services.ToList();
            return services;
        }

        [HttpPost]
        public IActionResult AddNewService(Services obj)
        {
            _context.Services.Add(obj);
            _context.SaveChanges();
            return Created("Service Created Success", obj);
        }

        [HttpPut]
        public IActionResult UpdateService(int serviceId, Services obj)
        {
            var oldServiceData= _context.Services.SingleOrDefault(x => x.ServiceId == serviceId);
            if (oldServiceData != null)
            {
                oldServiceData.ServiceName = obj.ServiceName;
                oldServiceData.IsActive = obj.IsActive;
                _context.SaveChanges();
                return Ok("Service Update Success");
            } else
            {
                return NotFound("Service Not Found with id " + serviceId);
            }
        }
    }
}
