using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace webAPI.Migrations
{
    public partial class initialmigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "emp",
                columns: table => new
                {
                    EmployeeId = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: true),
                    FullName = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: true),
                    ReportsTo = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: true),
                    Sex = table.Column<string>(type: "varchar(10)", unicode: false, maxLength: 10, nullable: true),
                    Title = table.Column<string>(type: "varchar(10)", unicode: false, maxLength: 10, nullable: true),
                    DobEth = table.Column<string>(type: "varchar(10)", unicode: false, maxLength: 10, nullable: true),
                    Dob = table.Column<DateTime>(type: "datetime", nullable: true),
                    DoeEth = table.Column<string>(type: "varchar(10)", unicode: false, maxLength: 10, nullable: true),
                    Doe = table.Column<DateTime>(type: "datetime", nullable: true),
                    TinNo = table.Column<string>(type: "varchar(13)", unicode: false, maxLength: 13, nullable: true),
                    PfPenNo = table.Column<string>(type: "varchar(15)", unicode: false, maxLength: 15, nullable: true),
                    JobPosition = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: true),
                    Grade = table.Column<string>(type: "varchar(10)", unicode: false, maxLength: 10, nullable: true),
                    Scale = table.Column<string>(type: "varchar(5)", unicode: false, maxLength: 5, nullable: true),
                    BasicSalary = table.Column<decimal>(type: "numeric(13,2)", nullable: true),
                    DeptL1 = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: true),
                    DeptL2 = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: true),
                    DeptL3 = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: true),
                    DeptL4 = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: true),
                    DeptL5 = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: true),
                    DutyStation = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    EmpType = table.Column<string>(type: "varchar(30)", unicode: false, maxLength: 30, nullable: true),
                    ContSartDateEth = table.Column<string>(type: "varchar(10)", unicode: false, maxLength: 10, nullable: true),
                    ContStartDate = table.Column<DateTime>(type: "datetime", nullable: true),
                    ContEndDateEth = table.Column<string>(type: "varchar(10)", unicode: false, maxLength: 10, nullable: true),
                    ContEndDate = table.Column<DateTime>(type: "datetime", nullable: true),
                    WorkingHrPerMth = table.Column<int>(type: "int", nullable: true),
                    WorkingDaysPerMth = table.Column<int>(type: "int", nullable: true),
                    EmployeedFor = table.Column<string>(type: "varchar(30)", unicode: false, maxLength: 30, nullable: true),
                    Qualification = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    FieldOfStudy = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: true),
                    EduInstitute = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    CGPA = table.Column<string>(type: "varchar(5)", unicode: false, maxLength: 5, nullable: true),
                    MartialStatus = table.Column<string>(type: "varchar(30)", unicode: false, maxLength: 30, nullable: true),
                    PermanentSince = table.Column<DateTime>(type: "datetime", nullable: true),
                    IsCostSharing = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: true),
                    AlcStartDateEth = table.Column<string>(type: "varchar(10)", unicode: false, maxLength: 10, nullable: true),
                    AlcStartDate = table.Column<DateTime>(type: "datetime", nullable: true),
                    AlcType = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    PenPfSchem = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    CACity = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    CASubCity = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    CAWoreda = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    CAHouseNo = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    CATelNo = table.Column<string>(type: "varchar(30)", unicode: false, maxLength: 30, nullable: true),
                    CACellNo = table.Column<string>(type: "varchar(30)", unicode: false, maxLength: 30, nullable: true),
                    SubLedger = table.Column<string>(type: "varchar(30)", unicode: false, maxLength: 30, nullable: true),
                    ContStartDateEth = table.Column<string>(type: "varchar(30)", unicode: false, maxLength: 30, nullable: true)
                },
                constraints: table =>
                {
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "emp");
        }
    }
}
