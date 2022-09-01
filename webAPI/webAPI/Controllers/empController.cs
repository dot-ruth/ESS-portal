using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using webAPI.Models;

namespace webAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class empController : ControllerBase
    {
        private readonly ESS_DBContext context;

        public empController(ESS_DBContext context)
        {
            this.context = context;
        }

        
        [HttpGet("{id}")]
        public dynamic getsingleData(string id)
        {
            return context.Emps.Where(x => x.EmployeeId == id);
        }

        [Route("getfullName")]
        [HttpGet]
        public dynamic getfullName(string id)
        {
            return context.Emps.Where(x => x.EmployeeId == id).Select(x => new
            {
                x.FullName
            }).ToArray().ToHashSet();
        }

        [Route("gethonorific")]
        [HttpGet]
        public dynamic gethonorific()
        {
            return context.Emps.Select(x => new
            {
                x.Title
            }).ToArray().ToHashSet(); 
        }

        [Route("getEmptype")]
        [HttpGet]
        public dynamic getEmptype()
        {
            return context.Emps.Select(x => new
            {
                x.EmpType
            }).ToArray().ToHashSet();
        }

        [Route("profession_Cat")]
        [HttpGet]
        public dynamic profession_Cat()
        {
            return context.Emps.Select(x => new
            {
                x.FieldOfStudy
            }).ToArray().ToHashSet();
        }

        [Route("duty_station")]
        [HttpGet]
        public dynamic duty_station()
        {
            return context.Emps.Select(x => new
            {
                x.DutyStation
            }).ToArray().ToHashSet();
        }

        [Route("getDept")]
        [HttpGet]
        public dynamic getDept()
        {
            return context.Emps.Select(x => new
            {
                x.DeptL1
            }).ToArray().ToHashSet();
        }

        [Route("getjob_pos")]
        [HttpGet]
        public dynamic getjob_pos()
        {
            return context.Emps.Select(x => new
            {
                x.JobPosition
            }).ToArray().ToHashSet();
        }

        [Route("getgrade")]
        [HttpGet]
        public dynamic getgrade()
        {
            return  context.Emps.Select(x => new
            {
                x.Grade
            }).ToArray().ToHashSet();
        }

        [Route("pfScheme")]
        [HttpGet]
        public dynamic getpfScheme()
        {
            return context.Emps.Select(x => new
            {
                x.PenPfSchem
            }).ToArray().ToHashSet();
        }

        [Route("sex")]
        [HttpGet]
        public dynamic getsex()
        {
            return context.Emps.Select(x => new
            {
                x.Sex
            }).ToArray().ToHashSet();
        }

        [Route("reportsto")]
        [HttpGet]
        public dynamic getreportsto()
        {
            return context.Emps.Select(x => new
            {
                x.ReportsTo
            }).ToArray().ToHashSet();
        }

        [HttpPut]
        public async Task<ActionResult<List<Emp>>> Update(Emp req)
        {
            var emp = await context.Emps.FindAsync(req.EmployeeId);
            if (emp == null) return BadRequest("Employee not Found");
            emp.FullName = req.FullName;
            await context.SaveChangesAsync();
            return Ok(await context.Emps.FindAsync(req.EmployeeId));
        }
    }
}
