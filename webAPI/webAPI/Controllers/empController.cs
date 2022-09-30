using FluentNHibernate.Automapping;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webAPI.Models;
using IHostingEnvironment = Microsoft.AspNetCore.Hosting.IHostingEnvironment;

namespace webAPI.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class empController : ControllerBase
    {
        private readonly ESS_DBContext context;
        private readonly IHostingEnvironment env;
        

        public empController(ESS_DBContext context, IHostingEnvironment _environment)
        {
            this.context = context;
            this.env = _environment;
        }

        [HttpPost]
        public async Task<ActionResult<List<Emp>>> addEmployee(Emp req)
        { 
            context.Emps.Add(req);
            await context.SaveChangesAsync();
            return Ok("Employee Added");

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

        [HttpPut("{id}")]
        public async Task<ActionResult<List<Emp>>> Updateemp(string id,Emp req)
        {
            var employee = await context.Emps.FindAsync(id);
            employee.FullName = req.FullName;
            employee.ReportsTo = req.ReportsTo;
            employee.Sex = req.Sex;
            employee.Title = req.Title;
            employee.Dob = req.Dob;
            employee.DobEth = req.DobEth;
            employee.Doe = req.Doe;
            employee.DoeEth = req.DoeEth;
            employee.TinNo = req.TinNo;
            employee.PfPenNo = req.PfPenNo;
            employee.JobPosition = req.JobPosition;
            employee.Grade = req.Grade;
            employee.Scale = req.Scale;
            employee.BasicSalary = req.BasicSalary;
            employee.DeptL1 = req.DeptL1;
            employee.DutyStation = req.DutyStation;
            employee.EmpType = req.EmpType;
            employee.ContStartDate = req.ContStartDate;
            employee.ContStartDateEth = req.ContStartDateEth;
            employee.ContEndDate = req.ContEndDate;
            employee.ContEndDateEth = req.ContEndDateEth;
            employee.FieldOfStudy = req.FieldOfStudy;
            employee.PermanentSince = req.PermanentSince;
            employee.AlcStartDate = req.AlcStartDate;
            employee.AlcStartDateEth = req.AlcStartDateEth;
            employee.PenPfSchem = req.PenPfSchem;
            await context.SaveChangesAsync();
            return Ok(employee);
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Emp>>> deleteEmp(string id)
        {
            var employee = await context.Emps.FindAsync(id);
            context.Emps.Remove(employee);
            await context.SaveChangesAsync();

            return Ok("Employee Deleted");

        }



    }
}
