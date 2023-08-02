using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TourAPI.Interfaces;
using TourAPI.Models;
using TourAPI.Models.NewFolder;
using TourAPI.Services;

namespace TourAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TourController : ControllerBase
    {
        private readonly IManageTour _tourService;
        private readonly IAdapterDTO _adapterDTO;

        public TourController(IManageTour  tourService,IAdapterDTO adapterDTO)
        {
            _tourService = tourService;
            _adapterDTO=adapterDTO;


        }
        [HttpPost("AddTourPackage")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Tour>> AddTourDetails(Tour tourDetail)
        {
            var tour = await _tourService.AddTourpackage(tourDetail);
            if (tour != null)
            {
                return Created("Tour", tour);
            }
            return BadRequest(new Error(2, "Tour Package Details not added "));


        }
        [HttpPut("UpdateTourPackage")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> UpdateTourPackage(Tour tour)
        {
            var tourResult = await _tourService.UpdateTourpackage(tour);
            if (tourResult != null)
            {
                return Accepted("UpdateTour Package Details was Succecssfull");
            }
            return BadRequest(new Error(2, "Cannot UpdateTour Package  "));

        }
        [HttpGet("GetAllTourPackage")]
        [ProducesResponseType(typeof(ICollection<Tour>), StatusCodes.Status200OK)]

        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ICollection<Tour>>> GetAllTourPackage()
        {
            var tourdetails = await _tourService.GetAllTourPackages();
            if (tourdetails != null)
            {
                return Ok(tourdetails);
            }
            return NotFound(new Error(1, "There is notour details currently "));

        }
        [HttpGet("GetAllTourPackageAsDatas")]
        [ProducesResponseType(typeof(ICollection<TourAddedDTO>), StatusCodes.Status200OK)]

        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ICollection<TourAddedDTO>>> GetAllTourPackageAsDatas()
        {
            var tourdetails = await _tourService.GetAllTourPackages();
            if (tourdetails != null)
            {
                return Ok(tourdetails);
            }
            return NotFound(new Error(1, "There is notour details currently "));

        }
    }
}
