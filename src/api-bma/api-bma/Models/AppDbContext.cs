using Microsoft.EntityFrameworkCore;

namespace api_bma.Models
{
    public class AppDbContext: DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet <Beneficiario> Beneficiarios { get; set; }
        public DbSet<Dependente> Dependentes { get; set; }
        public DbSet<Endereco> Enderecos { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Beneficiario>().OwnsOne(p => p.titularBolsaFamilia);            

        }


    }
}
