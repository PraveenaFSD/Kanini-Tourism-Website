using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace TourAPI.Models
{
    public class TourDestinations
    {
        [Key]
        public int TourDestinationId { get; set; }
        public int TourId { get; set; }
        [ForeignKey("TourId")]
        [JsonIgnore]
        public Tour? Tour { get; set; }
        public int DestinationId{ get;}
        [ForeignKey("DestinationId")]
        public Destinations? Destinations { get; set; }
        public string? DestinationImage { get; set; }
        public string? DestinationActivity { get; set; }

    }
}
