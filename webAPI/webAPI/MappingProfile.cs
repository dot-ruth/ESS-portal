using AutoMapper;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;
using webAPI.Models;

namespace webAPI
{
    public class MappingProfile: Profile
    {
        public MappingProfile()
        {
            CreateMap<UserForRegistrationDto, user>()
                .ForMember(u => u.UserName, opt => opt.MapFrom(x => $"{x.FullName}"));
        }
    }
}
