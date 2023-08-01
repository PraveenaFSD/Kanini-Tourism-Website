using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace TourAPI.Models
{
    public class TourInclutions
    {
        [Key]
        public int TourInclutionId { get; set; }
        public int TourId { get; set; }
        [ForeignKey("TourId")]
        [JsonIgnore]
        public Tour? Tour { get; set; }
        public int InclutionId { get; set; }
        [ForeignKey("InclutionId")]
        public Inclutions? Inclutions { get; set; }

    }
}
