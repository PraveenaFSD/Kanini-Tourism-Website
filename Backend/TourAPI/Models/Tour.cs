using System.ComponentModel.DataAnnotations;

namespace TourAPI.Models
{
    public class Tour
    {
        [Key]
            public int TourId { get; set; }
        //public string? TourName { get; set;}
        public string? TourDescription { get; set;}
        public string? TourState { get; set; }  
        //public string? TourType { get; set; }
        public float TourPrice { get; set; }
        public int NoOfDays { get; set; }
        public int NoOfNights { get; set;}
        public string? TourImage { get; set; }
        public ICollection<TourDates>? TourDates  { get; set; }
        public ICollection<TourInclusions>? TourInclusions { get; set; }

        public ICollection<TourExclusions>? TourExclusions { get; set; }
      public ICollection<TourItinerary>? TourItinerary { get; set; }












    }
}
