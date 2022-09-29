using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace webAPI.Models
{
    public partial class ESS_DBContext : IdentityDbContext<user>
    {
        public ESS_DBContext()
        {
        }

        public ESS_DBContext(DbContextOptions options)
            : base(options)
        {
        }

        public virtual DbSet<Emp> Emps { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
//To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=.;Database=ESS_DB;Trusted_Connection=True;TrustServerCertificate=True;MultipleActiveResultSets=true");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Emp>(entity =>
            {
                //entity.HasNoKey();

                entity.ToTable("emp");

                entity.Property(e => e.AlcStartDate).HasColumnType("datetime");

                entity.Property(e => e.AlcStartDateEth)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.AlcType)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.BasicSalary).HasColumnType("numeric(13, 2)");

                entity.Property(e => e.CacellNo)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("CACellNo");

                entity.Property(e => e.Cacity)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("CACity");

                entity.Property(e => e.CahouseNo)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("CAHouseNo");

                entity.Property(e => e.CasubCity)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("CASubCity");

                entity.Property(e => e.CatelNo)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("CATelNo");

                entity.Property(e => e.Caworeda)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("CAWoreda");

                entity.Property(e => e.Cgpa)
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("CGPA");

                entity.Property(e => e.ContEndDate).HasColumnType("datetime");

                entity.Property(e => e.ContEndDateEth)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.ContSartDateEth)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.ContStartDate).HasColumnType("datetime");

                entity.Property(e => e.ContStartDateEth)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.DeptL1)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.DeptL2)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.DeptL3)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.DeptL4)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.DeptL5)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Dob).HasColumnType("datetime");

                entity.Property(e => e.DobEth)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Doe).HasColumnType("datetime");

                entity.Property(e => e.DoeEth)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.DutyStation)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.EduInstitute)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.EmpType)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.EmployeeId)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.EmployeedFor)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.FieldOfStudy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.FullName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Grade)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.IsCostSharing)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.JobPosition)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.MartialStatus)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.PenPfSchem)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PermanentSince).HasColumnType("datetime");

                entity.Property(e => e.PfPenNo)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.Qualification)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ReportsTo)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Scale)
                    .HasMaxLength(5)
                    .IsUnicode(false);

                entity.Property(e => e.Sex)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.SubLedger)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.TinNo)
                    .HasMaxLength(13)
                    .IsUnicode(false);

                entity.Property(e => e.Title)
                    .HasMaxLength(10)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
