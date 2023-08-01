using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace TourAPI.Models
{
    public class TourExclutions
    {
        [Key]
        public int TourExclutionId { get; set; }
        public int TourId { get; set; }
        [ForeignKey("TourId")]
        [JsonIgnore]
        public Tour? Tour { get; set; }
        public int ExclutionId { get; set; }
        [ForeignKey("ExclutionId")]
        public Exclutions? Exclutions { get; set; }
    }
}
