using TourAPI.Interfaces;
using TourAPI.Models;
using TourAPI.Models.NewFolder;

namespace TourAPI.Services
{
    public class TourService : IManageTour
    {
        private readonly IRepo<int, Tour> _tourRepo;
        private readonly IAdapterDTO _adapterDTO;

        public TourService(IRepo<int, Tour> tourRepo, IAdapterDTO adapterDTO) {
            _tourRepo= tourRepo;
            _adapterDTO= adapterDTO;
        }
        public async Task<Tour> AddTourpackage(Tour item)
        {
            Tour tour=await _tourRepo.Add(item);
            if(tour!=null)
            {
                return tour;
            }
            return null;
        }

        public async Task<ICollection<TourAddedDTO>> GetAllTourPackages()
        {
           ICollection<Tour> toures= await _tourRepo.GetAll();
            ICollection<TourAddedDTO> toursDTO =await  _adapterDTO.TouIntoLoanDTO(toures);


            if (toursDTO != null)
            {
                return toursDTO;
            }
            return null;
        }

        public async Task<bool> UpdateTourpackage(Tour item)
        {
            Tour tour = await _tourRepo.Update(item);
            if (tour != null)
            {
                return true;
            }
            return false;
        }
    }

}
