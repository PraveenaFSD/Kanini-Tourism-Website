using System.ComponentModel.DataAnnotations;

namespace TourAPI.Models
{
    public class Destinations
    {
        [Key]
        public int DestinationId { get; set; }
        public string? DestinationName { get; set; }
        public string? Country { get; set; }
        public string? State { get; set;}


    }
}
