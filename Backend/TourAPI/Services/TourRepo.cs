using TourAPI.Interfaces;
using TourAPI.Models;

namespace TourAPI.Services
{
    public class TourRepo : IRepo<int, Tour>
    {
        public Task<Tour?> Add(Tour item)
        {
            throw new NotImplementedException();
        }

        public Task<Tour?> Delete(int key)
        {
            throw new NotImplementedException();
        }

        public Task<Tour?> Get(int key)
        {
            throw new NotImplementedException();
        }

        public Task<ICollection<Tour>?> GetAll()
        {
            throw new NotImplementedException();
        }

        public Task<Tour?> Update(Tour item)
        {
            throw new NotImplementedException();
        }
    }
}
