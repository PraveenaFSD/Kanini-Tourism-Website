using System.ComponentModel.DataAnnotations;

namespace TourAPI.Models
{
    public class Inclutions
    {
        [Key]
       public int InclutionId { get; set; }
        public string InclutionDescription { get;}
    }
}
