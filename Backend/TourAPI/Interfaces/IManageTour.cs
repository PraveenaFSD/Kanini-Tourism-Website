using TourAPI.Models;

namespace TourAPI.Interfaces
{
    public interface IManageTour
    {
        public Task<Tour> AddTourpackage(Tour item);
        public Task<bool> UpdateTourpackage(Tour item);

        public Task<ICollection<Tour>> GetAllTourPackages();
    }
}
