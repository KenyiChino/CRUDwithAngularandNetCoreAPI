using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Enquiry.api.Models;

namespace Enquiry.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EnquiryController : ControllerBase
    {
        private readonly EnquiryDbContext _context;

        public EnquiryController(EnquiryDbContext context)
        {
            _context = context;
        }

        // GET: api/Enquiry
        [HttpGet]
        public async Task<ActionResult<IEnumerable<object>>> GetEnquiryMasters()
        {
            var result = await (from enquiry in _context.EnquiryMasters
                                join service in _context.Services
                                on enquiry.ServiceId equals service.ServiceId
                                select new
                                {
                                    enquiry.EnquiryId,
                                    enquiry.CustomerName,
                                    enquiry.MobileNo,
                                    enquiry.City,
                                    enquiry.EnquoryDate,
                                    enquiry.Status,
                                    service.ServiceName,
                                    service.Rate
                                }).ToListAsync();
            return Ok(result);
        }

        // GET: api/Enquiry/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EnquiryMaster>> GetEnquiryMaster(int id)
        {
            var enquiryMaster = await _context.EnquiryMasters.FindAsync(id);

            if (enquiryMaster == null)
            {
                return NotFound();
            }

            return enquiryMaster;
        }

        // PUT: api/Enquiry/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEnquiryMaster(int id, EnquiryMaster enquiryMaster)
        {
            if (id != enquiryMaster.EnquiryId)
            {
                return BadRequest();
            }

            _context.Entry(enquiryMaster).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EnquiryMasterExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Enquiry
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<EnquiryMaster>> PostEnquiryMaster(EnquiryMaster enquiryMaster)
        {
            _context.EnquiryMasters.Add(enquiryMaster);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEnquiryMaster", new { id = enquiryMaster.EnquiryId }, enquiryMaster);
        }

        // DELETE: api/Enquiry/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEnquiryMaster(int id)
        {
            var enquiryMaster = await _context.EnquiryMasters.FindAsync(id);
            if (enquiryMaster == null)
            {
                return NotFound();
            }

            _context.EnquiryMasters.Remove(enquiryMaster);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EnquiryMasterExists(int id)
        {
            return _context.EnquiryMasters.Any(e => e.EnquiryId == id);
        }
    }
}
