using System.ComponentModel.DataAnnotations;

namespace TourAPI.Models
{
    public class Inclusions
    {
        [Key]
       public int InclusionId { get; set; }
        public string? InclusionDescription { get; set; }
    }
}
