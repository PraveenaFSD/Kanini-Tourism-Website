using LoginAPI.Interfaces;
using LoginAPI.Models;
using LoginAPI.Models.DTO;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LoginAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("MyCORS")]

    public class UserController : ControllerBase
    {
        private readonly IManageAgent _agentService;
        private readonly IManageTraveler _travelerService;
        private readonly IManageTraveler _pService;
        private readonly IManageUser _manageService;

        public UserController(IManageAgent agentService, IManageTraveler travelerService, IManageUser manageService)
        {
            _agentService = agentService;
            _travelerService = travelerService;
            _manageService = manageService;
        }
        [HttpPost("AddAgent")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<AgentDTO>> AddAgentDetails(AgentDTO doctorDetail)
        {
            var agent = await _agentService.AddAgent(doctorDetail);
            if (agent != null)
            {
                return Created("Agent", agent);
            }
            return BadRequest(new Error(2, "Agent Details not added "));


        }
        [HttpPost("AddTraveler")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<TravelerDTO>> AddTravelerDetails(TravelerDTO travelerDTO)
        {
            var traveler = await _travelerService.AddTraveler(travelerDTO);
            if (traveler != null)
            {
                return Created("Traveler", traveler);
            }
            return BadRequest(new Error(2, "Traveler Details not added "));

        }
        [HttpPost("LoginUser")]
        [ProducesResponseType(StatusCodes.Status202Accepted)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<UserDTO>> LoginUser(UserDTO key)
        {
            var user = await _manageService.LoginUser(key);
            if (user != null)
            {
                return Ok(user);
            }
            return BadRequest(new Error(2, "Login UnSuccessfull"));

        }
        [HttpPut("ApproveAgent")]
        [ProducesResponseType( StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> ApproveAgent(UpdateAgentDTO updateDTO)
        {
            var agent = await _agentService.ApproveAgent(updateDTO);
            if (agent)
            {
                return Accepted("Approved Agent Details Succecssfully");
            }
            return BadRequest(new Error(2, "Cannot Approve Agent "));

        }
        [HttpPut("UpdatePassword")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> UpdatePasswprd(UserDTO userDTO)
        {
            var user = await _manageService.UpdateUserPassword(userDTO);
            if (user != null)
            {
                return Accepted("UpdatePassword Details Succecssfully");
            }
            return BadRequest(new Error(2, "Cannot UpdatePassword  "));


        }
       
    }
}
