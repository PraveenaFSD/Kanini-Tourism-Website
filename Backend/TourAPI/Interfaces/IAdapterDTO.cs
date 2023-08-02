using TourAPI.Models;
using TourAPI.Models.NewFolder;

namespace TourAPI.Interfaces
{
    public interface IAdapterDTO
    {
        public Task<ICollection<TourAddedDTO>> TouIntoLoanDTO(ICollection<Tour> tour);

    }
}
