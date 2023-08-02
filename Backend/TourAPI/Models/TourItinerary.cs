using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace TourAPI.Models
{
    public class TourItinerary
    {
        [Key]
        public int TourDestinationId { get; set; }
        public int TourId { get; set; }
        [ForeignKey("TourId")]
        [JsonIgnore]
        public Tour? Tour { get; set; }
        public int DayNo { get; set; }
        public string? LocationName { get; set; }
        public string? LocationDescription { get; set; }
        public DateTime ArivalTime { get; set; }
        public DateTime DepatureTime { get; set; }
        public string? DestinationImage { get; set; }
        public string? DestinationActivity { get; set; }

    }
}
