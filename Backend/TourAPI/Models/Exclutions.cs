using System.ComponentModel.DataAnnotations;

namespace TourAPI.Models
{
    public class Exclutions
    {
        [Key]
        public int ExclutionId { get; set; }
        public string? ExclutionDescription { get; }
    }
}
