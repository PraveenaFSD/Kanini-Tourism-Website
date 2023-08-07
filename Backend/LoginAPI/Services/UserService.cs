using LoginAPI.Interfaces;
using LoginAPI.Models;
using LoginAPI.Models.DTO;
using System.Numerics;
using System.Security.Cryptography;
using System.Text;

namespace LoginAPI.Services
{
    public class UserService : IManageUser
    {
        private readonly IRepo<string, User> _userRepo;
        private readonly ITokenGenerate _tokenGenerate;
        private readonly IRepo<int, Agent> _agentRepo;

        public UserService(IRepo<string, User> repo, IRepo<int,Agent> agentRepo, ITokenGenerate tokenGenerate)
        {
            _userRepo = repo;
            _tokenGenerate = tokenGenerate;
            _agentRepo = agentRepo;


        }
        public async Task<UserDTO> LoginUser(UserDTO user)
        {
            UserDTO userDetails = null;
            bool s = false;
            var userData = await _userRepo.Get(user.UserEmail);
            var hmac = new HMACSHA512(userData.PasswordKey);
            if (userData != null)
            {
                var password = hmac.ComputeHash(Encoding.UTF8.GetBytes(user.Password));
                for (int i = 0; i < password.Length; i++)
                {
                    if (password[i] != userData.PasswordHash[i])
                    {
                        return null;
                    }
                }
            }

            if (userData.Role == "agent" || (userData.Role == "traveler") || (userData.Role == "admin"))
            {
                Agent agent = await _agentRepo.Get(user.UserId);
                if (agent != null && agent.Status == "approved".ToLower() || (userData.Role == "traveler") || (userData.Role == "admin"))
                {
                    userDetails = new UserDTO();
                    userDetails.UserId = userData.UserId;
                    userDetails.Role = userData.Role;
                    userDetails.Token = await _tokenGenerate.GenerateToken(userDetails);
                    return userDetails;
                }
            }


            return null;
        }

        public async Task<UserDTO> UpdateUserPassword(UserDTO user)
        {
            User userData = await _userRepo.Get(user.UserEmail);
            if (userData != null)
            {
                var hmac = new HMACSHA512();

                userData.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(user.Password));
                userData.PasswordKey = hmac.Key;
                var updateduser = await _userRepo.Update(userData);
                if (updateduser != null)
                {
                    UserDTO userResult = new UserDTO();
                    userResult.UserId = userData.UserId;
                    userResult.Role = userData.Role;
                    return userResult;

                }
            }

            return null;
        }
    }
}
