using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using webAPI.Models;


var policyName = "_myAllowSpecificOrigins";
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddIdentity<user, IdentityRole>()
    .AddEntityFrameworkStores<ESS_DBContext>();

builder.Services.AddDbContext<ESS_DBContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle

builder.Services.AddCors(p =>
{
    p.AddPolicy(name: policyName,
        builder =>
        {
            builder
        .WithOrigins("*")
        .AllowAnyMethod()
        .AllowAnyHeader();
        });
});
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(policyName);

app.UseAuthorization();

app.MapControllers();

app.Run();
