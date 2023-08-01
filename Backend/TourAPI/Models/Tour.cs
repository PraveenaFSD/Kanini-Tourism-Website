using System.ComponentModel.DataAnnotations;

namespace TourAPI.Models
{
    public class Tour
    {
        [Key]
            public int TourId { get; set; }
        public string? TourName { get; set;}
        public string? TourDescription { get; set;}
        public string? TourType { get; set; }
        public float TourPrice { get; set; }
        public int NoOfDays { get; set; }
        public int NoOfNights { get; set;}
        public int MaxCapacity { get; set; }
        public int MinCapacity { get; set; }
        public string? TourImages { get; set; }
        public ICollection<TourDates>? TourDates  { get; set; }
        public ICollection<TourInclutions>? TourInclutions { get; set; }

        public ICollection<TourExclutions>? TourExclutions { get; set; }
        public ICollection<TourDestinations>? TourDestinations { get; set; }












    }
}
