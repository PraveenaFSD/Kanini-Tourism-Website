using TourAPI.Models;
using TourAPI.Models.NewFolder;

namespace TourAPI.Interfaces
{
    public interface IManageTour
    {
        public Task<Tour> AddTourpackage(Tour item);
        public Task<bool> UpdateTourpackage(Tour item);

        public Task<ICollection<Tour>> GetAllTourPackages();


    }
}
