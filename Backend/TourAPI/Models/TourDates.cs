using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace TourAPI.Models
{
    public class TourDates
    {
        [Key]
        public int TourDateId { get; set; } 
        public int TourId { get; set;}
        [ForeignKey("TourId")]
        [JsonIgnore]
        public Tour? Tour { get; set; }
        public DateTime StartDate { get; set;}
        public DateTime EndDate { get; set; }

    }
}
