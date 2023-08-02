using TourAPI.Interfaces;
using TourAPI.Models;

namespace TourAPI.Services
{
    public class TourService : IManageTour
    {
        private readonly IRepo<int, Tour> _tourRepo;

        public TourService(IRepo<int, Tour> tourRepo) {
            _tourRepo= tourRepo;
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
