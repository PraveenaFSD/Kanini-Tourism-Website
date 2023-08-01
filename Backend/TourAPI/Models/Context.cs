using Microsoft.EntityFrameworkCore;

namespace TourAPI.Models
{
    public class Context : DbContext
    {
        public Context(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Tour> Tour { get; set; }
        public DbSet<Inclutions> Inclutions { get; set; }
        public DbSet<Exclutions> Exclutions { get; set; }
        public DbSet<TourInclutions> TourInclutions { get; set; }
        public DbSet<TourExclutions> TourExclutions { get; set; }
        public DbSet<Destinations> Destinations { get; set; }
        public DbSet<TourDestinations> TourDestinations { get; set; }
        public DbSet<TourDates> TourDates { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {



        }

    }
}
