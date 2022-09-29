using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace webAPI.Models
{
    public partial class Emp
    {
        [Key]
        public string? EmployeeId { get; set; }
        public string? FullName { get; set; }
        public string? ReportsTo { get; set; }
        public string? Sex { get; set; }
        public string? Title { get; set; }
        public string? DobEth { get; set; }
        public DateTime? Dob { get; set; }
        public string? DoeEth { get; set; }
        public DateTime? Doe { get; set; }
        public string? TinNo { get; set; }
        public string? PfPenNo { get; set; }
        public string? JobPosition { get; set; }
        public string? Grade { get; set; }
        public string? Scale { get; set; }
        public decimal? BasicSalary { get; set; }
        public string? DeptL1 { get; set; }
        public string? DeptL2 { get; set; }
        public string? DeptL3 { get; set; }
        public string? DeptL4 { get; set; }
        public string? DeptL5 { get; set; }
        public string? DutyStation { get; set; }
        public string? EmpType { get; set; }
        public string? ContSartDateEth { get; set; }
        public DateTime? ContStartDate { get; set; }
        public string? ContEndDateEth { get; set; }
        public DateTime? ContEndDate { get; set; }
        public int? WorkingHrPerMth { get; set; }
        public int? WorkingDaysPerMth { get; set; }
        public string? EmployeedFor { get; set; }
        public string? Qualification { get; set; }
        public string? FieldOfStudy { get; set; }
        public string? EduInstitute { get; set; }
        public string? Cgpa { get; set; }
        public string? MartialStatus { get; set; }
        public DateTime? PermanentSince { get; set; }
        public string? IsCostSharing { get; set; }
        public string? AlcStartDateEth { get; set; }
        public DateTime? AlcStartDate { get; set; }
        public string? AlcType { get; set; }
        public string? PenPfSchem { get; set; }
        public string? Cacity { get; set; }
        public string? CasubCity { get; set; }
        public string? Caworeda { get; set; }
        public string? CahouseNo { get; set; }
        public string? CatelNo { get; set; }
        public string? CacellNo { get; set; }
        public string? SubLedger { get; set; }
        public string? ContStartDateEth { get; set; }
      //  public Address? Personaladdress { get; set; }

    }
}
