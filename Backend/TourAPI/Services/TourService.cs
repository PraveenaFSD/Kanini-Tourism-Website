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

        public async Task<ICollection<Tour>> GetAllTourPackages()
        {
           ICollection<Tour> toures= await _tourRepo.GetAll();


            if (toures != null)
            {
                return toures;
            }
            return null;
        }

        public async Task<ICollection<TourDetailsDTO>> GetAllTourPackagesData()
        {
            ICollection<Tour> toures = await _tourRepo.GetAll();

            ICollection<TourDetailsDTO> tourDetails = await _adapterDTO.TourIntoTourDTO(toures);

            if (tourDetails != null)
            {
                return tourDetails;
            }
            return null;
        }

        public async Task<TourDetailsDTO> GetTourpackage(IdDTO key)
        {
            Tour tour = await _tourRepo.Get(key.id);
            TourDetailsDTO tourDetails = await _adapterDTO.TourIntoTourDTO(tour);
            if (tourDetails != null)
            {
                return tourDetails;
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
