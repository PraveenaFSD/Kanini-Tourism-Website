using System.ComponentModel.DataAnnotations;

namespace TourAPI.Models
{
    public class Exclusions
    {
        [Key]
        public int ExclusionId { get; set; }
        public string? ExclusionDescription { get; set; }
    }
}
